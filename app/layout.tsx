import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Victor Villin — Machine Learning Researcher',
  description: 'Personal website of Victor Villin, a machine learning researcher working on reinforcement learning, reward inference, and multi-agent systems.',
  metadataBase: new URL('https://victorvillin-personal-website.breezy-smile-4226.chatgpt.site'),
  openGraph: {
    title: 'Victor Villin — Machine Learning Researcher',
    description: 'Reinforcement learning, reward inference, and multi-agent systems.',
    type: 'website',
    url: 'https://victorvillin-personal-website.breezy-smile-4226.chatgpt.site',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Victor Villin — reinforcement learning, reward inference, and multi-agent systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Villin — Machine Learning Researcher',
    description: 'Reinforcement learning, reward inference, and multi-agent systems.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
