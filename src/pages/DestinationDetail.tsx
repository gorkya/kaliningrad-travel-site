
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DestinationHeader } from "@/components/DestinationHeader";
import { DestinationGallery } from "@/components/DestinationGallery";
import { NotFoundDestination } from "@/components/NotFoundDestination";
import { destinationsData } from "@/types/destination";

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const destination = id ? destinationsData[id] : undefined;
  
  if (!destination) {
    return <NotFoundDestination />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <article itemScope itemType="http://schema.org/TouristAttraction">
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
