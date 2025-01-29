import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Farzad Barzin',
  description:
    'Farzad Barzin is a software engineer based in Philadelphia, USA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="container mx-auto max-w-screen-2xl px-4">
          {children}
        </div>
        <footer className="bottom-0 row-start-3 flex flex-wrap items-center justify-center gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Farzad Barzin. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
