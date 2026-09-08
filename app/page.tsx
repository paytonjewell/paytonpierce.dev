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
      <IntroCard className="lg:col-span-2" />
      <StackCard className="lg:col-start-3 lg:row-start-1 lg:row-span-2" />
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
        <div className="flex flex-col gap-4">
          <ContactCard />
          <AccentSwitcherCard />
        </div>
        <div className="flex flex-col gap-4">
          <TimeCard />
          {/* <SpotifyCard /> */}
          <CopyrightCard />
        </div>
      </div>
    </div>
  );
}
