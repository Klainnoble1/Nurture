import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nurture Nest | Multilingual Nursery in London',
    template: '%s | Nurture Nest',
  },
  description:
    'A multilingual, inclusive nursery rooted in British values. Providing early childhood education in central London.',
  keywords: [
    'nursery',
    'preschool',
    'early childhood education',
    'multilingual',
    'inclusive',
    'London',
    'SE1',
  ],
  authors: [{ name: 'Nurture Nest' }],
  creator: 'Nurture Nest',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://thenurture-nest.co.uk',
    siteName: 'Nurture Nest',
    images: [
      {
        url: 'https://thenurture-nest.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nurture Nest Nursery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurture Nest | Multilingual Nursery',
    description: 'Inclusive early childhood education in central London',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body>
        {children}
        
        {/* Cookie Banner */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!localStorage.getItem('cookies_accepted')) {
                document.body.insertAdjacentHTML('beforeend', \`
                  <div id="cookie-banner" style="position: fixed; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.99) 100%); backdrop-filter: blur(12px); color: #e2e8f0; padding: 1rem 1.5rem; z-index: 9999; border-top: 1px solid rgba(148, 163, 184, 0.2); font-family: 'DM Sans', system-ui, sans-serif;">
                    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
                      <p style="margin: 0; font-size: 0.9375rem; line-height: 1.5;">We use cookies to improve your experience and analyse site traffic. By continuing, you accept our <a href="/privacy-policy" style="color: #4ade80; text-decoration: underline;">cookie policy</a>.</p>
                      <div style="display: flex; gap: 0.75rem;">
                        <button onclick="document.getElementById('cookie-banner').remove()" style="padding: 0.5rem 1.25rem; border: 1px solid rgba(248, 250, 252, 0.3); background: transparent; color: #e2e8f0; cursor: pointer; border-radius: 8px; font-size: 0.875rem; font-weight: 500;">Decline</button>
                        <button onclick="localStorage.setItem('cookies_accepted', 'true'); document.getElementById('cookie-banner').remove()" style="padding: 0.5rem 1.25rem; background: #16a34a; color: white; cursor: pointer; border-radius: 8px; font-size: 0.875rem; font-weight: 600;">Accept</button>
                      </div>
                    </div>
                  </div>
                \`);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
