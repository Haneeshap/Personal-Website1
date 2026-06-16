import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aisystems.engineer'),
  title: {
    default: 'AI Systems Engineer | Production AI & ML Systems',
    template: '%s | AI Systems Engineer',
  },
  description:
    'Building Production AI Systems, Agentic Workflows, LLMOps Platforms, Data Pipelines, and Cloud-Native AI Applications. Senior AI Systems Engineer specializing in enterprise-scale ML infrastructure.',
  keywords: [
    'AI Systems Engineer',
    'Machine Learning',
    'LLMOps',
    'MLOps',
    'Agentic AI',
    'RAG Systems',
    'Data Engineering',
    'Cloud Architecture',
    'AI Infrastructure',
    'Production AI',
  ],
  authors: [{ name: 'AI Systems Engineer' }],
  creator: 'AI Systems Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aisystems.engineer',
    siteName: 'AI Systems Engineer Portfolio',
    title: 'AI Systems Engineer | Production AI & ML Systems',
    description:
      'Building Production AI Systems, Agentic Workflows, LLMOps Platforms, Data Pipelines, and Cloud-Native AI Applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Systems Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Systems Engineer | Production AI & ML Systems',
    description:
      'Building Production AI Systems, Agentic Workflows, LLMOps Platforms, Data Pipelines, and Cloud-Native AI Applications.',
    images: ['/og-image.png'],
    creator: '@aisystemseng',
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
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
