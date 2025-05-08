import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import sign from "@/assets/sign.jpeg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <div 
      className="relative h-screen bg-cover bg-center pt-16 overflow-hidden" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10 max-w-full">
        <div className="text-white max-w-2xl">
          <img
            src={sign}
            alt="Shara Gesture Logo"
            className="h-32 w-auto mb-6 rounded shadow-lg"
          />
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="text-accent-color">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="font-accent text-xl md:text-2xl mb-6">{subtitle}</p>
          <p className="mb-8 text-lg">{description}</p>
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && primaryButtonLink && (
                <Link href={primaryButtonLink}>
                  <Button className="bg-primary-color hover:bg-primary-color/90 text-white font-bold py-3 px-6">
                    {primaryButtonText}
                  </Button>
                </Link>
              )}
              
              {secondaryButtonText && secondaryButtonLink && (
                <Link href={secondaryButtonLink}>
                    <Button 
                      variant="ghost" 
                      className="text-white font-bold py-3 px-6 hover:bg-orange-500 hover:text-white border border-white"
                    >
                      {secondaryButtonText}
                    </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
