
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm border-b">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold text-foreground">Калининград Тревел</Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary font-medium">Главная</Link>
            <Link to="/destinations" className="text-muted-foreground hover:text-primary font-medium">Направления</Link>
            <Link to="/tours" className="text-muted-foreground hover:text-primary font-medium">Туры</Link>
            <Link to="/tips" className="text-muted-foreground hover:text-primary font-medium">Советы</Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Связаться</Button>
          </div>
        </div>
        
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button 
            className="ml-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
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
