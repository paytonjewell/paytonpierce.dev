"use client";
import Link from "next/link";
import { FaCopy, FaCheck, FaFileDownload } from "react-icons/fa";

import BentoCard from "./BentoCard";
import { contact, socials } from "@/lib/constants";
import { useState } from "react";

const copyEmail = async () => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(contact.email);
      return true;
    }

    // Clipboard API is unavailable outside secure contexts (e.g. testing over a plain-HTTP LAN address)
    const textarea = document.createElement("textarea");
    textarea.value = contact.email;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
};

const ContactCard = ({ className = "" }: { className?: string }) => {
  const [emailWasCopied, setEmailWasCopied] = useState(false);
  return (
    <BentoCard title="Get in touch" className={className}>
      <div className="flex sm:text-sm flex-col gap-3 items-center sm:items-start">
        <span>
          <a href={`mailto:${contact.email}`} className="link-brand">
            {contact.email}
          </a>
          {!emailWasCopied ? (
            <FaCopy
              className="inline ml-2 cursor-pointer"
              onClick={async () => {
                if (await copyEmail()) {
                  setEmailWasCopied(true);
                  setTimeout(() => setEmailWasCopied(false), 2000);
                }
              }}
            />
          ) : (
            <FaCheck color="green" className="inline ml-2 cursor-pointer" />
          )}
        </span>
        <a
          href={contact.resume.href}
          download={contact.resume.download}
          className="link-brand flex items-center gap-1"
        >
          CV <FaFileDownload color="white" />
        </a>
      </div>

      <ul className="flex gap-4 text-2xl mt-4 justify-center">
        {socials.map(({ icon: Icon, href, label }) => (
          <li
            key={label}
            className="hover:scale-110 hover:text-brand-start transition-all ease-in-out"
          >
            <Link href={href} target="_blank" aria-label={label}>
              <Icon />
            </Link>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
};

export default ContactCard;
