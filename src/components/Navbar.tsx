
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" aria-label="Главная страница" className="flex items-center">
            <img 
              src="/logo-b.svg" 
              alt="Калининград Тревел" 
              width="40" 
              height="40"
              className="mr-2"
            />
            <span className="font-bold text-xl hidden sm:inline-block">Калининград Тревел</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-primary transition-colors">Главная</a>
          <a href="/destinations" className="hover:text-primary transition-colors">Достопримечательности</a>
          <a href="/sitemap" className="hover:text-primary transition-colors">Карта сайта</a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="/" className="hover:text-primary transition-colors block py-2">Главная</a>
            <a href="/destinations" className="hover:text-primary transition-colors block py-2">Достопримечательности</a>
            <a href="/sitemap" className="hover:text-primary transition-colors block py-2">Карта сайта</a>
          </nav>
        </div>
      )}
    </header>
  );
};
