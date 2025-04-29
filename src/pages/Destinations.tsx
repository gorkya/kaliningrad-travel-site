
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";

const destinations = [
  {
    id: "curonian-spit",
    title: "Куршская коса",
    description: "Уникальный природный заповедник с песчаными дюнами и сосновыми лесами.",
    imageSrc: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "kaliningrad",
    title: "Калининград",
    description: "Исторический центр области с богатым немецким наследием и современной архитектурой.",
    imageSrc: "https://images.unsplash.com/photo-1568146589570-38a2f5361c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "yantarny",
    title: "Янтарный",
    description: "Посёлок, где добывается 90% мирового янтаря, с красивыми пляжами и смотровой площадкой.",
    imageSrc: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "svetlogorsk",
    title: "Светлогорск",
    description: "Курортный город на побережье Балтийского моря с уникальной архитектурой.",
    imageSrc: "https://images.unsplash.com/photo-1596377974235-364de3e061dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "zelenogradsk",
    title: "Зеленоградск",
    description: "Приморский курорт с длинными песчаными пляжами и историческим центром.",
    imageSrc: "https://images.unsplash.com/photo-1597996355139-153ab5b3bcad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "pioneer",
    title: "Пионерский",
    description: "Небольшой приморский город с яхтенной мариной и рыбным портом.",
    imageSrc: "https://images.unsplash.com/photo-1599581425921-726d7052bd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function Destinations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Направления</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Исследуйте удивительные места Калининградской области — от исторического центра до природных заповедников и уютных курортных городов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                title={destination.title}
                description={destination.description}
                imageSrc={destination.imageSrc}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
