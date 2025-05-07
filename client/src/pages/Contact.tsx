import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Video } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-[#333333]">Contact Us</h1>
          <div className="w-20 h-1 bg-primary-color mx-auto mb-6"></div>
          <p className="text-lg">Have questions about our tours? Get in touch with our team today.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-neutral-color rounded-lg p-8 shadow-md mb-8">
              <h2 className="font-heading font-bold text-xl mb-6 text-[#333333]">Get In Touch</h2>
              
              <ContactForm />
            </div>
          </div>
          
          <div>
            <div className="bg-neutral-color rounded-lg p-8 shadow-md mb-8">
              <h2 className="font-heading font-bold text-xl mb-6 text-[#333333]">Contact Information</h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Our Office</h3>
                <p className="flex items-start mb-2">
                  <MapPin className="text-primary-color mt-1 mr-3" size={18} />
                  <span>Karen Road, Nairobi, Kenya</span>
                </p>
                <p className="flex items-center mb-2">
                  <Phone className="text-primary-color mr-3" size={18} />
                  <span>+254 712 345 678</span>
                </p>
                <p className="flex items-center mb-2">
                  <Mail className="text-primary-color mr-3" size={18} />
                  <span>info@sharagesturtours.com</span>
                </p>
                <p className="flex items-center">
                  <Clock className="text-primary-color mr-3" size={18} />
                  <span>Monday - Friday: 8AM - 6PM (EAT)</span>
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-color hover:text-secondary-color transition duration-300" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary-color hover:text-secondary-color transition duration-300" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-primary-color hover:text-secondary-color transition duration-300" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-primary-color hover:text-secondary-color transition duration-300" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-2">Alternative Communication</h3>
                <p className="mb-2">For sign language users, we offer:</p>
                <ul className="list-disc list-inside mb-4 ml-4">
                  <li>Video call appointments with our interpreters</li>
                  <li>WhatsApp video messaging</li>
                  <li>Text and email correspondence</li>
                </ul>
                <a href="#" className="text-primary-color hover:text-secondary-color transition duration-300 flex items-center">
                  <Video className="mr-2" size={18} /> Schedule a video call
                </a>
              </div>
            </div>
            
            <div className="bg-neutral-color rounded-lg p-8 shadow-md">
              <h2 className="font-heading font-bold text-xl mb-6 text-[#333333]">Our Location</h2>
              <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.700558630269!2d36.7352967!3d-1.3363868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7e02d85%3A0x940fe3d3ed8c9bed!2sKaren%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1656669548291!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shara Gesture Tour and Adventure location"
                  aria-label="Map showing location of Shara Gesture Tour and Adventure in Karen, Nairobi, Kenya"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
