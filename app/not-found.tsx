import Link from "next/link";
import type { Metadata } from "next";
import BentoCard from "./components/bento/BentoCard";

export const metadata: Metadata = {
  title: "Page Not Found | Payton Pierce",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-8">
      <BentoCard className="w-md items-center text-center">
        <p className="bg-linear-to-tl from-brand-start to-brand-end text-transparent bg-clip-text font-black text-7xl">
          404
        </p>
        <h1 className="text-xl font-semibold mt-2">Page not found</h1>
        <p className="text-sm text-muted mt-2">This page wandered off.</p>
        <Link href="/" className="link-brand mt-4">
          Back home
        </Link>
      </BentoCard>
    </div>
  );
}
