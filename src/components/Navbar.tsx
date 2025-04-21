
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-[#1A1F2C]">Калининград Тревел</Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-[#9b87f5] font-medium">Главная</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-[#9b87f5] font-medium">Направления</Link>
            <Link to="/tours" className="text-gray-700 hover:text-[#9b87f5] font-medium">Туры</Link>
            <Link to="/tips" className="text-gray-700 hover:text-[#9b87f5] font-medium">Советы</Link>
          </nav>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">Связаться</Button>
        </div>
        
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/destinations" 
              className="text-gray-700 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Направления
            </Link>
            <Link 
              to="/tours" 
              className="text-gray-700 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Туры
            </Link>
            <Link 
              to="/tips" 
              className="text-gray-700 hover:text-[#9b87f5] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Советы
            </Link>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
