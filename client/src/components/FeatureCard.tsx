import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <div className="text-primary-color text-4xl mb-4 flex justify-center">
        <Icon size={36} />
      </div>
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
