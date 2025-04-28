
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

interface DestinationData {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  imageSrc: string;
  facts: string[];
}

const destinationsData: Record<string, DestinationData> = {
  "curonian-spit": {
    id: "curonian-spit",
    title: "Куршская коса",
    description: "Уникальный природный заповедник с песчаными дюнами и сосновыми лесами.",
    fullDescription: [
      "Куршская коса – это узкая полоса суши между Балтийским морем и Куршским заливом, объект Всемирного наследия ЮНЕСКО.",
      "Здесь можно увидеть знаменитые танцующие деревья, высокие песчаные дюны и насладиться нетронутой природой."
    ],
    imageSrc: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    facts: [
      "Протяженность косы составляет 98 км",
      "Ширина в самом узком месте — всего 400 метров",
      "На территории косы находится орнитологическая станция 'Фрингилла'",
      "Дюна Эфа — одна из самых высоких песчаных дюн в Европе"
    ]
  },
  "kaliningrad": {
    id: "kaliningrad",
    title: "Калининград",
    description: "Исторический центр области с богатым немецким наследием и современной архитектурой.",
    fullDescription: [
      "Калининград (бывший Кёнигсберг) – административный центр самого западного региона России, расположенный между Польшей и Литвой.",
      "Город сочетает в себе немецкое архитектурное наследие и советскую застройку, создавая уникальный культурный ландшафт."
    ],
    imageSrc: "https://images.unsplash.com/photo-1568146589570-38a2f5361c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    facts: [
      "Основан в 1255 году",
      "До 1946 года город назывался Кёнигсберг",
      "Здесь жил и работал философ Иммануил Кант",
      "В городе находится единственный в России Музей янтаря"
    ]
  },
  "yantarny": {
    id: "yantarny",
    title: "Янтарный",
    description: "Посёлок, где добывается 90% мирового янтаря, с красивыми пляжами и смотровой площадкой.",
    fullDescription: [
      "Посёлок Янтарный (бывший Пальмникен) — центр добычи янтаря в Калининградской области. Здесь находится крупнейшее в мире месторождение этого ценного 'солнечного камня'.",
      "Помимо янтарного производства, поселок привлекает широкими пляжами, удостоенными Голубого флага за экологическую чистоту и безопасность."
    ],
    imageSrc: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    facts: [
      "Здесь добывается около 90% мирового янтаря",
      "Пляж поселка Янтарный отмечен наградой 'Голубой флаг'",
      "Янтарный комбинат ведет добычу с 1947 года",
      "В поселке можно посетить смотровую площадку на карьере добычи янтаря"
    ]
  }
};

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const destination = id ? destinationsData[id] : undefined;
  
  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Направление не найдено</h1>
            <Button onClick={() => navigate('/destinations')}>
              Вернуться к списку направлений
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            className="mb-6"
            onClick={() => navigate('/destinations')}
          >
            ← Назад к направлениям
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{destination.title}</h1>
              
              <div className="mb-6">
                {destination.fullDescription.map((para, idx) => (
                  <p key={idx} className="text-lg mb-3">{para}</p>
                ))}
              </div>
              
              <div className="bg-primary/10 rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Интересные факты</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {destination.facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full sm:w-auto">Спланировать поездку</Button>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img 
                src={destination.imageSrc} 
                alt={destination.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
