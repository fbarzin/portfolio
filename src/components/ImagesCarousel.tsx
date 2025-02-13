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
  width: number;
  height: number;
}

export function ImagesCarousel({
  className,
  images,
  width = 400,
  height = 400,
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
            key={`${image}-${index}`}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-2">
              <Card>
                <CardContent className="flex aspect-auto transform items-center justify-center p-0 transition-transform hover:scale-105 hover:rounded-lg">
                  <Image
                    src={image}
                    alt={`Cat ${index}`}
                    className="h-full w-full rounded-xl object-cover"
                    width={width}
                    height={height}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4" />
      <CarouselNext className="mr-4" />
    </Carousel>
  );
}

export default ImagesCarousel;
