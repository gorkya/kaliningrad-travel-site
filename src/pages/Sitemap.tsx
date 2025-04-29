
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Карта сайта</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Главные разделы</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-primary hover:underline">Главная страница</Link>
                </li>
                <li>
                  <Link to="/destinations" className="text-primary hover:underline">Направления</Link>
                </li>
                <li>
                  <Link to="/tours" className="text-primary hover:underline">Туры</Link>
                </li>
                <li>
                  <Link to="/tips" className="text-primary hover:underline">Советы путешественникам</Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Направления</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/destinations/kaliningrad" className="text-primary hover:underline">Калининград</Link>
                </li>
                <li>
                  <Link to="/destinations/curonian-spit" className="text-primary hover:underline">Куршская коса</Link>
                </li>
                <li>
                  <Link to="/destinations/yantarny" className="text-primary hover:underline">Янтарный</Link>
                </li>
                <li>
                  <Link to="/destinations/svetlogorsk" className="text-primary hover:underline">Светлогорск</Link>
                </li>
                <li>
                  <Link to="/destinations/zelenogradsk" className="text-primary hover:underline">Зеленоградск</Link>
                </li>
                <li>
                  <Link to="/destinations/pioneer" className="text-primary hover:underline">Пионерский</Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Служебные страницы</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/sitemap" className="text-primary hover:underline">Карта сайта</Link>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline">Политика конфиденциальности</a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline">Условия использования</a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline">О нас</a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:underline">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Эта карта сайта предназначена для удобной навигации по всем разделам нашего портала. 
              Если вы не можете найти нужную информацию, пожалуйста, воспользуйтесь одной из ссылок выше 
              или свяжитесь с нами через форму обратной связи.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
