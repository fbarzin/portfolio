import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CatImagesCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
}

export function ImagesCarousel({
  className,
  images,
  ...props
}: CatImagesCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className={cn('w-full', className)}
      {...props}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-2">
              <Card>
                <CardContent className="flex aspect-square transform items-center justify-center p-0 transition-transform hover:scale-105 hover:rounded-lg">
                  <Image
                    src={image}
                    alt={`Cat ${index}`}
                    className="h-full w-full rounded-xl object-cover"
                    width={400}
                    height={400}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ImagesCarousel;
