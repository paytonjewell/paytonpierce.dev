import Image from "next/image";
import Link from "next/link";
import BentoCard from "./BentoCard";

const IntroCard = ({ className = "" }: { className?: string }) => {
  return (
    <BentoCard className={className}>
      <div className="flow-root">
        <div className="w-60 sm:w-44 mx-auto mb-4 sm:mb-2 sm:float-right sm:ml-6 sm:[shape-outside:circle(50%)] sm:[shape-margin:1rem]">
          <Image
            src="/self.png"
            alt="Profile picture of Payton"
            width={500}
            height={500}
            priority
            className="bg-linear-to-br from-brand-start to-brand-end rounded-full p-2 w-full h-auto"
          />
        </div>
        <h1 className="text-4xl md:text-3xl text-center sm:text-left">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-tl from-brand-start to-brand-end text-transparent bg-clip-text font-bold">
            Payton
          </span>
          <span className="animate-wave inline-block">🤚🏻</span>
        </h1>
        <div className="text-sm text-muted space-y-3 mt-2">
          <p>
            I&apos;m a frontend engineer doing what I love full-time at{" "}
            <Link
              className="text-brand-start hover:underline font-bold"
              href="https://www.lingoapp.com/"
              target="_blank"
            >
              Lingo
            </Link>
            . I love design-heavy work — the kind of project where a delightful
            user experience is top priority. I have six years in the industry
            now, across agencies, startups, and open source.
          </p>
          <p>
            I live in a rural pocket of Wisconsin with 5 chickens, 2 cats, a
            dog, and a toddler keeping me on my toes.
          </p>
          <p>
            Outside of programming, I enjoy reading, watching movies, trying
            local restaurants, or spending time with family — and every fall
            weekend, you can catch me cheering on the Packers and the Iowa
            Hawkeyes.
          </p>
        </div>
      </div>
    </BentoCard>
  );
};

export default IntroCard;
