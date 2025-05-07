import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Expand, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  location: string;
  description: string;
}

export default function GalleryCarousel() {
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  const toggleLike = (id: number) => {
    setLiked(prevLiked => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(id)) {
        newLiked.delete(id);
        toast({
          title: "Removed from favorites",
          description: "This destination has been removed from your favorites",
        });
      } else {
        newLiked.add(id);
        toast({
          title: "Added to favorites!",
          description: "This destination has been added to your favorites",
        });
      }
      return newLiked;
    });
  };

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Elephants in Amboseli National Park",
      location: "Amboseli National Park",
      description: "Witness incredible elephant herds with the majestic Mount Kilimanjaro in the background."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Sunrise at Maasai Mara",
      location: "Maasai Mara",
      description: "Experience breathtaking sunrises during a hot air balloon safari over the savanna."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Leopard in tree",
      location: "Tsavo National Park",
      description: "Spot elusive leopards lounging on tree branches after successful hunts."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Giraffe silhouette at sunset",
      location: "Samburu National Reserve",
      description: "Enjoy magical African sunsets with iconic wildlife silhouettes."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Family on safari",
      location: "Lake Nakuru",
      description: "Create unforgettable family memories with guided safari experiences suitable for all ages."
    }
  ];

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="overflow-hidden rounded-lg group relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[300px] w-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-xl">{image.location}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                    
                    <div className="flex gap-2 mt-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                        onClick={() => toggleLike(image.id)}
                      >
                        <Heart className={`h-4 w-4 ${liked.has(image.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                          >
                            <Expand className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <div className="aspect-video relative overflow-hidden rounded-lg">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold mt-2">{image.location}</h3>
                          <p className="text-muted-foreground">{image.description}</p>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}