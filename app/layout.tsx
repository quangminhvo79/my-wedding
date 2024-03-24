import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Kristi } from "next/font/google";
import { Alex_Brush } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
});

const kristi = Kristi({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kristi',
});

const alexBrush = Alex_Brush({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex-brush',
});

export const metadata: Metadata = {
  title: "Minh & Thư Wedding",
  description: "Minh & Thư Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{"colorScheme": "dark"}} className={`${kristi.variable} font-kristi ${alexBrush.variable} font-alex-brush`}>
      <body className={inter.className} >{children}</body>
      <Script src="/js/jquery-1.12.4.min.js" />
      <Script src="/js/jquery.countdown.min.js" />
      <Script src="/js/placeholders.min.js" />
      <Script src="/js/smooth-scroll.js" />
      <Script src="/js/script.js" />
    </html>
  );
}
