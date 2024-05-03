import type { Metadata } from "next";
import {Providers} from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './NavBar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-blue-100 ">
      <body className={inter.className} >
      <Providers>
        {children}
        </Providers></body>
    </html>
  );
}
