import { ProjectCard, ProjectsWrapper } from '@/components/server';
import { getProjectsMetadata } from '@/lib/projects';

export default async function Page() {
  const projects = await getProjectsMetadata();

  return (
    <div>
      <div className="page-title">
        <h1>Featured Projects</h1>
      </div>

      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ProjectsWrapper>
    </div>
  );
}
