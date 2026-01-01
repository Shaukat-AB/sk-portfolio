'use client';

import Image, { ImageProps } from 'next/image';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { ProjectMetaData } from '@/lib/projects';
import { useEffect, useState } from 'react';

export const ImageCarousel = ({
  param,
  images = undefined,
  preload = false,
}: Pick<ProjectMetaData, 'images' | 'param'> & Pick<ImageProps, 'preload'>) => {
  const [api, setApi] = useState<CarouselApi>(undefined);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const cb = () => setCurrent(api.selectedScrollSnap());
    api.on('select', cb);

    return () => {
      api.off('select', cb);
    };
  }, [api]);

  return (
    <Carousel opts={{ align: 'start' }} setApi={setApi}>
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

      <div className="w-full flex p-3 gap-2">
        {Array.isArray(images) &&
          images.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-0.5 transition-all ${
                current === i ? 'bg-text' : 'bg-text/25'
              } rounded-full`}
            ></div>
          ))}
      </div>

      <span className="sr-only block text-center text-sm">
        Slide {current + 1} of {images?.length || 0}
      </span>
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
