import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* White background that only appears when scrolled */}
      <div className={`absolute inset-0 bg-white shadow-md transition-opacity duration-300 ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}></div>
      
      {/* Content always on top */}
      <div className="container relative z-10 mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <img
                  src="/images/sign.jpeg"
                  alt="Shara Gesture Logo"
                  className="h-14 w-auto mr-3 rounded"
                />
                <div className="hidden md:block">
                  <span className="font-heading font-bold text-xl text-primary-color">Shara Gesture</span>
                  <span className="block text-xs text-secondary-color">Tour and Adventure</span>
                </div>
              </a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={`${isScrolled ? 'text-[#333333]' : 'text-primary-color font-bold'} hover:text-primary-color transition duration-300 ${location === "/" ? "text-primary-color" : ""}`}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className={`${isScrolled ? 'text-[#333333]' : 'text-primary-color font-bold'} hover:text-primary-color transition duration-300 ${location === "/about" ? "text-primary-color" : ""}`}>
                About Us
              </a>
            </Link>
            <Link href="/safaris">
              <a className={`${isScrolled ? 'text-[#333333]' : 'text-primary-color font-bold'} hover:text-primary-color transition duration-300 ${location === "/safaris" ? "text-primary-color" : ""}`}>
                Safaris & Adventures
              </a>
            </Link>
            <Link href="/contact">
              <a className={`${isScrolled ? 'text-[#333333]' : 'text-primary-color font-bold'} hover:text-primary-color transition duration-300 ${location === "/contact" ? "text-primary-color" : ""}`}>
                Contact
              </a>
            </Link>
            <Button className="bg-primary-color hover:bg-primary-color/90 text-white font-bold transition duration-300">
              Book Now
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className={`${isScrolled ? 'text-[#333333]' : 'text-primary-color'} hover:text-primary-color focus:outline-none`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white mt-3 rounded-md shadow-lg ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/">
              <a
                className="text-[#333333] hover:text-primary-color font-medium py-2 transition duration-300"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className="text-[#333333] hover:text-primary-color font-medium py-2 transition duration-300"
                onClick={closeMobileMenu}
              >
                About Us
              </a>
            </Link>
            <Link href="/safaris">
              <a
                className="text-[#333333] hover:text-primary-color font-medium py-2 transition duration-300"
                onClick={closeMobileMenu}
              >
                Safaris & Adventures
              </a>
            </Link>
            <Link href="/contact">
              <a
                className="text-[#333333] hover:text-primary-color font-medium py-2 transition duration-300"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </Link>
            <Button
              className="bg-primary-color hover:bg-primary-color/90 text-white font-medium w-full transition duration-300"
              onClick={closeMobileMenu}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
