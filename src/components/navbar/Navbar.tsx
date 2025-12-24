'use client';

import {
  AboutIcon,
  GalleryIcon,
  HomeIcon,
  MenuIcon,
  ProjectIcon,
} from '@/lib/icons';
import { ThemeChangeButton } from './ThemeChangeButton';
import { NavLink } from './NavLink';
import { Button } from '../ui/button';
import { useState } from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-[auto_auto] md:inline-block absolute py-4 space-x-4 bottom-0 md:relative">
      <div className={open ? 'col-start-2' : 'hidden md:inline-block'}>
        <nav className="min-w-40 max-w-3xs md:max-w-3xl p-2 bg-bg-focus border border-bg-active md:rounded-full rounded-3xl shadow-xl">
          <ul className="w-full py-3 md:py-0 inline-flex flex-col items-center md:flex-row gap-5">
            <NavLink href="/" name="Home">
              <HomeIcon />
            </NavLink>

            <NavLink href="/projects" name="Projects">
              <ProjectIcon />
            </NavLink>
            <NavLink href="/about" name="About">
              <AboutIcon />
            </NavLink>
            <NavLink href="/gallery" name="Gallery">
              <GalleryIcon />
            </NavLink>

            <ThemeChangeButton />
          </ul>
        </nav>
      </div>
      <Button
        onClick={() => setOpen(!open)}
        className={`bg-bg-focus cursor-pointer shadow-2xl md:hidden ${
          open ? 'bg-bg-active/80' : ''
        }`}
        variant="outline"
        size="equal"
      >
        <MenuIcon className="size-5" />
      </Button>
    </div>
  );
};
