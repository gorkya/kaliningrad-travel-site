
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>404 - Страница не найдена | Калининград Тревел</title>
        <meta name="description" content="Запрашиваемая страница не найдена. Вернитесь на главную страницу Калининград Тревел." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-2">404</h1>
          <p className="text-2xl font-semibold mb-6">Страница не найдена</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Извините, запрашиваемая вами страница не существует или была перемещена.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/">Вернуться на главную</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/destinations">Посмотреть направления</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
