import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // College photos for slideshow
  const collegeImages = [
    {
      src: "/attached_assets/30x40_1753381443073.jpg",
      alt: "College students and faculty group photo"
    },
    {
      src: "/attached_assets/DSC_6363_1753381443075.jpg", 
      alt: "College graduation ceremony"
    },
    {
      src: "/attached_assets/WhatsApp Image 2024-11-14 at 1.36.23 PM_1753381443076.jpeg",
      alt: "College activities and events"
    }
  ];

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % collegeImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [collegeImages.length]);

  return (
    <section id="home" className="relative bg-[#0b1a2f] min-h-[600px] flex items-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0">
        {collegeImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      
      {/* Slideshow Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {collegeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-24">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow-lg">
            Empowering Future Healthcare Leaders
          </h1>
          <p className="text-xl md:text-2xl text-[#a8c7dc] mb-8 drop-shadow-lg">
            Excellence in Nursing & Allied Sciences with UGC-approved programs, flexible learning modes, and hands-on clinical training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onExploreClick}
              className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-3 px-8 rounded-md text-center transition duration-300 shadow-lg"
            >
              Explore Our Courses
            </button>
            <button
              onClick={onContactClick}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#172f4f] font-bold py-3 px-8 rounded-md text-center transition duration-300 shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
