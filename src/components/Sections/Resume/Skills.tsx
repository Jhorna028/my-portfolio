import {FC, memo} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef'; // Use an alias for the type

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex h-full flex-col rounded-xl bg-brand-card p-6 shadow-xl">
      <h3 className="mb-6 text-xl font-bold text-white">{name}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            className="flex items-center rounded-full border border-brand-cyan bg-transparent px-4 py-1.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-brand-cyan hover:text-brand-dark"
            key={`${skill.name}-${index}`}>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';
