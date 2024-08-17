import StoreProvider from '@/store/store-utils/store-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

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
      <body className={inter.className}>
        <StoreProvider>
          <div>{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
