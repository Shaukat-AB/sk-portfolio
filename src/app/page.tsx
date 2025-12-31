import {
  Button,
  ContactCard,
  MailToLink,
  ProjectCard,
  ProjectsWrapper,
} from '@/components/server';
import { Separator } from '@/components/client';

import { getProjectsMetadata } from '@/lib/projects';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjectsMetadata();

  return (
    <>
      <Hero />
      <ProjectsWrapper>
        <ProjectCard {...projects[0]} />
      </ProjectsWrapper>

      <Separator orientation="horizontal" className="max-w-10/12" />
      <div className="py-10">
        <ContactCard />
      </div>
      <Separator orientation="horizontal" className="ml-auto max-w-10/12" />

      <ProjectsWrapper>
        {projects.map((project, i) =>
          i > 0 ? <ProjectCard key={project.title} {...project} /> : null
        )}
      </ProjectsWrapper>

      <ContactCard />
    </>
  );
}

const Hero = () => {
  return (
    <section className="max-w-md md:max-w-xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
      <MailToLink>
        <Button asChild className="w-full mb-4" variant="outline" size="sm">
          <span>Shaukat | Email</span>
        </Button>
      </MailToLink>

      <h1 className="hero-title">Where visions are tailored into reality</h1>

      <div className="px-2 space-y-10 mb-8">
        <p className="hero-text">
          I am Shaukat, a full stack engineer specializing in creating full
          stack solutions that not only function but also inspire
        </p>

        <Button asChild size="sm">
          <Link href="/projects">Shaukat | Featured Projects</Link>
        </Button>
      </div>
    </section>
  );
};
