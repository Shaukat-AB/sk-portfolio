import { readdirSync } from 'fs';
import path from 'path';

export type ProjectMetaData = {
  title: string;
  description: string;
  param: string;
  githubLink: string;
  demoLink?: string;
  orderIndex?: string;
};

const PROJECTS_PATH = path.join(process.cwd(), 'src/content/projects');
const ABSOLUTE_PROJECTS_PATH = '@/content/projects/';

export const getProjectByName = async (
  name: string
): Promise<ImportAttributes & { frontmatter: ProjectMetaData }> =>
  await import(`${ABSOLUTE_PROJECTS_PATH}${name}.mdx`);

export const getProjectsMetadata = async () => {
  const data = [];

  for (let pname of getProjectNames()) {
    data.push({ ...(await getProjectByName(pname)).frontmatter, param: pname });
  }

  return data.sort(
    (a, b) => parseInt(a.orderIndex || '0') - parseInt(b.orderIndex || '0')
  );
};

export const getProjectNames = () =>
  readdirSync(PROJECTS_PATH).map((pname) => pname.split('.')[0]);
