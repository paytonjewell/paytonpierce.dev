import BentoCard from "./BentoCard";
import { getSpotifyTrack } from "@/lib/spotify";

const SpotifyCard = async ({ className = "" }: { className?: string }) => {
  const track = await getSpotifyTrack();

  return (
    <BentoCard
      title={track?.isPlaying ? "Now Playing" : "Last Played"}
      className={className}
    >
      {track ? (
        <a
          href={track.url}
          target="_blank"
          className="flex items-center gap-4 hover:opacity-80 transition-opacity"
        >
          {track.albumArt ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={track.albumArt}
              alt={`${track.title} album art`}
              className="w-12 h-12 rounded-md shrink-0"
            />
          ) : (
            <div className="w-12 h-12 rounded-md bg-brand-gradient shrink-0" />
          )}
          <div className="min-w-0">
            <p className="font-medium truncate">{track.title}</p>
            <p className="text-sm text-muted truncate">{track.artist}</p>
          </div>
        </a>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-brand-gradient shrink-0" />
            <div className="min-w-0">
              <p className="font-medium truncate">Nothing to show</p>
              <p className="text-sm text-muted truncate">
                Check back in a bit
              </p>
            </div>
          </div>
          <p className="text-xs text-faint mt-4">
            Spotify data isn&apos;t available right now
          </p>
        </>
      )}
    </BentoCard>
  );
};

export default SpotifyCard;
