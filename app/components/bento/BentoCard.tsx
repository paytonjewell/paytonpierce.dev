import { ReactNode } from "react";

const BentoCard = ({
  children,
  className = "",
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <div
      className={`rounded-box border border-base-content/25 bg-base-200 px-6 py-4 flex flex-col justify-center ${className}`}
    >
      {title && (
        <h2 className="text-xs font-semibold uppercase tracking-wide opacity-75 mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default BentoCard;
