import BentoCard from "./BentoCard";

const track = {
  title: "Placeholder Track",
  artist: "Placeholder Artist",
};

const SpotifyCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard title="Last Played" className={className}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-md bg-linear-to-br from-brand-start to-brand-end shrink-0" />
        <div className="min-w-0">
          <p className="font-medium truncate">{track.title}</p>
          <p className="text-sm opacity-60 truncate">{track.artist}</p>
        </div>
      </div>
      <p className="text-xs opacity-40 mt-4">
        Placeholder — Spotify API not wired up yet
      </p>
    </BentoCard>
  );
};

export default SpotifyCard;
