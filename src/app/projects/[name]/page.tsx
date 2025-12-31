import {
  ProjectButtonGroup,
  ProjectCard,
  ProjectsWrapper,
} from '@/components/server';
import { ImageCarousel, Separator } from '@/components/client';

import {
  getProjectByName,
  getProjectNames,
  getProjectsMetadata,
} from '@/lib/projects';
import { Metadata } from 'next';

export async function generateStaticParams(): Promise<{ name: string }[]> {
  return getProjectNames().map((pname) => ({
    name: pname,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const { metadata } = await getProjectByName(name);

  if (!metadata?.title) throw new Error(`Metadata undefined! (${name})`);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const { Project, metadata } = await getProjectByName(name);

  const relatedProjects = (await getProjectsMetadata())
    .filter((p) => p.orderIndex != metadata.orderIndex)
    .slice(0, 2);

  return (
    <>
      <div className="flex flex-col items-center gap-4 pb-4">
        <div className="page-title">
          <h1>{metadata.title}</h1>
        </div>

        <ProjectButtonGroup
          githubLink={metadata.githubLink}
          demoLink={metadata.demoLink}
        />
      </div>

      <div className="px-10">
        <ImageCarousel
          images={metadata.images}
          param={metadata.param}
          preload
        />
      </div>

      <div className="px-10 space-y-6 md:grid md:grid-cols-2 md:items-start">
        <Project />
      </div>

      <div className="py-10">
        <Separator orientation="horizontal" className="m-auto max-w-1/5" />
      </div>

      {/* Related Projects */}
      <aside>
        <div className="text-center text-xl md:text-3xl font-semibold">
          <h3>Related Projects</h3>
        </div>

        <ProjectsWrapper>
          {relatedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ProjectsWrapper>
      </aside>
    </>
  );
}

export const dynamicParams = false;
