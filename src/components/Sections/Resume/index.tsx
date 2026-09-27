import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <>
      <Section className="py-16" sectionId={SectionId.Skills}>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-white">
            My <span className="text-brand-cyan">Skills</span>
          </h2>
          <p className="mt-2 text-neutral-300 mb-12">Tools and technologies I use to build projects.</p>
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16" sectionId={SectionId.Resume}>
        <div className="flex flex-col items-center max-w-6xl mx-auto gap-y-12">
          {experience.length > 0 && (
            <div className="w-full flex flex-col items-center">
              <h2 className="text-3xl font-extrabold text-white mb-8">
                My <span className="text-brand-cyan">Experience</span>
              </h2>
              <div className="grid w-full grid-cols-1 gap-6">
                {experience.map((item, index) => (
                  <div className="rounded-xl bg-brand-card p-6 shadow-xl" key={`${item.title}-${index}`}>
                    <TimelineItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {education.length > 0 && (
            <div className="w-full flex flex-col items-center mt-8">
              <h2 className="text-3xl font-extrabold text-white mb-8">
                My <span className="text-brand-cyan">Education</span>
              </h2>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                {education.map((item, index) => (
                  <div className="rounded-xl bg-brand-card p-6 shadow-xl" key={`${item.title}-${index}`}>
                    <TimelineItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
});

Resume.displayName = 'Resume';
export default Resume;
