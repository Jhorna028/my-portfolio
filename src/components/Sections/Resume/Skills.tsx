import {FC, memo} from 'react';
import {SkillGroup as SkillGroupType} from '../../../data/dataDef'; // Use an alias for the type

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <h3 className="mb-4 text-lg font-bold text-white uppercase tracking-widest border-l-2 border-orange-500 pl-3">
        {name}
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-orange-500 hover:bg-neutral-700"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';