
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationHeader } from "@/components/DestinationHeader";
import { DestinationGallery } from "@/components/DestinationGallery";
import { NotFoundDestination } from "@/components/NotFoundDestination";
import { SEOHelmet } from "@/components/SEOHelmet";
import { destinationsData } from "@/types/destination";

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const destination = id ? destinationsData[id] : undefined;
  
  if (!destination) {
    return <NotFoundDestination />;
  }

  // Создаем структурированные данные для SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": destination.title,
    "description": destination.description,
    "image": destination.coverImage || destination.gallery?.[0]?.src || "",
    "url": `https://kaliningrad-travel.ru/destinations/${id}`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Калининградская область",
      "addressCountry": "Россия"
    }
  };

  // Добавляем факты как особенности, если они есть
  if (destination.facts && destination.facts.length > 0) {
    structuredData.additionalProperty = destination.facts.map(fact => ({
      "@type": "PropertyValue",
      "name": fact.title,
      "value": fact.description
    }));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHelmet 
        title={destination.title}
        description={destination.description.substring(0, 160)}
        keywords={`${destination.title}, Калининградская область, достопримечательности, путешествия`}
        ogImage={destination.coverImage || destination.gallery?.[0]?.src || "/og-image.png"}
        ogType="article"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <article>
            <DestinationHeader destination={destination} />
            
            {destination.gallery && (
              <DestinationGallery id={id} gallery={destination.gallery} />
            )}
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
