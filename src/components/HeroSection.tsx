
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Откройте для себя удивительную Калининградскую область
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Путешествуйте по самому западному региону России, где встречаются история, 
            культура и природная красота Балтийского побережья.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate("/tours")}
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg"
            >
              Исследовать туры
            </Button>
            <Button 
              onClick={() => navigate("/tips")}
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg"
            >
              Советы путешественникам
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-[#F6F6F7] to-transparent"></div>
    </section>
  );
};
