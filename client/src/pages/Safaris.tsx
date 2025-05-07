import SafariPackageCard from "@/components/SafariPackageCard";
import { MapPin, Globe, Users, Shield, BookOpen } from "lucide-react";

export default function Safaris() {
  // Safari packages data
  const safariPackages = [
    {
      image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Classic Kenya Safari",
      description: "7 days exploring Maasai Mara, Lake Nakuru, and Amboseli with sign language interpreters available.",
      price: 1950,
      features: ["Sign language interpreters", "Wildlife viewing", "Cultural visits"],
      isPopular: true
    },
    {
      image: "https://pixabay.com/get/gfbc900d4409e52eadff57c665b45196015672b0e654d08ed9b47da1a883fa5183daab95e5bddc26c7284909049cb31c55ed5d6cd397eff06b8a0ad430bbe448e_1280.jpg",
      title: "Wildlife & Beach Escape",
      description: "10 days combining safari adventures with relaxation on Kenya's stunning beaches. Perfect for families.",
      price: 2450,
      features: ["Safari & beach combo", "Accessible accommodations", "Marine excursions"]
    },
    {
      image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Cultural Immersion Journey",
      description: "8 days focused on authentic cultural experiences with Kenya's diverse ethnic communities.",
      price: 1850,
      features: ["Community visits", "Craft workshops", "Traditional cuisine"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-color">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Safaris & Adventures</h1>
          <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
          <p className="text-lg">Explore our range of inclusive and accessible safari experiences designed for everyone.</p>
        </div>
        
        {/* Inclusive Communication Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://pixabay.com/get/g0567a15b2c7008809d5a88351aa4a04410a39c856a6f00916cf798116bca5fc515c444b3444614d6203b37c899984f21f6a8968314a2c62cd0dd0fc7ad924e5f_1280.png"
              alt="Sign language interpreter with tourists"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">Inclusive Communication</h2>
            <p className="mb-4">We provide certified Sign Language Interpreters and visual guides to ensure Deaf tourists have a fulfilling experience. Our team is trained in multiple sign languages including KSL (Kenyan Sign Language), ASL (American Sign Language), and BSL (British Sign Language).</p>
            <p className="mb-4">We've developed specialized signs for wildlife, geographical features, and cultural elements to ensure nothing is lost in translation during your adventure.</p>
            <p>All our guides are trained in basic sign language, and we provide visual materials and written information to complement the spoken explanations.</p>
          </div>
        </div>
        
        {/* Tailored Safaris Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">Tailored Safaris & Adventures</h2>
            <p className="mb-4">We customize trips to fit your interests, comfort, and accessibility needs. From family-friendly safaris to specialized photography expeditions, we create experiences that match your preferences.</p>
            <p className="mb-4">Our packages can be modified to accommodate specific requirements, whether it's dietary restrictions, mobility concerns, or communication preferences.</p>
            <p>We offer various accommodation options from luxury lodges to authentic tented camps, ensuring you experience Africa your way.</p>
          </div>
          
          <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Customized safari experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Authentic Kenyan Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Authentic Kenyan cultural experience"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">Authentic Kenyan Experience</h2>
            <p className="mb-4">Our tours offer wildlife encounters, cultural immersions, and eco-friendly explorations. Witness the magnificent Big Five in their natural habitat across Kenya's world-renowned national parks and reserves.</p>
            <p className="mb-4">Engage with local communities in meaningful ways, learning about traditional crafts, cuisines, and customs directly from community members.</p>
            <p>Participate in conservation efforts and understand the delicate balance between wildlife protection and sustainable tourism.</p>
          </div>
        </div>
        
        {/* Professional Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">Professional & Passionate Team</h2>
            <p className="mb-4">Our guides and interpreters are trained to deliver exceptional services. Each team member is certified in first aid and safety procedures to ensure your wellbeing throughout your journey.</p>
            <p className="mb-4">Our interpreters specialize in tourism contexts and have extensive knowledge of wildlife, geography, and cultural terminology in multiple sign languages.</p>
            <p>We regularly conduct training sessions to enhance our team's skills and keep them updated on the latest inclusive tourism practices.</p>
          </div>
          
          <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://pixabay.com/get/g8be9ebeb656f6e8595c2b44803776febb2c224a451fe1933aa90b574ca56ae013fb3bd21e04c370ed9c1483714b374d47b440da5083ae60d8c232efc262b4947_1280.jpg"
              alt="Professional safari guides and interpreters"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Global Accessibility Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="International tourists with sign language support"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">Global Accessibility</h2>
            <p className="mb-4">We welcome tourists from all over the world, breaking language and communication barriers. Our team can communicate in multiple spoken and signed languages to accommodate international travelers.</p>
            <p className="mb-4">We provide pre-trip information in accessible formats and offer video calls with interpreters to answer questions before your arrival.</p>
            <p>We collaborate with deaf-led organizations globally to continuously improve our services and reach more travelers from the deaf community.</p>
          </div>
        </div>
        
        {/* Safari Packages Section */}
        <div className="mt-24">
          <h2 className="font-heading font-bold text-2xl mb-8 text-center text-[#333333]">Our Safari Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((safari, index) => (
              <SafariPackageCard
                key={index}
                image={safari.image}
                title={safari.title}
                description={safari.description}
                price={safari.price}
                features={safari.features}
                isPopular={safari.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
