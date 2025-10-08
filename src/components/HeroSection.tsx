import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

const slides = [
  {
    image: hero1,
    name: "John Anderson",
    designation: "Visionary Leader & Philanthropist",
    quote: "A life dedicated to making the world a better place"
  },
  {
    image: hero2,
    name: "Celebrating Excellence",
    designation: "50 Years of Inspiration",
    quote: "Every moment a testament to unwavering dedication"
  },
  {
    image: hero3,
    name: "Cherished Memories",
    designation: "A Legacy of Love",
    quote: "Building bridges of hope and unity"
  },
  {
    image: hero4,
    name: "Awards & Recognition",
    designation: "Distinguished Achievements",
    quote: "Excellence recognized across the globe"
  },
  {
    image: hero5,
    name: "The Journey Continues",
    designation: "Path to Greatness",
    quote: "Inspiring generations to dream bigger"
  },
  {
    image: hero6,
    name: "A Moment to Celebrate",
    designation: "Birthday Tribute",
    quote: "Today we honor a life well lived"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -200],
              x: [null, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {slides[currentSlide].name}
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl lg:text-3xl text-gradient-gold font-semibold"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slides[currentSlide].designation}
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-white/90 italic max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                "{slides[currentSlide].quote}"
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToAbout}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-accent/50 transition-all duration-300"
                >
                  Know the Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg rounded-2xl backdrop-blur-sm bg-white/10"
                >
                  Send Wishes
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex gap-2 justify-center mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-accent w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
