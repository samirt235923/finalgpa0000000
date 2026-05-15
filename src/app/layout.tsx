import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Analytics from '@/components/Analytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'GPA Calculator - Free & Accurate GPA Calculator for Students',
  description: 'Calculate your GPA instantly with our free GPA calculator. Perfect for college and high school students. Accurate, fast, and easy to use.',
  keywords: 'GPA calculator, calculate GPA, GPA tool, college GPA, high school GPA',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'GPA Calculator - Free & Accurate GPA Calculator for Students',
    description: 'Calculate your GPA instantly with our free GPA calculator.',
    url: 'https://topgpacalculator.com',
    siteName: 'GPA Calculator',
    images: [
      {
        url: 'https://topgpacalculator.com/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Top GPA Calculator social card',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator - Free & Accurate GPA Calculator for Students',
    description: 'Calculate your GPA instantly with our free GPA calculator.',
    creator: '@gpacalculator',
    images: ['https://topgpacalculator.com/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://topgpacalculator.com',
  },
  verification: {
    google: 'sOKuDeXdAwkrZahqPDQMw4dLHFjmANUvm4cWywafui8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066cc" />
        <meta property="og:image" content="https://topgpacalculator.com/logo.svg" />
        <meta property="og:image:alt" content="Top GPA Calculator social card" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://topgpacalculator.com/logo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5159148916272403"
     crossOrigin="anonymous"></script>
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical above-the-fold CSS */
          *{margin:0;padding:0;box-sizing:border-box}
          html{scroll-behavior:smooth;scroll-padding-top:5rem}
          body{font-family:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#ffffff;color:#1e293b;line-height:1.6}
          h1,h2,h3,h4,h5,h6{font-family:var(--font-poppins),var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}
          ::-webkit-scrollbar{width:8px}
          ::-webkit-scrollbar-track{background:#f8fafc}
          ::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 100%);border-radius:4px}
          ::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#1d4ed8 0%,#1e40af 100%)}
          img{max-width:100%;height:auto;border-radius:0.5rem}
          a{color:#2563eb;text-decoration:none;transition:all 0.2s ease}
          a:hover{color:#1d4ed8;text-decoration:underline}
          button{cursor:pointer;font-weight:500;transition:all 0.2s ease;border:none;outline:none}
          button:focus{outline:2px solid #3b82f6;outline-offset:2px}
          input,select,textarea{font-family:inherit;font-size:inherit;transition:all 0.2s ease}
          input:focus,select:focus,textarea:focus{outline:2px solid #3b82f6;outline-offset:2px}
          section{margin:0;padding:5rem 0}
          section:first-of-type{padding-top:0}
          @media(max-width:640px){section{padding:3rem 0}}
        `}} />
      </head>
      <script async src="https://quge5.com/88/tag.min.js" data-zone="239635" data-cfasync="false"></script>
      <body className="bg-white">
        <Analytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}





