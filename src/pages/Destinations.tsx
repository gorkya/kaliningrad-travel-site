
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";

export default function Destinations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Популярные направления</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard 
              title="Куршская коса"
              description="Уникальный природный заповедник с песчаными дюнами и сосновыми лесами."
              imageSrc="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              linkUrl="/destinations/curonian-spit"
            />
            
            <DestinationCard 
              title="Калининград"
              description="Исторический центр области с богатым немецким наследием и современной архитектурой."
              imageSrc="https://images.unsplash.com/photo-1568146589570-38a2f5361c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              linkUrl="/destinations/kaliningrad"
            />
            
            <DestinationCard 
              title="Янтарный"
              description="Посёлок, где добывается 90% мирового янтаря, с красивыми пляжами и смотровой площадкой."
              imageSrc="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              linkUrl="/destinations/yantarny"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
