
import { AutoplayCarousel } from "@/components/AutoplayCarousel";
import { ImageGallery } from "@/components/ImageGallery";

interface DestinationGalleryProps {
  id: string;
  gallery: { src: string; alt: string; }[];
}

export function DestinationGallery({ id, gallery }: DestinationGalleryProps) {
  if (!gallery || gallery.length === 0) return null;
  
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Галерея изображений</h2>
      
      {id === 'kaliningrad' ? (
        <AutoplayCarousel 
          images={gallery} 
          autoplayInterval={5000}
          className="max-w-5xl mx-auto"
        />
      ) : (
        <ImageGallery images={gallery} />
      )}
    </div>
  );
}
