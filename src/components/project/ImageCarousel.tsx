'use client';

import Image, { ImageProps } from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { ProjectMetaData } from '@/lib/projects';

export const ImageCarousel = ({
  param,
  images = undefined,
  preload = false,
}: Pick<ProjectMetaData, 'images' | 'param'> & Pick<ImageProps, 'preload'>) => {
  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselContent>
        {Array.isArray(images) &&
          images.map((image, i) => (
            <CarouselItem key={image}>
              <ProjectCardImage
                src={image}
                alt={image.split(param)[1].substring(1)}
                preload={preload && i === 0}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
};

const ProjectCardImage = ({
  src,
  alt,
  preload = false,
}: Pick<ImageProps, 'src' | 'alt' | 'preload'>) => {
  return (
    <div className="relative aspect-video">
      <Image
        fill
        className="object-contain rounded-xl"
        sizes="(max-width: 786px) 100vw"
        src={src}
        alt={alt}
        preload={preload}
      />
    </div>
  );
};
