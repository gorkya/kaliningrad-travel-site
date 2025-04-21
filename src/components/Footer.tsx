
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Калининград Тревел</h3>
            <p className="text-gray-400">
              Ваш путеводитель по самому западному и уникальному региону России.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Главная</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white">Направления</Link></li>
              <li><Link to="/tours" className="text-gray-400 hover:text-white">Туры</Link></li>
              <li><Link to="/tips" className="text-gray-400 hover:text-white">Советы</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Популярные места</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">Куршская коса</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Кафедральный собор</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Светлогорск</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Балтийск</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <address className="not-italic text-gray-400">
              <p>Калининград, Россия</p>
              <p className="mt-2">Email: info@kaliningrad-travel.ru</p>
              <p className="mt-2">Тел: +7 (4012) 123-456</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Калининград Тревел. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
