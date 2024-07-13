import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import Prompt from '../components/about/Prompt';
import { skills } from '../../lib/constants';

const SkillList = ({ title, items }: { title: string, items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutPayton/" />
        <Prompt directory="/aboutPayton" branch={true} content="cat README.md" />
        <p>Hello there! I'm Payton, a frontend dev <b>from Wisconsin</b>, specializing in <b>React, NextJS, and Vue</b>. I've been working professionally as a developer for about 4 years now, and I'm currently focused on learning NodeJS/Express, PostgreSQL, and Prisma. Once I feel I've become fairly proficient in my preferred stack, I plan to expand my horizons to Java, Svelte, and eventually I'll probably end up giving into the Python craze.</p>
        <p>Outside of my coding life, I live on a little homestead with 15 chickens and a vegetable garden. My husband, two cats, and I decided to leave our small city and pursue a quieter life, and I couldn't be happier that we did! We bought a farmhouse was built in 1942 and we are working hard to learn new skills to produce our own food.</p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt directory='/skillsAndTools/Proficient' branch={true} content="ls" />
        <div className='flex justify-start flex-wrap md:justify-between'>
          <ul>
            <SkillList title="TheObvious" items={skills.theObvious} />
            <SkillList title="ToolsOfTheTrade" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className="md:text-right">
            <SkillList title="LibrariesAndFrameworks" items={skills.librariesFrameworks} />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory='/HobbiesAndInterests' branch={true} content="ls" />
        <ul>
          <li>📚 reading</li>
          <li>🎬 movies</li>
          <li>🧶 crochet</li>
          <li>🐔 animals</li>
          <li>👩🏻‍🌾 gardening</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
}

export default About;
