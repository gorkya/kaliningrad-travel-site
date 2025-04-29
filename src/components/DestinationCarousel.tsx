
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageType {
  src: string;
  alt: string;
}

interface DestinationCarouselProps {
  images: ImageType[];
  autoPlayInterval?: number;
}

export function DestinationCarousel({ 
  images, 
  autoPlayInterval = 5000 
}: DestinationCarouselProps) {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  // Автопрокрутка слайдера
  useEffect(() => {
    if (!api || images.length <= 1) return;
    
    const intervalId = setInterval(() => {
      scrollNext();
    }, autoPlayInterval);
    
    return () => clearInterval(intervalId);
  }, [api, scrollNext, autoPlayInterval, images.length]);

  // Обновление текущего слайда
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
              <div className="p-1">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-80 w-full object-cover transition-all hover:scale-105 duration-300"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                <div className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
                  {image.alt}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 lg:-left-12" />
        <CarouselNext className="right-2 lg:-right-12" />
      </Carousel>

      <div className="flex justify-center gap-1 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index ? "bg-primary w-4" : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DestinationCarousel;
