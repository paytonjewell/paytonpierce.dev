import BentoCard from "./BentoCard";

const CopyrightCard = ({ className = "" }: { className?: string }) => {
  const year = new Date().getFullYear();

  return (
    <BentoCard className={`justify-center ${className}`}>
      <p className="text-sm text-center text-muted">
        &copy; {year} · Made with &hearts; by Payton Pierce
      </p>
    </BentoCard>
  );
};

export default CopyrightCard;
