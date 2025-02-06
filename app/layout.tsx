import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Si Belle',
  description: 'Explore the enchanting world of baroque pop music.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <Header />
        <main className="flex-1 min-h-screen px-0 lg:px-20">{children}</main>
      </body>
    </html>
  );
}
