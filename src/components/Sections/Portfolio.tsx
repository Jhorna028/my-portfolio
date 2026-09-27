import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="py-16" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-white">
          My <span className="text-brand-cyan">Projects</span>
        </h2>
        <p className="mt-2 text-neutral-300 mb-12">Some of my recent work</p>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const {title, description, url, tags} = item;

            return (
              <div
                className="flex h-full flex-col justify-between rounded-xl bg-brand-card p-6 shadow-xl transition-transform hover:-translate-y-2 hover:shadow-2xl"
                key={`${title}-${index}`}>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-300">{description}</p>
                </div>

                <div className="mt-6 flex flex-col gap-y-6">
                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <span
                          className="rounded-full border border-brand-cyan px-3 py-1 text-xs font-medium text-white"
                          key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {url && (
                    <a
                      className="group/link flex w-max items-center gap-2 text-sm font-semibold text-brand-cyan transition-colors hover:text-white"
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank">
                      View Project
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  )}
                </div>
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
