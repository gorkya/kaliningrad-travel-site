
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DestinationCard } from "@/components/DestinationCard";
import { Footer } from "@/components/Footer";

const destinations = [
  {
    id: 1,
    title: "Куршская коса",
    description: "Уникальный природный заповедник с песчаными дюнами и сосновыми лесами.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Кафедральный собор",
    description: "Историческая достопримечательность Калининграда с могилой Иммануила Канта.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Янтарный",
    description: "Поселок с крупнейшим в мире месторождением янтаря и чистыми пляжами.",
    imageUrl: "/placeholder.svg",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F7]">
      <Navbar />
      <HeroSection />
      
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные направления</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              title={destination.title} 
              description={destination.description} 
              imageUrl={destination.imageUrl} 
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate("/destinations")} 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-2"
          >
            Все направления
          </Button>
        </div>
      </section>

      <section className="bg-[#E5DEFF] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему Калининградская область?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Уникальная история</h3>
                <p className="text-gray-600">Сочетание немецкого и русского культурного наследия создает неповторимую атмосферу.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Янтарный край</h3>
                <p className="text-gray-600">Более 90% мировых запасов янтаря находится именно здесь.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Природное разнообразие</h3>
                <p className="text-gray-600">От песчаных пляжей Балтики до лесов и озер внутри региона.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
