
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm border-b">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-foreground">Калининград Тревел</Link>
          <img 
            src="https://cdn.poehali.dev/files/a4ce7836-b24f-46ff-bd24-00aeb2e65975.svg" 
            alt="Калининград Тревел Логотип" 
            className="h-10 ml-2" 
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 mr-12">
          <nav className="flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary font-medium">Главная</Link>
            <Link to="/destinations" className="text-muted-foreground hover:text-primary font-medium">Направления</Link>
            <Link to="/tours" className="text-muted-foreground hover:text-primary font-medium">Туры</Link>
            <Link to="/tips" className="text-muted-foreground hover:text-primary font-medium">Советы</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="default" className="hover:bg-primary/90 text-primary-foreground">Связаться</Button>
          </div>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            className="ml-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Переключатель темы в правом верхнем углу */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/destinations" 
              className="text-muted-foreground hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Направления
            </Link>
            <Link 
              to="/tours" 
              className="text-muted-foreground hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Туры
            </Link>
            <Link 
              to="/tips" 
              className="text-muted-foreground hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Советы
            </Link>
            <Button 
              variant="default"
              className="hover:bg-primary/90 text-primary-foreground w-full mt-2"
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
