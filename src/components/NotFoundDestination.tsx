
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function NotFoundDestination() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Направление не найдено</h1>
          <Button onClick={() => navigate('/destinations')}>
            Вернуться к списку направлений
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
