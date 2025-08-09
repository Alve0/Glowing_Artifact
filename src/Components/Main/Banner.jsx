import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/21/b5/40/national-art-glass-collection.jpg",
      title: "Discover Ancient Artifacts",
      subtitle: "Explore a world of artifacts with Arty!",
    },
    {
      image:
        "https://images.ctfassets.net/cnu0m8re1exe/1sQ6sM77cCEqhr3M1ryLAD/3e0609f58199c35aab3c51c967dcc4d6/shutterstock_1065318299__1_.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
      title: "Uncover Hidden Treasures",
      subtitle: "Join us on a journey through history!",
    },
    {
      image:
        "https://images.ctfassets.net/cnu0m8re1exe/4okGeSqm1K4DUPwE2Qp3FD/0b8fe5c195aa47835eb96ce2c70b7596/1280px-Venus_of_Willendorf_-_All_sides.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=pad",
      title: "Experience the Wonders of Art",
      subtitle: "From ancient to modern, explore the beauty of art!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.95,
      transition: { duration: 0.7, ease: "easeIn" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.7, ease: "easeIn" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
        type: "spring",
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                />

                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-12 bg-black/40 text-white"
                  variants={textVariants}
                >
                  <motion.h2
                    className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4"
                    variants={textVariants}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl"
                    variants={textVariants}
                  >
                    {slide.subtitle}
                  </motion.p>
                </motion.div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
