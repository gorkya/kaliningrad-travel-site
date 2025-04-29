
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Информационный раздел */}
        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Откройте для себя удивительную Калининградскую область
            </h2>
            <p className="text-lg mb-6 text-foreground/90">
              Путешествуйте по самому западному региону России, где встречаются разные культуры и исторические эпохи. Калининградская область — это уникальный край с богатым прошлым, красивой природой и разнообразными достопримечательностями.
            </p>
            <p className="text-lg mb-6 text-foreground/90">
              От средневековых замков и фортов до живописных пляжей Балтийского моря, от янтарных шахт до национальных парков — здесь каждый найдет что-то по душе.
            </p>
            <div className="mt-8">
              <Button>Узнать больше</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
