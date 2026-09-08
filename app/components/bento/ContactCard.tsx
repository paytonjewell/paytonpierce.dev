import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import BentoCard from "./BentoCard";
import { contact } from "@/lib/constants";

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

const ContactCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard title="Contact" className={className}>
      <div className="flex flex-col gap-3 text-sm">
        <a
          href={`mailto:${contact.email}`}
          className="link text-brand-start w-fit"
        >
          📧 {contact.email}
        </a>
        <a
          href={contact.resume.href}
          download={contact.resume.download}
          className="link text-brand-start w-fit"
        >
          📝 Download my resume
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
