import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send 
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import sign from "@/assets/sign.jpeg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-dark-color text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src={sign}
                alt="Shara Gesture Logo"
                className="h-17 w-30 mr-3 rounded"
              />
            </div>
            <p className="text-gray-400">Making African safaris accessible to everyone through inclusive experiences and sign language support.</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-primary-color transition duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-primary-color transition duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/safaris">
                  <a className="text-gray-400 hover:text-primary-color transition duration-300">Safaris & Adventures</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-gray-400 hover:text-primary-color transition duration-300">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-primary-color transition duration-300">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Popular Safaris</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300">Maasai Mara Safari</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300">Amboseli National Park</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300">Tsavo Safari</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300">Lake Nakuru</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300">Cultural Tours</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="mb-4" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="rounded-r-none text-foreground" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-primary-color hover:bg-primary-color/90 rounded-l-none">
                  <Send size={16} />
                </Button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Ishara Gesture Tour and Adventure. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-color transition duration-300 text-sm">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
