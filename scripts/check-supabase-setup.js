#!/usr/bin/env node

/**
 * Supabase Setup Checker
 * Validates that your Supabase environment is correctly configured
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('🔍 Checking Supabase Setup...\n');

// Check environment variables
console.log('📋 Environment Variables:');
console.log(`  ${supabaseUrl ? '✓' : '✗'} NEXT_PUBLIC_SUPABASE_URL`);
console.log(`  ${anonKey ? '✓' : '✗'} NEXT_PUBLIC_SUPABASE_ANON_KEY`);
console.log(`  ${serviceRoleKey ? '✓' : '✗'} SUPABASE_SERVICE_ROLE_KEY`);

if (!supabaseUrl || !anonKey || !serviceRoleKey) {
  console.log('\n❌ Missing environment variables. Please copy .env.local.example to .env.local\n');
  process.exit(1);
}

async function checkConnection() {
  console.log('\n🌐 Testing Database Connection...');

  try {
    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const { data, error } = await supabase
      .from('pages')
      .select('count', { count: 'exact', head: true })
      .limit(1);

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    console.log('  ✓ Connected to Supabase');
    return true;
  } catch (error) {
    console.log('  ✗ Connection failed:', error.message);
    return false;
  }
}

async function checkTables() {
  console.log('\n📊 Checking Database Tables:');

  try {
    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const tables = ['pages', 'settings', 'contact_submissions', 'news', 'gallery', 'staff'];

    for (const table of tables) {
      try {
        const { error } = await supabase
          .from(table)
          .select('count', { count: 'exact', head: true })
          .limit(1);

        if (error && error.code === 'PGRST116') {
          console.log(`  ✗ ${table} - table not found`);
        } else if (error) {
          throw error;
        } else {
          console.log(`  ✓ ${table}`);
        }
      } catch (error) {
        console.log(`  ✗ ${table} - ${error.message}`);
      }
    }
  } catch (error) {
    console.log('  ✗ Error checking tables:', error.message);
  }
}

async function run() {
  const connected = await checkConnection();

  if (connected) {
    await checkTables();
    console.log('\n✅ Setup looks good! You can run the migration script.\n');
  } else {
    console.log('\n❌ Cannot connect to Supabase. Check your credentials.\n');
  }
}

run().catch(console.error);
