
import { HeroSection } from "@/components/HeroSection";
import { DestinationCard } from "@/components/DestinationCard";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные направления</h2>
        <div className="flex flex-row space-x-6 overflow-x-auto pb-4">
          <DestinationCard 
            title="Куршская коса" 
            description="Уникальный природный заповедник, внесенный в список ЮНЕСКО" 
            imageUrl="https://cdn.poehali.dev/files/104bbeba-4f34-4975-9ccc-97bcd6337c7c.jpg" 
          />
          <DestinationCard 
            title="Калининград" 
            description="Исторический центр с немецкой архитектурой и Кафедральным собором" 
            imageUrl="https://cdn.poehali.dev/files/9147276d-d4c1-4a92-a44b-271fe220a375.jpg" 
          />
          <DestinationCard 
            title="Янтарный" 
            description="Поселок с крупнейшим в мире месторождением янтаря и живописными пляжами" 
            imageUrl="https://images.unsplash.com/photo-1614518921456-2527e0c0061c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
          />
        </div>
      </section>
      
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">О Калининградской области</h2>
          <p className="text-lg mb-6">
            Калининградская область — самый западный регион России, 
            расположенный на побережье Балтийского моря. 
            Этот уникальный уголок страны славится богатой историей, 
            невероятной природой и особой атмосферой, сочетающей в себе 
            немецкое наследие и русскую культуру.
          </p>
          <p className="text-lg mb-6">
            Здесь вы найдете старинные замки и форты, красивейшие пляжи 
            Балтийского побережья, уникальные природные заповедники и, конечно, 
            месторождения янтаря — солнечного камня, которым славится этот регион.
          </p>
          <p className="text-lg">
            Калининградская область идеально подходит для путешествий в любое время года, 
            предлагая разнообразные маршруты и возможности для отдыха на любой вкус.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
