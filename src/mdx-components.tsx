import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

const components: MDXComponents = {
  img: (props) => (
    <Image sizes="100vw" className="w-full h-auto" {...(props as ImageProps)} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
