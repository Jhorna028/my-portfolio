import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-slate-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-10">
        
        {/* Fixed Header Section */}
        <div className="flex flex-col items-center mb-6 w-max mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white transition-all duration-500 hover:scale-105 hover:text-orange-500 cursor-default whitespace-nowrap">
            Check out some of my work
          </h2>
          {/* The orange line now matches the exact width of the text above it */}
          <div className="mt-4 h-1 w-full bg-orange-500 rounded-full transition-all duration-500 hover:bg-white" />
        </div>
        
        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => {
            const {title, description, url} = item;
            
            return (
              <div
                key={`${title}-${index}`}
                className={classNames(
                  'group relative flex flex-col justify-between rounded-xl p-7 transition-all duration-300 ease-in-out',
                  'bg-slate-800/80 backdrop-blur-sm border border-slate-700',
                  'hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_8px_30px_rgb(249,115,22,0.15)]'
                )}>
                
                {/* Decorative top bar on hover */}
                <div className="absolute left-0 top-0 h-1 w-full rounded-t-xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="flex flex-col gap-y-3">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{description}</p>
                </div>

                {url && (
                  <div className="mt-6 flex items-center justify-start">
                    <a
                      className="group/link flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300 w-max"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer">
                      View Project
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;