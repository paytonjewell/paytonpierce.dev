import BentoCard from "./BentoCard";
import { skillGroups } from "@/lib/constants";

const StackCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard title="Stack & Tools" className={className}>
      <div className="flex flex-col gap-4">
        {skillGroups.map(({ label, items }) => (
          <div key={label}>
            <h3 className="text-xs label-eyebrow text-faint mb-2">
              {label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="badge badge-outline badge-sm text-label hover:text-brand-start hover:outline-brand-start transition-colors cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};

export default StackCard;
