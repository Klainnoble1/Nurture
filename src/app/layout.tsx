import type { Metadata, Viewport } from 'next';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

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

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
