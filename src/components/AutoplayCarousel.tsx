
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "embla-carousel-react";

interface AutoplayCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoplayInterval?: number;
  className?: string;
}

export function AutoplayCarousel({
  images,
  autoplayInterval = 5000,
  className,
}: AutoplayCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Автопрокрутка
    const autoplayInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      api.off("select", onSelect);
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <div className={className}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex flex-col">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>
              <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
                {image.alt}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 sm:-left-6" />
        <CarouselNext className="-right-4 sm:-right-6" />
      </Carousel>
      
      <div className="mt-4 flex justify-center gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              current === index 
                ? "w-6 bg-primary" 
                : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AutoplayCarousel;
