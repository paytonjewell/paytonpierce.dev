import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payton Pierce | Portfolio",
  description:
    "Portfolio of Payton Pierce, frontend developer located in Wisconsin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="max-w-5xl md:px-none px-6 min-h-screen mx-auto flex flex-col justify-center items-center">
          <Navbar />
          <main className="grow flex flex-col justify-center items-center">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
