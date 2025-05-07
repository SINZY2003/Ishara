import { Star, StarHalf } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  name: string;
  location: string;
  image: string;
  rating: number;
}

export default function TestimonialCard({ content, name, location, image, rating }: TestimonialCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-accent-color flex">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="fill-current" size={16} />
          ))}
          {hasHalfStar && <StarHalf className="fill-current" size={16} />}
        </div>
      </div>
      <p className="mb-6 italic">{content}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  );
}
