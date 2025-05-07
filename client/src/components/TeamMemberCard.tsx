interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

export default function TeamMemberCard({ image, name, role, description }: TeamMemberCardProps) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
      />
      <h4 className="font-heading font-semibold text-lg mb-1">{name}</h4>
      <p className="text-primary-color mb-2">{role}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
