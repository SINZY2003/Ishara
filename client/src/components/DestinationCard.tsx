interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export default function DestinationCard({ image, title, description, link = "#" }: DestinationCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md group">
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-primary-color font-medium hover:text-secondary-color transition duration-300 flex items-center">
          Explore More 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
