import React from 'react';
import { readdirSync } from 'fs';
import path from 'path';
import { shuffle } from '../utils';

export type ProjectMetaData = {
  title: string;
  description: string;
  param: string;
  githubLink: string;
  demoLink?: string;
  orderIndex?: string;
  images?: string[];
};

const PROJECTS_PATH = path.join(process.cwd(), 'src/content/projects');
const ABSOLUTE_PROJECTS_PATH = '@/content/projects/';

const RELATIVE_PROJECTS_IMAGES_PATH = '/images/projects/';
const PROJECTS_IMAGES_PATH = path.join(
  process.cwd(),
  'public/images/projects/'
);

export const getProjectByName = async (
  name: string
): Promise<{ Project: React.FC; metadata: ProjectMetaData }> => {
  const data = await import(`${ABSOLUTE_PROJECTS_PATH}${name}.mdx`);

  return {
    Project: data.default,
    metadata: {
      ...data.frontmatter,
      param: name,
      images: getProjectImagesPath(name),
    },
  };
};

export const getProjectsMetadata = async () => {
  const data = [];

  for (let pname of getProjectNames()) {
    data.push({
      ...(await getProjectByName(pname)).metadata,
      param: pname,
      images: getProjectImagesPath(pname),
    });
  }

  return data.sort(
    (a, b) => parseInt(a.orderIndex || '0') - parseInt(b.orderIndex || '0')
  );
};

export const getProjectNames = () =>
  readdirSync(PROJECTS_PATH).map((pname) => pname.split('.')[0]);

export const getProjectImagesPath = (name: string) => {
  const dir = readdirSync(PROJECTS_IMAGES_PATH).filter(
    (dir) => dir === name
  )[0];

  return dir
    ? readdirSync(path.join(PROJECTS_IMAGES_PATH, dir))
        // Include desktop images only
        .filter((img_dir) => img_dir.includes('desktop'))

        .map((img_dir) => `${RELATIVE_PROJECTS_IMAGES_PATH}${dir}/${img_dir}`)
    : [];
};

export const getAllProjectsImagePaths = () => {
  const dirs = readdirSync(PROJECTS_IMAGES_PATH);
  const mobile: string[] = [];
  const desktop: string[] = [];

  dirs.forEach((dir) => {
    readdirSync(path.join(PROJECTS_IMAGES_PATH, dir)).forEach((img_dir) => {
      img_dir.includes('mobile')
        ? mobile.push(`${RELATIVE_PROJECTS_IMAGES_PATH}${dir}/${img_dir}`)
        : desktop.push(`${RELATIVE_PROJECTS_IMAGES_PATH}${dir}/${img_dir}`);
    });
  });

  return {
    minLength: Math.min(mobile.length, desktop.length),
    mobileImages: shuffle(mobile),
    desktopImages: shuffle(desktop),
  };
};
