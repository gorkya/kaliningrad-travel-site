
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Калининград Тревел</h3>
            <p className="text-sm text-muted-foreground">
              Исследуйте красоту Калининградской области вместе с нами. Мы поможем вам открыть для себя самый западный регион России.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Направления</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations/kaliningrad" className="text-muted-foreground hover:text-primary">Калининград</Link></li>
              <li><Link to="/destinations/curonian-spit" className="text-muted-foreground hover:text-primary">Куршская коса</Link></li>
              <li><Link to="/destinations/yantarny" className="text-muted-foreground hover:text-primary">Янтарный</Link></li>
              <li><Link to="/destinations/svetlogorsk" className="text-muted-foreground hover:text-primary">Светлогорск</Link></li>
              <li><Link to="/destinations/zelenogradsk" className="text-muted-foreground hover:text-primary">Зеленоградск</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Главная</Link></li>
              <li><Link to="/destinations" className="text-muted-foreground hover:text-primary">Все направления</Link></li>
              <li><Link to="/tours" className="text-muted-foreground hover:text-primary">Туры</Link></li>
              <li><Link to="/tips" className="text-muted-foreground hover:text-primary">Советы</Link></li>
              <li><Link to="/sitemap" className="text-muted-foreground hover:text-primary">Карта сайта</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: info@kaliningrad-travel.ru</li>
              <li className="text-muted-foreground">Телефон: +7 (4012) 123-45-67</li>
              <li className="text-muted-foreground">Адрес: г. Калининград, ул. Ленина, 1</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} Калининград Тревел. Все права защищены. | 
            <Link to="/sitemap" className="ml-1 text-primary hover:underline">Карта сайта</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
