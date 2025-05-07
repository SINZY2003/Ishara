import TeamMemberCard from "@/components/TeamMemberCard";

export default function About() {
  // Team members data
  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "David Mutua",
      role: "Founder & Lead Guide",
      description: "Certified safari guide with 15+ years of experience and fluent in KSL."
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Sarah Kimani",
      role: "Lead Interpreter",
      description: "Certified in KSL, ASL, and BSL with expertise in wildlife and cultural terminology."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "John Ochieng",
      role: "Wildlife Expert",
      description: "Zoologist with extensive knowledge of East African ecosystems and conservation."
    },
    {
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      name: "Grace Wanjiku",
      role: "Cultural Liaison",
      description: "Specializes in creating authentic cultural immersion experiences across Kenya."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">About Shara Gesture</h1>
          <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
          <p className="text-lg">Discover the story behind East Africa's premier inclusive tour company.</p>
        </div>
        
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Shara Gesture team with tourists"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">Our Story</h2>
            <p className="mb-4">Founded in 2018, Shara Gesture Tour and Adventure was born from a simple observation: the tourism industry was leaving behind travelers with hearing impairments. Our founder, a CODA (Child of Deaf Adults) and experienced safari guide, decided to bridge this gap.</p>
            <p className="mb-4">Today, we've grown into a team of passionate guides, interpreters, and tourism professionals committed to making Kenya's natural wonders and cultural experiences accessible to everyone.</p>
            <p>We believe that the magic of encountering wildlife in their natural habitat and connecting with local communities should be available to all travelers, regardless of hearing ability.</p>
          </div>
        </div>
        
        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">OUR MISSION</h2>
              <p>To revolutionize the tourism industry by making travel accessible and enjoyable for all, ensuring that Deaf and Hard-of-Hearing tourists have the same thrilling, insightful, and engaging experiences as everyone else.</p>
            </div>
            
            <div>
              <h2 className="font-heading font-bold text-2xl mb-4 text-[#333333]">OUR VISION</h2>
              <p>To become the leading inclusive tour and adventure company in Africa, setting the standard for accessible tourism through innovative communication solutions.</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Safari experience with Shara Gesture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-20">
          <h2 className="font-heading font-bold text-2xl mb-8 text-center text-[#333333]">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
