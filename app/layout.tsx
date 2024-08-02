import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ReduxProvider from "./components/ReduxProvider";
import LeftNav from "./components/LeftNav";
import TopNav from './components/TopNav'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multify",
  description: "Multiply your efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col lg:flex-row w-full`}>
        <ReduxProvider>
          <TopNav />
          <LeftNav />
          {children}  
        </ReduxProvider>
      </body>
    </html>
  );
}
