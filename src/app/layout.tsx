import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { NavBar } from "@/components";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BASIC/DEPT® | Digital Branding & Product Design Agency",
  description: "We design digital products, services, and eCommerce experiences for brands like Google, Airbnb, Patagonia, Apple, Beats by Dre and other category leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <NavBar />

        <div className="z-0">
          <div className="noise-texture-bg"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
