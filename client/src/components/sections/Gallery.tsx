import { useState, useEffect } from "react";
import labSession1 from "@assets/../gallery_photos/lab_session_1.jpeg";
import labSession2 from "@assets/../gallery_photos/lab_session_2.jpeg";
import labSession3 from "@assets/../gallery_photos/lab_session_3.jpeg";
import labSession4 from "@assets/../gallery_photos/lab_session_4.jpeg";
import collegeEvent1 from "@assets/../gallery_photos/college_event_1.jpeg";
import collegeEvent2 from "@assets/../gallery_photos/college_event_2.jpeg";
import practicalTraining from "@assets/../gallery_photos/practical_training.jpg";
import collegeCampus from "@assets/../gallery_photos/college_campus.jpg";
import studentsClassroom from "@assets/../gallery_photos/students_classroom.jpg";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: labSession1,
    alt: "Medical laboratory practical training session"
  },
  {
    id: 2,
    src: labSession2,
    alt: "Students conducting laboratory experiments"
  },
  {
    id: 3,
    src: labSession3,
    alt: "Hands-on lab work and medical testing"
  },
  {
    id: 4,
    src: labSession4,
    alt: "Laboratory equipment training session"
  },
  {
    id: 5,
    src: collegeEvent1,
    alt: "College events and student activities"
  },
  {
    id: 6,
    src: collegeEvent2,
    alt: "Academic events and ceremonies"
  },
  {
    id: 7,
    src: practicalTraining,
    alt: "Practical medical training with instructors"
  },
  {
    id: 8,
    src: collegeCampus,
    alt: "College campus and student gathering"
  },
  {
    id: 9,
    src: studentsClassroom,
    alt: "Students in classroom learning environment"
  }
];

export default function Gallery() {
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);

  // Function to shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array: GalleryImage[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize with first 4 shuffled images
  useEffect(() => {
    const shuffled = shuffleArray(galleryImages);
    setDisplayedImages(shuffled.slice(0, 4));
  }, []);

  // Auto-shuffle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = shuffleArray(galleryImages);
      setDisplayedImages(shuffled.slice(0, 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1d3557] mb-4">Campus Life Gallery</h2>
          <p className="text-[#457b9d] max-w-2xl mx-auto">
            Experience our authentic college environment, practical training sessions, and vibrant student activities.
          </p>
        </div>
        
        {/* 2x2 Grid Gallery */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {displayedImages.map((image, index) => (
            <div 
              key={`${image.id}-${index}`}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Auto-shuffle indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-[#457b9d] italic">
            Images automatically refresh every 3 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
