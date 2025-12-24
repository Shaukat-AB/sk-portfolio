import type { NextConfig } from 'next';
import newMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

const withMDX = newMDX({
  extension: /\.(mdx)$/,
});

export default withMDX(nextConfig);
