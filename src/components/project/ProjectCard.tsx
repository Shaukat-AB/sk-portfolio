import Link from 'next/link';
import { Button } from '../ui/button';
import { CardContent, CardDescription, CardTitle } from '../ui/card';
import { ExternalLinkIcon, GitHubIcon, LongArrowRightIcon } from '@/lib/icons';
import { ImageCarousel } from './ImageCarousel';
import { Activity } from 'react';

type ProjectProps = {
  title: string;
  description: string;
  pageLink: string;
  githubLink: string;
  demoLink?: string | undefined;
};

export const ProjectCard = ({
  title,
  description,
  pageLink,
  githubLink,
  demoLink,
}: ProjectProps) => {
  return (
    <CardContent className="space-y-6 pt-3 pb-6 max-w-3xl">
      <ImageCarousel />

      <div className="flex flex-col gap-4 md:flex-row">
        <CardTitle className="w-full max-w-sm">{title}</CardTitle>

        <div className="space-y-4">
          <div className="flex gap-4 justify-start">
            <Button asChild className="text-sm" variant="outline" size="sm">
              <a href={githubLink}>
                <GitHubIcon className="size-4 text-text-active" />
                View Github
              </a>
            </Button>

            <Activity
              mode={demoLink?.startsWith('http') ? 'visible' : 'hidden'}
            >
              <Button asChild className="text-sm" variant="outline" size="sm">
                <a href={demoLink}>
                  <ExternalLinkIcon className="size-4" />
                  View Demo
                </a>
              </Button>
            </Activity>
          </div>

          <CardDescription>{description}</CardDescription>

          <Button asChild variant="link" size="unchanged">
            <Link href={{ pathname: pageLink }}>
              Read case study
              <LongArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </CardContent>
  );
};
