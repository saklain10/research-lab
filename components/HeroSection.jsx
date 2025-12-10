// components/HeroSection.jsx
"use client"; 

import { useState, useEffect } from 'react';
import Image from 'next/image';
// Note: next.config.mjs must be configured for i.ibb.co domain

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/k2cgv4mc/solar-bess.jpg", 
    title: 'Advancing Renewable Energy Solutions',
    description: 'Pioneering research in solar, wind, and smart grid technologies for a sustainable future.',
    buttonText: 'Explore Research',
    buttonLink: '/research',
  },
  {
    id: 2,
    image: "https://i.ibb.co/HLh4Sqct/lab-work.png",
    title: 'Cutting-Edge Research Facilities',
    description: 'Our state-of-the-art labs empower groundbreaking discoveries in electrical engineering.',
    buttonText: 'Meet Our Team',
    buttonLink: '/members',
  },
  {
    id: 3, 
    image: "https://i.ibb.co/jvVks9M2/wind-ev-charging.png",
    title: 'Innovating for a Greener Tomorrow',
    description: 'Transforming energy landscapes through innovative power electronics and grid integration.',
    buttonText: 'View Publications',
    buttonLink: '/publications',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Z-Index 0 সেট করা হলো */}
          <Image
            src={slide.image} 
            alt={slide.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="z-0" 
          />
          
          {/* ওভারলে Opacity 30% এ সেট করা হলো এবং z-10 ব্যবহার করা হলো */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center p-4 z-10"> 
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              {slide.title}
            </h2>
            <p className="text-md sm:text-lg md:text-xl text-gray-200 max-w-3xl mb-8">
              {slide.description}
            </p>
            <a
              href={slide.buttonLink}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      
      {/* Manual navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;