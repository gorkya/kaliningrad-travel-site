
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DestinationData } from "@/types/destination";

interface DestinationHeaderProps {
  destination: DestinationData;
}

export function DestinationHeader({ destination }: DestinationHeaderProps) {
  const navigate = useNavigate();
  
  return (
    <div className="mb-6">
      <Button 
        variant="outline" 
        className="mb-6"
        onClick={() => navigate('/destinations')}
        aria-label="Вернуться к списку направлений"
      >
        ← Назад к направлениям
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4" itemProp="name">{destination.title}</h1>
          
          <div className="mb-6" itemProp="description">
            {destination.fullDescription.map((para, idx) => (
              <p key={idx} className="text-lg mb-3">{para}</p>
            ))}
          </div>
          
          <DestinationFacts facts={destination.facts} />
          
          <Button className="w-full sm:w-auto">Спланировать поездку</Button>
        </div>
        
        <div className="rounded-lg overflow-hidden">
          <img 
            src={destination.imageSrc} 
            alt={`${destination.title} - основное изображение`} 
            className="w-full h-auto object-cover"
            loading="eager"
            itemProp="image"
          />
        </div>
      </div>
    </div>
  );
}

function DestinationFacts({ facts }: { facts: string[] }) {
  return (
    <div className="bg-primary/10 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Интересные факты</h2>
      <ul className="list-disc pl-5 space-y-2">
        {facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
