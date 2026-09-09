import IntroCard from "./components/bento/IntroCard";
import ContactCard from "./components/bento/ContactCard";
import StackCard from "./components/bento/StackCard";
import TimeCard from "./components/bento/TimeCard";
import AccentSwitcherCard from "./components/bento/AccentSwitcherCard";
import SpotifyCard from "./components/bento/SpotifyCard";
import CopyrightCard from "./components/bento/CopyrightCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-4 w-full py-8">
      {/* contents on mobile lets order-* interleave with the right group below; a real flex column at lg keeps this side's height independent (masonry) */}
      <div className="contents lg:flex lg:flex-col lg:col-span-2 lg:gap-4">
        <IntroCard className="order-1" />
        <div className="order-3 grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
          <div className="flex flex-col gap-4">
            <ContactCard />
            <AccentSwitcherCard />
          </div>
          <div className="flex flex-col gap-4">
            <TimeCard />
            <SpotifyCard />
          </div>
        </div>
      </div>
      <div className="contents lg:flex lg:flex-col lg:gap-4">
        <StackCard className="order-2" />
        <CopyrightCard className="order-4" />
      </div>
    </div>
  );
}
