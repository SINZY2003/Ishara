import { Link } from "wouter";
import { Accessibility, Mountain, HandHelping, ChevronRight, CalendarIcon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";
import BookingWidget from "@/components/BookingWidget";
import GalleryCarousel from "@/components/GalleryCarousel";
import AnimatedStats from "@/components/AnimatedStats";
import FaqSection from "@/components/FaqSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import { motion } from "framer-motion";

export default function Home() {
  // Feature cards data
  const features = [
    {
      icon: Accessibility,
      title: "Accessible Tours",
      description: "We provide certified Sign Language Interpreters to ensure all tourists have a fulfilling experience."
    },
    {
      icon: Mountain,
      title: "Customized Adventures",
      description: "Our tours are tailored to meet your specific interests, comfort levels, and accessibility needs."
    },
    {
      icon: HandHelping,
      title: "Sign Language Support",
      description: "Our team includes fluent sign language interpreters who bridge communication gaps for everyone."
    }
  ];

  // Destination cards data
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Maasai Mara",
      description: "Experience the iconic wildebeest migration and spot the Big Five in Kenya's most famous reserve."
    },
    {
      image: "https://images.unsplash.com/photo-1618856445394-259e67220916?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mount Kenya",
      description: "Trek Africa's second-highest peak with breathtaking vistas and diverse ecosystems."
    },
    {
      image: "https://images.unsplash.com/photo-1651860282131-e3257674ccd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Diani Beach",
      description: "Relax on pristine white sand beaches and explore vibrant marine life in the Indian Ocean."
    }
  ];

  // Testimonial cards data
  const testimonials = [
    {
      content: "Our safari with Shara Gesture was incredible! As a deaf couple, we've never felt so included. The sign language interpreters made sure we didn't miss any details about the wildlife and culture.",
      name: "Sarah J.",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      content: "The team at Shara Gesture went above and beyond to accommodate our family, including our son who is hard of hearing. Their knowledge of Kenyan wildlife and culture is impressive!",
      name: "Michael T.",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5
    },
    {
      content: "I've traveled to many places, but Shara Gesture's approach to inclusive tourism is refreshing. Their sign language interpreters helped bridge communication gaps, making our safari truly special.",
      name: "Priya K.",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      rating: 4.5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Shara Gesture Tour and Adventure"
        subtitle="Explore Africa with inclusive and accessible tours"
        description="Experience the beauty of Kenya with tour guides fluent in sign language. Breaking barriers, creating memories."
        primaryButtonText="Book Your Safari"
        primaryButtonLink="#book"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        backgroundImage="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
      />

      {/* Booking Widget Section */}
      <section id="book" className="py-8 bg-white">
        <div className="container mx-auto px-4 -mt-16 relative z-20">
          <BookingWidget />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-neutral-color">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Welcome to Shara Gesture Tour and Adventure</h2>
            <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
            <p className="text-lg mb-8">We're redefining African safaris by making them accessible to everyone, including the Deaf and Hard-of-Hearing communities. Our mission is to ensure that everyone can experience the wonder of Kenya's wildlife and culture.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-primary-color bg-opacity-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Our Impact</h2>
            <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
          </div>
          <AnimatedStats />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Explore Kenya's Beauty</h2>
            <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">Immerse yourself in Kenya's breathtaking landscapes and wildlife through our gallery. Each image tells a story of adventure, discovery, and connection.</p>
          </motion.div>
          
          <GalleryCarousel />
          
          <div className="text-center mt-10">
            <Link href="/safaris">
              <Button className="bg-primary-color hover:bg-primary-color/90">
                View All Destinations <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-16 md:py-24 bg-neutral-color">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Featured Destinations</h2>
            <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">Discover our most popular safari destinations across Kenya, each offering unique wildlife viewing opportunities and cultural experiences.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DestinationCard
                  image={destination.image}
                  title={destination.title}
                  description={destination.description}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/safaris">
              <Button variant="outline" className="border-primary-color text-primary-color hover:bg-primary-color hover:text-white">
                View All Destinations <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[url('https://images.unsplash.com/photo-1604542030193-99c93072c662?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-white">Why Choose Shara Gesture?</h2>
            <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-primary-color rounded-full p-2">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Inclusive Experience</h3>
                  <p className="text-white/80">Our tours are designed with accessibility at their core, ensuring that Deaf and Hard-of-Hearing travelers enjoy the same rich experiences as everyone else. From sign language interpreters to visual aids, we've thought of everything.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-primary-color rounded-full p-2">
                  <CalendarIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Flexible Scheduling</h3>
                  <p className="text-white/80">Whether you're planning months in advance or looking for a last-minute adventure, our flexible scheduling options accommodate your timeline and preferences, without compromising on quality or experience.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/about">
              <Button className="bg-primary-color hover:bg-primary-color/90 text-white">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary-color bg-opacity-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">What Our Guests Say</h2>
            <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  content={testimonial.content}
                  name={testimonial.name}
                  location={testimonial.location}
                  image={testimonial.image}
                  rating={testimonial.rating}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">Find answers to common questions about our inclusive safaris and adventures.</p>
          </motion.div>
          
          <FaqSection />

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-[#666666] mb-4">Still have questions? We're here to help!</p>
            <Link href="/contact">
              <Button className="bg-primary-color hover:bg-primary-color/90 text-white">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-neutral-color">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Stay Connected</h2>
              <div className="w-20 h-1 bg-primary-color mb-6"></div>
              <p className="text-lg mb-6">Subscribe to our newsletter to receive updates on new tour packages, travel tips, and exclusive offers for your next adventure in Kenya.</p>
              <p className="text-[#666666]">By subscribing, you'll gain access to:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="bg-primary-color rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Special promotions and discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary-color rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Seasonal safari recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-primary-color rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Tips for inclusive travel in Africa</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NewsletterSignup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary-color">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-white">Ready for an Unforgettable Adventure?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Book your inclusive safari experience today and discover the beauty of Kenya with guides who speak your language.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-color hover:bg-white/90">
                  Book Now
                </Button>
              </Link>
              <Link href="/safaris">
              <Button variant="secondary" size="lg" className="bg-white text-primary-color hover:bg-white/95">
                  Explore Safaris
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
