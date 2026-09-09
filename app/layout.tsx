import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payton Pierce | Portfolio",
  description:
    "Portfolio of Payton Pierce, frontend developer located in Wisconsin",
};

const ACCENT_SCRIPT = `(function () {
  try {
    var accent = window.localStorage.getItem("accent");
    if (accent) document.documentElement.setAttribute("data-accent", accent);
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ACCENT_SCRIPT }} />
      </head>
      <body className={geist.className}>
        <div className="max-w-4xl md:px-none px-6 min-h-screen mx-auto flex flex-col">
          <Navbar />
          <main className="grow flex flex-col">{children}</main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
