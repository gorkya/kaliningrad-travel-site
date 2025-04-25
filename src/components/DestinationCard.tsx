
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const DestinationCard = ({
  title,
  description,
  imageUrl,
}: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg transition-transform duration-300 hover:scale-105 min-w-[280px] max-w-[320px]">
      <div className="h-24 overflow-hidden border-2 border-[#a3b5c2]">
        <img
          src={imageUrl}
          alt={title === "Янтарный" ? "Посёлок Янтарный" : title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="ghost" className="p-0 hover:bg-transparent text-[#9b87f5] hover:text-[#7E69AB] flex items-center gap-2">
          Подробнее <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
