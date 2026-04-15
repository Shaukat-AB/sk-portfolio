import { ExternalLinkIcon, GitHubIcon, LongArrowRightIcon } from '@/lib/icons';
import { ProjectMetaData } from '@/lib/projects';

import { Button } from '../ui/button';
import { CardContent, CardDescription, CardTitle } from '../ui/card';

import { ImageCarousel } from './ImageCarousel';
import Link from 'next/link';

export const ProjectCard = ({
  title,
  description,
  param,
  githubLink,
  demoLink = undefined,
  images = undefined,
  orderIndex = undefined,
}: ProjectMetaData) => {
  return (
    <CardContent className="space-y-6 pt-3 pb-6 max-w-3xl">
      <ImageCarousel
        images={images}
        param={param}
        preload={!!orderIndex && parseInt(orderIndex) === 0}
      />

      <div className="flex flex-col gap-4 md:flex-row">
        <CardTitle className="flex-1">{title}</CardTitle>

        <div className="flex-1 space-y-4">
          <ProjectButtonGroup githubLink={githubLink} demoLink={demoLink} />

          <CardDescription>{description}</CardDescription>

          <Button asChild variant="link" size="unchanged">
            <Link href={`/projects/${param}`}>
              Read case study
              <LongArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </CardContent>
  );
};

export const ProjectButtonGroup = ({
  githubLink,
  demoLink,
}: Pick<ProjectMetaData, 'githubLink' | 'demoLink'>) => {
  return (
    <div className="flex gap-4 justify-start">
      <Button asChild className="text-sm" variant="outline" size="sm">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
        >
          <GitHubIcon className="size-4 text-text-active" />
          View Github
        </a>
      </Button>

      {demoLink?.startsWith('http') && (
        <Button asChild className="text-sm" variant="outline" size="sm">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            <ExternalLinkIcon className="size-4" />
            View Demo
          </a>
        </Button>
      )}
    </div>
  );
};
