'use client';

import {
  AboutIcon,
  GalleryIcon,
  HomeIcon,
  MenuIcon,
  ProjectIcon,
} from '@/lib/icons';
import { NavLink } from './NavLink';
import { Button } from '../ui/button';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { GlassBg } from '../GlassBg';

const ThemeChangeButton = dynamic(
  async () => (await import('./ThemeChangeButton')).ThemeChangeButton,
  { ssr: false }
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="z-99 mx-4 grid grid-cols-[auto_100%] md:inline-block absolute py-4 space-x-4 bottom-0 md:relative">
        <div className={open ? 'col-start-2 w-full' : 'hidden md:inline-block'}>
          <nav className="min-w-40 p-2 bg-bg-focus border border-bg-active md:rounded-full rounded-3xl shadow-xl">
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
          aria-label="Navigation Menu"
        >
          <MenuIcon className="size-5" />
        </Button>
      </div>
      <GlassBg
        className={!open ? 'max-h-0 opacity-0 pointer-events-none' : ''}
      />
    </>
  );
};
