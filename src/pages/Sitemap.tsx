
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Sitemap() {
  const sitemapData = [
    {
      title: "Главные страницы",
      links: [
        { name: "Главная", path: "/" },
        { name: "Направления", path: "/destinations" },
        { name: "Туры", path: "/tours" },
        { name: "Советы", path: "/tips" },
      ]
    },
    {
      title: "Направления",
      links: [
        { name: "Все направления", path: "/destinations" },
        { name: "Куршская коса", path: "/destinations/curonian-spit" },
        { name: "Калининград", path: "/destinations/kaliningrad" },
        { name: "Янтарный", path: "/destinations/yantarny" },
      ]
    },
    {
      title: "Сервис",
      links: [
        { name: "Карта сайта", path: "/sitemap" },
        { name: "Контакты", path: "/contact" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Карта сайта</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <Separator className="mb-4" />
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 mr-2" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Навигация по сайту</h2>
            <p className="mb-4">
              Наш сайт предлагает множество информации о путешествиях по Калининградской области.
              Используйте карту сайта выше для быстрого перехода к нужным разделам.
            </p>
            <p>
              Если вы не нашли нужную информацию, пожалуйста, воспользуйтесь верхним меню 
              или <Link to="/contact" className="text-primary hover:underline">свяжитесь с нами</Link>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
