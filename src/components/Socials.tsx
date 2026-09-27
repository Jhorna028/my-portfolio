import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-cyan text-brand-cyan transition-all duration-300 hover:bg-brand-cyan hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-cyan sm:h-12 sm:w-12"
          href={href}
          key={label}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
