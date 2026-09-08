import BentoCard from "./BentoCard";
import { skills } from "@/lib/constants";

const groups = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks & State", items: skills.frameworksState },
  { label: "Styling & UI", items: skills.stylingUI },
  { label: "Backend & Data", items: skills.backendData },
  { label: "Dev Workflow", items: skills.devWorkflow },
];

const StackCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard title="Stack & Tools" className={className}>
      <div className="flex flex-col gap-4">
        {groups.map(({ label, items }) => (
          <div key={label}>
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-wide opacity-40 mb-2">
              {label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="badge badge-outline badge-sm opacity-80 hover:text-brand-start hover:outline-brand-start transition-colors cursor-default"
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
