"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaCopy, FaCheck } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

import BentoCard from "./BentoCard";
import { contact } from "@/lib/constants";
import { useState } from "react";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/paytonjewell/",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/payton-pierce/",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/paytonpiercedev",
    label: "Twitter",
  },
];

const onCopyEmail = () => {
  navigator.clipboard.writeText(contact.email);
};

const ContactCard = ({ className = "" }: { className?: string }) => {
  const [emailWasCopied, setEmailWasCopied] = useState(false);
  return (
    <BentoCard title="Get in touch" className={className}>
      <div className="flex flex-col gap-3 text-sm">
        <span>
          <a href={`mailto:${contact.email}`} className="link-brand">
            {contact.email}
          </a>
          {!emailWasCopied ? (
            <FaCopy
              className="inline ml-2 cursor-pointer"
              onClick={() => {
                onCopyEmail();
                setEmailWasCopied(true);
                setTimeout(() => setEmailWasCopied(false), 2000);
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

      <ul className="flex gap-4 text-2xl mt-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <li
            key={label}
            className="hover:scale-125 hover:text-brand-start transition-all ease-in-out"
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
