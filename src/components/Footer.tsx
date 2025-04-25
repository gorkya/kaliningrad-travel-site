
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Калининград Тревел</h3>
            <p className="text-muted-foreground mb-4">
              Ваш лучший гид по Калининградской области и удивительным местам региона.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Направления</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-muted-foreground hover:text-primary">
                  Куршская коса
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-muted-foreground hover:text-primary">
                  Светлогорск
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-muted-foreground hover:text-primary">
                  Янтарный
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Связаться с нами
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Контакты</h3>
            <address className="not-italic text-muted-foreground">
              <p>Калининград, Россия</p>
              <p>Email: info@kaliningrad-travel.ru</p>
              <p>Телефон: +7 (4012) 123-456</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Калининград Тревел. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
