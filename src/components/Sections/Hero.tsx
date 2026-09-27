import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {name, description} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center pt-24 px-8 lg:px-24">
        {/* Background image is removed to match the solid dark background of the demo */}
        <div className="z-10 flex w-full flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          <div className="flex flex-1 flex-col items-start text-left">
            {/* Removed Hello, It's Me */}
            <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{name}</h1>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              And I&apos;m a <span className="text-brand-cyan">Computer Science Engineer</span>
            </h3>
            <div className="mt-6 text-neutral-300">{description}</div>

            <div className="mt-8 flex gap-x-4">
              <Socials />
            </div>

            <div className="mt-10">
              <a
                className="rounded-full bg-brand-cyan px-6 py-3 font-bold text-black shadow-lg transition-transform hover:scale-105 hover:bg-brand-cyan-dark"
                href={`/#${SectionId.About}`}>
                More About Me
              </a>
            </div>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative h-64 w-64 rounded-full border-4 border-brand-cyan sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px] overflow-hidden shadow-2xl">
              <Image
                alt={`${name}-image`}
                className="object-cover object-top"
                fill
                src={heroData.imageSrc} // or profileImageSrc if available
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
