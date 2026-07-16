import {AcademicCapIcon} from '@heroicons/react/24/outline'; // Or use dynamic icons
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItemComponent: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, gpa} = item;

  return (
    <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-5 mb-4 transition-all">
      <div className="flex items-start gap-4">
        {/* Icon Box */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-700">
          <AcademicCapIcon className="h-6 w-6 text-white" />
        </div>

        {/* Main Info */}
        <div className="flex-grow">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-lg font-bold text-white">{title}</h2>
            
            {/* Right side: Dates and GPA */}
            <div className="text-right flex-shrink-0">
              <span className="block text-xs font-medium text-neutral-300 bg-neutral-700 px-2 py-1 rounded-md">{date}</span>
              {gpa && <span className="block mt-1 text-sm font-bold text-white">{gpa}</span>}
            </div>
          </div>

          <p className="text-md font-semibold text-blue-400 mt-1">{location}</p>
          <div className="mt-2 text-sm text-neutral-300">{content}</div>
        </div>
      </div>
    </div>
  );
});

TimelineItemComponent.displayName = 'TimelineItem';
export default TimelineItemComponent;