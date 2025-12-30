import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { CardContent, CardDescription, CardTitle } from './components/server';

const components: MDXComponents = {
  h2: (props) => (
    <CardTitle className="not-nth-[1]:mt-10 md:nth-[1]:col-span-2">
      <h2 {...props} />
    </CardTitle>
  ),
  p: (props) => (
    <CardDescription className="col-span-2">
      <p {...props}></p>
    </CardDescription>
  ),
  ul: (props) => (
    <CardContent className="px-10 mt-10">
      <CardDescription>
        <ul {...props} className="list-disc space-y-1"></ul>
      </CardDescription>
    </CardContent>
  ),
  img: (props) => (
    <Image sizes="100vw" className="w-full h-auto" {...(props as ImageProps)} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
