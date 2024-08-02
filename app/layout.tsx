import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import StoreProvider from '@/store/StoreProvider';
import Header from '@/components/home/Header';
import LeftSidebar from '@/components/common/left-sidebar';
import RightSidebar from '@/components/common/right-sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quran Majid',
  description: 'Created By Ibrahim Khalil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="ltr" lang="en">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
