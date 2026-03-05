#!/usr/bin/env node

/**
 * Supabase Database Migration Script
 *
 * Creates tables (via DATABASE_URL + schema.sql) and seeds initial data.
 * Usage: pnpm migrate-db  or  npm run migrate-db
 *
 * Required in .env.local: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * Optional: DATABASE_URL (Postgres URI from Supabase → Settings → Database) for one-command schema create
 */

const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const databaseUrl = process.env.DATABASE_URL;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    '❌ Missing env in .env.local: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY. Copy from .env.local.example.'
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

async function runSchemaSql() {
  if (!databaseUrl) {
    console.log(
      '⚠️  DATABASE_URL not set. Skipping schema create.\n' +
      '   Add DATABASE_URL to .env.local (Supabase → Settings → Database → Connection string)\n' +
      '   or run scripts/schema.sql in Supabase SQL Editor, then run: pnpm migrate-db\n'
    );
    return true;
  }
  const schemaPath = path.resolve(process.cwd(), 'scripts', 'schema.sql');
  if (!fs.existsSync(schemaPath)) {
    console.error('❌ scripts/schema.sql not found.');
    process.exit(1);
  }
  const sql = fs.readFileSync(schemaPath, 'utf8');
  const { Client } = require('pg');
  console.log('📝 Running schema (scripts/schema.sql)...\n');
  const client = new Client({ connectionString: databaseUrl });
  try {
    await client.connect();
    await client.query(sql);
    console.log('✅ Schema applied.\n');
    return true;
  } catch (err) {
    if (err.code === 'ENOTFOUND' || err.message.includes('getaddrinfo')) {
      const ref = supabaseUrl && supabaseUrl.match(/https?:\/\/([^.]+)\.supabase\.co/)?.[1];
      const sqlEditorUrl = ref
        ? 'https://supabase.com/dashboard/project/' + ref + '/sql/new'
        : 'https://supabase.com/dashboard';
      console.error(
        '❌ Cannot resolve database host (direct connection uses IPv6; many networks only have IPv4).\n\n' +
        '   EASIEST: Run the schema in Supabase, then run this script again.\n\n' +
        '   1. Open: ' + sqlEditorUrl + '\n' +
        '   2. Open scripts/schema.sql in your project and copy its full content\n' +
        '   3. Paste into the SQL Editor and click Run\n' +
        '   4. Run: pnpm run migrate-db   (tables exist now, so only seeding will run)\n\n' +
        '   OR use Session mode (IPv4) in .env as DATABASE_URL:\n' +
        '   • Dashboard → Connect → choose "Session" → copy the URI\n' +
        '   • Format: postgres://postgres.' + (ref || 'PROJECT_REF') + ':[PASSWORD]@aws-0-REGION.pooler.supabase.com:5432/postgres\n' +
        '   • Encode @ in password as %40\n'
      );
    } else {
      console.error('❌ Schema error:', err.message);
    }
    return false;
  } finally {
    await client.end().catch(function () {});
  }
}

async function seedInitialData() {
  console.log('🌱 Seeding initial data...\n');

  try {
    // Insert default settings
    const settings = [
      { key: 'site_name', value: 'Nurture Nest' },
      { key: 'site_description', value: 'A Multilingual Inclusive Nursery Rooted in British Values' },
      { key: 'site_email', value: 'contact@nurture-nest.co.uk' },
      { key: 'site_phone', value: '+44 7956 176 257' },
      { key: 'site_address', value: '61 Great Dover Street, London, SE1' },
      { key: 'opening_hours', value: 'Mon-Fri: 09:00 - 17:00, Sat-Sun: Closed' },
    ];

    for (const setting of settings) {
      const { error } = await supabase
        .from('settings')
        .upsert([setting], { onConflict: 'key' });
      if (error) throw error;
    }
    console.log('✓ Settings seeded');

    const { error: homeError } = await supabase
      .from('pages')
      .upsert([{
        slug: 'home',
        title: 'Welcome to Nurture Nest',
        description: 'A Multilingual Inclusive Nursery Rooted in British Values',
        content: 'Our children explore, learn, and grow in a safe, loving environment.',
        published: true,
      }], { onConflict: 'slug' });
    if (homeError) throw homeError;
    console.log('✓ Home page created');

    console.log('\n✅ Initial data seeded successfully!\n');
    return true;
  } catch (error) {
    if (error.code === '42P01' || (error.message && error.message.includes('does not exist'))) {
      console.error(
        '❌ Tables do not exist. Add DATABASE_URL to .env.local and run again,\n' +
        '   or run scripts/schema.sql in Supabase SQL Editor then: pnpm migrate-db\n'
      );
    } else {
      console.error('❌ Error seeding data:', error.message);
    }
    return false;
  }
}

async function setupRLS() {
  console.log('🔒 RLS: run scripts/setup-rls.sql in Supabase SQL Editor if you use RLS.\n');
  return true;
}

async function migrate() {
  console.log('🚀 Nurture Nest – Supabase migration\n');
  console.log('   URL: ' + supabaseUrl + '\n');

  const schemaOk = await runSchemaSql();
  if (!schemaOk) process.exit(1);

  const seeded = await seedInitialData();
  if (!seeded) process.exit(1);

  await setupRLS();
  console.log('═════════════════════════════════════════════════════');
  console.log('✅ Migration complete');
  console.log('═════════════════════════════════════════════════════\n');
}

migrate().catch(function (err) {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});
