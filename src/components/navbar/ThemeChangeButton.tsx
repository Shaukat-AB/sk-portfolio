'use client';

import { DayIcon, NightIcon } from '@/lib/icons';
import { useTheme } from 'next-themes';
import { Activity } from 'react';

export const ThemeChangeButton = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';
  const name = isDark ? 'Day' : 'Night';

  return (
    <li className="min-w-11/12 md:min-w-20 flex items-center justify-start md:justify-self-center-safe">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="w-full cursor-pointer text-bg-content gap-2 min-w-8 h-8 p-2 flex items-center justify-start md:justify-self-center-safe rounded-full transition-all hover:bg-bg-active active:inset-shadow-sm active:shadow"
      >
        <Activity mode={isDark ? 'visible' : 'hidden'}>
          <DayIcon className="size-5" />
        </Activity>

        <Activity mode={isDark ? 'hidden' : 'visible'}>
          <NightIcon className="size-5" />
        </Activity>

        <span className="w-9 px-1 text-left inline font-semibold text-sm">
          {name}
        </span>
      </button>
    </li>
  );
};
