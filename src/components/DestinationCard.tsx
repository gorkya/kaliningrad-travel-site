
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export function DestinationCard({ id, title, description, imageSrc }: DestinationCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-card h-full flex flex-col" itemScope itemType="http://schema.org/Place">
      <div className="aspect-video w-full relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
          loading="lazy"
          itemProp="image"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-semibold mb-2" itemProp="name">{title}</h2>
        <p className="text-muted-foreground mb-4 flex-1" itemProp="description">{description}</p>
        <Link to={`/destinations/${id}`} className="mt-auto">
          <Button className="w-full" aria-label={`Узнать больше о ${title}`}>
            Подробнее
          </Button>
        </Link>
      </div>
    </div>
  );
}
