import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import { Analytics } from "@vercel/analytics/react";
import {
  SITE_NAME,
  ACCENT_STORAGE_KEY,
  ACCENT_ATTRIBUTE,
} from "@/lib/constants";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE_NAME} | Portfolio`,
  description: `Portfolio of ${SITE_NAME}, frontend developer located in Wisconsin`,
};

const ACCENT_SCRIPT = `(function () {
  try {
    var accent = window.localStorage.getItem("${ACCENT_STORAGE_KEY}");
    if (accent) document.documentElement.setAttribute("${ACCENT_ATTRIBUTE}", accent);
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
