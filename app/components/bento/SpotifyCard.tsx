import BentoCard from "./BentoCard";
import { getSpotifyTrack } from "@/lib/spotify";

const THUMBNAIL_CLASSES = "w-12 h-12 rounded-md shrink-0";

const Thumbnail = ({ src, alt }: { src: string | null; alt: string }) =>
  src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={THUMBNAIL_CLASSES} />
  ) : (
    <div className={`${THUMBNAIL_CLASSES} bg-brand-gradient`} />
  );

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
          <Thumbnail src={track.albumArt} alt={`${track.title} album art`} />
          <div className="min-w-0">
            <p className="font-medium truncate">{track.title}</p>
            <p className="text-sm text-muted truncate">{track.artist}</p>
          </div>
        </a>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <Thumbnail src={null} alt="" />
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
