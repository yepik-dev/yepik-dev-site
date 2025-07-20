import type { Metadata } from "next";
import { Playfair_Display, Merriweather, Inter } from "next/font/google";

import "./globals.css";

import { Footer } from "@/custom_components/Footer";
import { Header } from "@/custom_components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-merriweather",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andy Yepik website",
  description:
    "Hello, I'm Andy Yepik, a software engineer and web developer. it is my personal website where I share my projects, blog posts, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="flex flex-col font-body min-h-screen bg-background max-w-[1440px] mx-auto ">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
