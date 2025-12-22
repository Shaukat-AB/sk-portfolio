'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const NavLink = (
  props: LinkProps<null> & { name?: string; children?: ReactNode }
) => {
  const pathname = usePathname();

  return (
    <li className="min-w-11/12 md:min-w-20">
      <Link
        className={`${
          pathname === props.href ? 'inset-shadow-sm shadow bg-bg-active' : ''
        } text-bg-content gap-2 min-w-8 h-8 p-2 flex items-center justify-start md:justify-self-center-safe rounded-full transition-all hover:bg-bg-active active:bg-bg-active active:inset-shadow-sm active:shadow`}
        {...props}
      >
        <span className="size-5">{props.children}</span>
        <span className="inline font-semibold px-1">{props.name}</span>
      </Link>
    </li>
  );
};
