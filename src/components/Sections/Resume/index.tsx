import {FC, memo} from 'react';
import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 py-16" sectionId={SectionId.Resume}>
      <div className="flex flex-col gap-y-12">
        
        {/* Education Section - Now with Card Styling */}
        {education.length > 0 && (
          <ResumeSection title="Education">
            <div className="flex flex-col gap-y-6">
              {education.map((item, index) => (
                <div key={`${item.title}-${index}`} className="group relative rounded-xl border border-neutral-700 bg-neutral-800 p-6 transition-all hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10">
                   <TimelineItem item={item} />
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Skills Section - Cleaner grid */}
        <ResumeSection title="Skills">
          <p className="mb-8 text-neutral-400">
            A comprehensive overview of my technical toolkit, programming languages, and core competencies.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;