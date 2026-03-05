# 🌱 Nurture Nest - Next.js Website

A stunning, modern website for Nurture Nest multilingual nursery built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## ✨ Features

- **Modern Design**: Beautiful, responsive interface with smooth animations
- **Secure**: Security headers, CSRF protection, and environment variable management
- **Database**: Supabase integration for scalable content management
- **SEO Optimized**: Built-in meta tags, structured data, and sitemaps
- **Performance**: Optimized images, code splitting, and caching strategies
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Mobile First**: Fully responsive design for all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- A Supabase account (free tier available at [supabase.com](https://supabase.com))

### 1. Clone & Install

```bash
# Clone the repository
git clone <your-repo>
cd nurture-nest-nextjs

# Install dependencies
npm install
```

### 2. Setup Supabase

#### Create a Supabase Project

1. Go to [app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Fill in project details and create
4. Wait for initialization to complete

#### Get Your Credentials

1. Go to **Settings** → **API**
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` secret → `SUPABASE_SERVICE_ROLE_KEY`

#### Configure Environment Variables

```bash
# Copy the example file
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials
# NEXT_PUBLIC_SUPABASE_URL=your_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
# SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

### 3. Run Database Migration

```bash
# Check Supabase setup
npm run migrate-db:check

# Run migration (creates tables and seeds data)
npm run migrate-db
```

#### Manual RLS Setup (Important!)

1. Go to your Supabase Dashboard → **SQL Editor**
2. Create a new query
3. Copy the contents of `scripts/setup-rls.sql`
4. Paste and execute

This sets up Row Level Security policies for production security.

### 4. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## 📁 Project Structure

```
nurture-nest-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── Header.tsx            # Navigation
│   │   ├── Footer.tsx            # Footer
│   │   └── Button.tsx            # Reusable button
│   └── lib/
│       └── supabase.ts           # Supabase client
├── scripts/
│   ├── migrate-to-supabase.js    # Database migration
│   ├── check-supabase-setup.js   # Verify setup
│   └── setup-rls.sql            # Security policies
├── public/
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── .env.local.example
```

## 🛠️ Development

### Add New Pages

Create a new file in `src/app/` with a `.tsx` extension:

```typescript
// src/app/about.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Your content */}
      </main>
      <Footer />
    </>
  );
}
```

### Database Operations

Supabase client is pre-configured:

```typescript
import { supabase } from '@/lib/supabase';

// Query data
const { data, error } = await supabase
  .from('pages')
  .select('*')
  .eq('published', true);

// Insert data
const { data, error } = await supabase
  .from('pages')
  .insert([{ slug: 'test', title: 'Test' }]);
```

### Styling

Uses Tailwind CSS with custom color variables:

```typescript
// Colors in tailwind.config.ts
--color-primary: #388e3c (green)
--color-accent: #f39c12 (orange)

// Use in components
<div className="bg-nest-600 text-warm-500">
```

## 🔒 Security Features

- **Headers**: HTTPS-only, CSP, X-Frame-Options
- **Environment Variables**: Sensitive keys excluded from frontend
- **RLS Policies**: Row-level database security
- **Input Validation**: Sanitization for forms
- **CORS**: Properly configured for Supabase

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

Works on any Node.js 18+ host:

```bash
npm run build
npm start
```

## 📊 Database Schema

### Tables Created

- **pages**: Page content and metadata
- **settings**: Site configuration
- **contact_submissions**: Contact form data
- **news**: Blog/news articles
- **gallery**: Image gallery
- **staff**: Team members

## 🤝 Contact Forms

Contact forms are pre-built. To handle submissions:

```typescript
// src/app/api/contact.ts
const { data, error } = await supabase
  .from('contact_submissions')
  .insert([formData]);
```

## 🐛 Troubleshooting

### "Missing Supabase environment variables"

- Check `.env.local` exists
- Verify all three keys are present
- Restart dev server after editing `.env.local`

### "Cannot connect to Supabase"

- Verify project is running in Supabase dashboard
- Check credentials are correct
- Ensure IP is whitelisted (if applicable)

### Migration script fails

```bash
# Run the checker first
npm run migrate-db:check

# Check that SUPABASE_SERVICE_ROLE_KEY is set
echo $SUPABASE_SERVICE_ROLE_KEY
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 📄 License

MIT - Feel free to use this for your project!

## 🎉 Next Steps

1. ✅ Setup complete
2. 📝 Customize content in pages
3. 🖼️ Add images to public folder
4. 🎨 Update colors in tailwind.config.ts
5. 🚀 Deploy to production

---

**Built with ❤️ for Nurture Nest**
