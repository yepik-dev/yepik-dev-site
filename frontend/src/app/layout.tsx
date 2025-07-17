import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/custom_components/Footer";
import { Header } from "@/custom_components/Header";

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
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background max-w-[1440px] mx-auto">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
