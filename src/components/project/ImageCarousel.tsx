'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export const ImageCarousel = () => {
  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselPrevious />
      <CarouselContent>
        {/* Temporary */}
        {Array.from({ length: 4 }).map((_, i) => (
          <CarouselItem key={i}>
            <div className="bg-bg-active w-full flex items-center justify-center rounded-md aspect-video">
              <span className="text-7xl text-primary-content">{i}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
