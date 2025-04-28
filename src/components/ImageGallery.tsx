
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  
  const openImageModal = (image: {src: string, alt: string}) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openImageModal(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover" 
              loading="lazy"
              width="300"
              height="300"
            />
          </div>
        ))}
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-background p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                <p>{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
