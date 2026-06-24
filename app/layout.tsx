import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanjay-portfolio.vercel.app'),
  title: 'Kancharla Tridev Sanjay - AI Engineer & Full-Stack Developer',
  description:
    'I build full-stack applications with AI capabilities. LLMs, Computer Vision, React, Python, and FastAPI. Open to Full-Stack and AI Engineering roles.',
  keywords: [
    'AI Engineer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Python',
    'FastAPI',
    'LLMs',
    'Computer Vision',
    'Kancharla Tridev Sanjay',
    'Sanjay Kancharla',
  ],
  authors: [{ name: 'Kancharla Tridev Sanjay' }],
  creator: 'Kancharla Tridev Sanjay',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanjay-portfolio.vercel.app',
    title: 'Kancharla Tridev Sanjay - AI Engineer & Full-Stack Developer',
    description: 'I build full-stack applications with AI capabilities.',
    siteName: 'Sanjay Kancharla Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kancharla Tridev Sanjay - AI Engineer & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kancharla Tridev Sanjay - AI Engineer & Full-Stack Developer',
    description: 'I build full-stack applications with AI capabilities.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
