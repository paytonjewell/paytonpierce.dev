import BentoCard from "./BentoCard";

const track = {
  title: "Placeholder Track",
  artist: "Placeholder Artist",
};

const SpotifyCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard title="Last Played" className={className}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-md bg-brand-gradient shrink-0" />
        <div className="min-w-0">
          <p className="font-medium truncate">{track.title}</p>
          <p className="text-sm text-muted truncate">{track.artist}</p>
        </div>
      </div>
      <p className="text-xs text-faint mt-4">
        Placeholder — Spotify API not wired up yet
      </p>
    </BentoCard>
  );
};

export default SpotifyCard;
