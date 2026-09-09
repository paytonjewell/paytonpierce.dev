import BentoCard from "./BentoCard";
import { SITE_NAME } from "@/lib/constants";

const CopyrightCard = ({ className = "" }: { className?: string }) => {
  const year = new Date().getFullYear();

  return (
    <BentoCard className={`justify-center ${className}`}>
      <p className="text-sm text-center text-muted">
        &copy; {year} · Made with &hearts; by {SITE_NAME}
      </p>
    </BentoCard>
  );
};

export default CopyrightCard;
