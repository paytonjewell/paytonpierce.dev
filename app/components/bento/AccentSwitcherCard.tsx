"use client";

import { useSyncExternalStore } from "react";
import BentoCard from "./BentoCard";
import { ACCENTS, ACCENT_ATTRIBUTE, ACCENT_STORAGE_KEY } from "@/lib/constants";

const ACCENT_EVENT = "accent-change";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(ACCENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(ACCENT_EVENT, callback);
  };
};

const getSnapshot = () =>
  window.localStorage.getItem(ACCENT_STORAGE_KEY) ?? ACCENTS[0].id;
const getServerSnapshot = () => ACCENTS[0].id;

const AccentSwitcherCard = ({ className = "" }: { className?: string }) => {
  const active = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const select = (id: string) => {
    document.documentElement.setAttribute(ACCENT_ATTRIBUTE, id);
    window.localStorage.setItem(ACCENT_STORAGE_KEY, id);
    window.dispatchEvent(new Event(ACCENT_EVENT));
  };

  return (
    <BentoCard title="Accent Color" className={className}>
      <div className="flex gap-3 justify-center">
        {ACCENTS.map(({ id, label, from, to }) => (
          <button
            key={id}
            type="button"
            aria-label={`Use ${label} accent`}
            onClick={() => select(id)}
            className={`w-12 h-12 rounded-full transition-transform hover:scale-110 ${
              active === id
                ? "ring-2 ring-offset-2 ring-offset-base-200 ring-base-content"
                : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${from}, ${to})`,
            }}
          />
        ))}
      </div>
    </BentoCard>
  );
};

export default AccentSwitcherCard;
