
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">О нас</h3>
            <p className="text-muted-foreground mb-4">
              Калининград Тревел - ваш путеводитель по самому западному региону России,
              с богатой историей и уникальной природой.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-muted-foreground hover:text-primary">
                  Направления
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-muted-foreground hover:text-primary">
                  Туры
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-muted-foreground hover:text-primary">
                  Советы
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-muted-foreground hover:text-primary">
                  Карта сайта
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">Калининград, Россия</p>
              <p className="mb-2">info@kaliningrad-travel.ru</p>
              <p>+7 (4012) 12-34-56</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Калининград Тревел. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
