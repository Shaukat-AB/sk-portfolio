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
}: Pick<ProjectMetaData, 'images' | 'param'>) => {
  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselPrevious />
      <CarouselContent>
        {Array.isArray(images) &&
          images.map((image) => (
            <CarouselItem key={image}>
              <ProjectCardImage
                src={image}
                alt={image.split(param)[1].substring(1)}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

const ProjectCardImage = ({ src, alt }: Pick<ImageProps, 'src' | 'alt'>) => {
  return (
    <div className="relative aspect-video">
      <Image
        fill
        className="object-contain rounded-xl"
        sizes="(max-width: 786px) 100vw"
        src={src}
        alt={alt}
      />
    </div>
  );
};
