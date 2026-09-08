import IntroCard from "./components/bento/IntroCard";
import ContactCard from "./components/bento/ContactCard";
import StackCard from "./components/bento/StackCard";
import TimeCard from "./components/bento/TimeCard";
import AccentSwitcherCard from "./components/bento/AccentSwitcherCard";
import SpotifyCard from "./components/bento/SpotifyCard";
import CopyrightCard from "./components/bento/CopyrightCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full py-8">
      <IntroCard className="sm:col-span-2" />
      <StackCard className="lg:row-span-2" />
      <ContactCard />
      <TimeCard />
      {/* <SpotifyCard /> */}
      <AccentSwitcherCard />
      <CopyrightCard />
    </div>
  );
}
