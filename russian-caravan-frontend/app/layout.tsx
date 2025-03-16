import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import RootLayout from '@/components/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Russian Caravan',
  description: 'Туры по России',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="yandex" content="none" />
        <meta name="bingbot" content="noindex,nofollow" />
        <meta name="slurp" content="noindex,nofollow" />
        <meta name="duckduckbot" content="noindex,nofollow" />
        <meta name="baiduspider" content="noindex,nofollow" />
        <meta name="crawl-delay" content="10" />
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={inter.className}>
        <RootLayout>
          {children}
        </RootLayout>
        <Footer />
      </body>
    </html>
  );
}
