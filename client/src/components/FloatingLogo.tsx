import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const image = "/assets/sign.jpeg";

export default function FloatingLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating logo when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      title="Back to top"
    >
      <div className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative">
          <img 
            src={image} 
            alt="Shara Gesture Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-primary-color bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
      </div>
    </motion.div>
  );
}
