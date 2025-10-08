import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
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
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (touchStart - touchEnd < -75) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero section with slideshow"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/90" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      {!prefersReducedMotion && (
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
      )}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-2 sm:mb-4 drop-shadow-2xl"
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {slides[currentSlide].name}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gradient-gold font-semibold drop-shadow-lg"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slides[currentSlide].designation}
              </motion.p>

              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 italic max-w-2xl mx-auto drop-shadow-lg px-4"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                "{slides[currentSlide].quote}"
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToAbout}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 w-full sm:w-auto"
                  aria-label="Navigate to about section"
                >
                  Know the Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-white hover:bg-accent hover:text-accent-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-2xl backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                  aria-label="Send birthday wishes"
                >
                  Send Wishes
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Controls */}
          <div className="flex gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2 rounded-full glass-card hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-accent w-6 sm:w-8"
                      : "bg-white/40 hover:bg-white/60 w-2 sm:w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide}
                />
              ))}
            </div>

            {/* Pause/Play Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full glass-card hover:bg-white/20 transition-colors"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? (
                <Play className="w-5 h-5 text-white" />
              ) : (
                <Pause className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2 rounded-full glass-card hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-accent drop-shadow-lg" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
