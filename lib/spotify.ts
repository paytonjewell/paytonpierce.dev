const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

export type SpotifyTrack = {
  title: string;
  artist: string;
  url: string;
  albumArt: string | null;
  isPlaying: boolean;
};

type SpotifyArtist = { name: string };
type SpotifyTrackItem = {
  name: string;
  artists: SpotifyArtist[];
  external_urls: { spotify: string };
  album: { images: { url: string }[] };
};

const getAccessToken = async () => {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    cache: "no-store",
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token as string;
};

const toTrack = (
  item: SpotifyTrackItem,
  isPlaying: boolean,
): SpotifyTrack => ({
  title: item.name,
  artist: item.artists.map((artist) => artist.name).join(", "),
  url: item.external_urls.spotify,
  albumArt: item.album.images[0]?.url ?? null,
  isPlaying,
});

export const getSpotifyTrack = async (): Promise<SpotifyTrack | null> => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) return null;

    const headers = { Authorization: `Bearer ${accessToken}` };

    const nowPlayingRes = await fetch(NOW_PLAYING_URL, {
      headers,
      next: { revalidate: 30 },
    });

    if (nowPlayingRes.status === 200) {
      const data = await nowPlayingRes.json();
      if (data?.item) return toTrack(data.item, data.is_playing);
    }

    const recentRes = await fetch(RECENTLY_PLAYED_URL, {
      headers,
      next: { revalidate: 30 },
    });

    if (!recentRes.ok) return null;
    const recentData = await recentRes.json();
    const track = recentData?.items?.[0]?.track;
    return track ? toTrack(track, false) : null;
  } catch {
    return null;
  }
};
