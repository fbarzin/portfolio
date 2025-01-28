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

export function CatImagesCarousel({
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
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={image}
                    alt={`Cat ${index}`}
                    className="transform rounded-lg transition-transform hover:scale-105"
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

export default CatImagesCarousel;
