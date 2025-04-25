
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface DestinationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkUrl?: string;
}

export const DestinationCard = ({
  title,
  description,
  imageSrc,
  linkUrl = "#",
}: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90" asChild>
          <a href={linkUrl}>Подробнее</a>
        </Button>
      </CardFooter>
    </Card>
  );
};
