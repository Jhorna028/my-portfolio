import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        {/* Use flex-col to stack the title and the bar naturally */}
        <div className="flex flex-col items-start h-max">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white">{title}</h2>
          {/* This bar will now sit perfectly below the text */}
          <div className="mt-2 h-1 w-full bg-orange-500 rounded-full" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
