import { config } from '@/lib/app-config';
import { getProjectNames } from '@/lib/projects';
import { MetadataRoute } from 'next';

const newUrl = (href = '') => `${config.BASE_URL}${href}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjectNames().map((pname) => ({
    url: newUrl(`projects/${pname}`),
    lastModified: new Date(),
  }));

  return [
    {
      url: newUrl(),
      lastModified: new Date(),
    },
    {
      url: newUrl('projects'),
      lastModified: new Date(),
    },
    ...projects,
    {
      url: newUrl('about'),
      lastModified: new Date(),
    },
    {
      url: newUrl('gallery'),
      lastModified: new Date(),
    },
  ];
}
