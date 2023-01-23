import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";

const bioBullets = [
   {
      link: "https://www.travelwisconsin.com/",
      emoji: "🧀",
      text: "based in wisconsin",
   },
   {
      link: 'https://www.mathisonprojectsinc.com',
      emoji: "💻",
      text: "software engineer at mathison projects"
   },
   {
      link: "mailto:paytontaylor96@gmail.com?subject=Let's work on something together!",
      emoji: "✉️",
      text: "let's get in touch!"
   }
];

const socials = [
   {
      link: "https://github.com/paytonjewell",
      icon: "fab fa-github",
      label: 'Github'
   },
   {
      link: "https://linkedin.com/in/payton-pierce",
      icon: "fab fa-linkedin",
      label: 'LinkedIn'
   },
   {
      link: 'https://twitter.com/paytoncodes',
      icon: "fab fa-twitter",
      label: 'Twitter'
   },
   {
      link: '/Resume.pdf',
      icon: 'far fa-file',
      label: 'Resume'
   }
]

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} component={'img'} alt={'image of woman with brown curly hair and glasses smiling at the camera'} src={me} width={{xs: '36vh', md: '41vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span className={Style.firstName}>Payton</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm a front-end developer.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {bioBullets.map((bio, index) => (
                  <li key={index}>
                     <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
                  </li>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}