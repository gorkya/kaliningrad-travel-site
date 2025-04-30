
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { SimpleSEO } from "@/components/SimpleSEO";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleSEO 
        title="Путешествия по Калининградской области"
        description="Откройте для себя удивительную Калининградскую область с Калининград Тревел. Экскурсии, достопримечательности и советы путешественникам."
        keywords="Калининград, туризм, путешествия, Куршская коса, Балтийское море, экскурсии"
        ogImage="/og-image.png"
      />
      
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Информационный раздел */}
        <section className="bg-muted py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-foreground">
              Откройте для себя удивительную Калининградскую область
            </h1>
            <p className="text-lg mb-6 text-foreground/90">
              Путешествуйте по самому западному региону России, где встречаются разные культуры и исторические эпохи. Калининградская область — это уникальный край с богатым прошлым, красивой природой и разнообразными достопримечательностями.
            </p>
            <p className="text-lg mb-6 text-foreground/90">
              От средневековых замков и фортов до живописных пляжей Балтийского моря, от янтарных шахт до национальных парков — здесь каждый найдет что-то по душе.
            </p>
            <div className="mt-8">
              <Button asChild>
                <a href="/destinations">Узнать больше</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
