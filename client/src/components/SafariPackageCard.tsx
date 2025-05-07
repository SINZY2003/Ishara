import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SafariPackageCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export default function SafariPackageCard({
  image,
  title,
  description,
  price,
  features,
  isPopular = false,
}: SafariPackageCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        {isPopular && (
          <div className="absolute top-0 right-0 bg-primary-color text-white px-3 py-1 m-2 rounded-md font-medium text-sm">
            Popular
          </div>
        )}
      </div>
      <div className="p-6">
        <h4 className="font-heading font-semibold text-xl mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-primary-color font-bold text-xl">ksh {price.toLocaleString()}</span>
          <span className="text-sm text-gray-600">per person</span>
        </div>
        <ul className="mb-6 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-1">
              <Check className="text-secondary-color mr-2" size={16} />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-primary-color hover:bg-primary-color/90 text-white font-medium">
          Book Now
        </Button>
      </div>
    </div>
  );
}
