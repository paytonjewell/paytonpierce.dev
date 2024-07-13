import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react"

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payton Pierce | Portfolio",
  description: "Portfolio of Payton Pierce, frontend developer located in Wisconsin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} transition-colors duration-100`}>
        <ThemeProvider themes={["light", "dark"]} defaultTheme="system">
          <div className="max-w-screen-lg min-h-screen mx-auto flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex-grow flex flex-col justify-center items-center">{children}</main>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
