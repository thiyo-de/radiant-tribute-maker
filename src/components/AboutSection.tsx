import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import portrait from "@/assets/portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 text-gradient-royal"
        >
          About the Legend
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src={portrait}
                alt="Portrait of John Anderson"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-40 h-40 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              John Anderson
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Born in 1970, John Anderson has spent his life making an indelible
              mark on the world. From humble beginnings to becoming a
              distinguished leader, his journey is a testament to perseverance,
              vision, and unwavering dedication.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              With over three decades of pioneering work in technology and
              philanthropy, John has transformed industries and touched countless
              lives. His commitment to education, innovation, and social
              responsibility has earned him recognition worldwide.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Beyond professional achievements, John is a devoted family man, a
              mentor to many, and a believer in the power of human potential. His
              legacy continues to inspire future generations to dream bigger and
              reach higher.
            </p>

            {/* Stats */}
            <div className={`grid ${isMobile ? 'grid-cols-1 divide-y' : 'grid-cols-3'} gap-4 sm:gap-6 pt-6 sm:pt-8`}>
              <motion.div 
                className={`text-center ${isMobile ? 'py-4' : ''} transition-transform hover:scale-105`}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-gold">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Years of Excellence
                </div>
              </motion.div>
              <motion.div 
                className={`text-center ${isMobile ? 'py-4' : ''} transition-transform hover:scale-105`}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-gold">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Awards Received
                </div>
              </motion.div>
              <motion.div 
                className={`text-center ${isMobile ? 'py-4' : ''} transition-transform hover:scale-105`}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-gold">1M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Lives Impacted
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 relative"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
            
            {/* Decorative Quote Marks */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-4 left-4 text-6xl sm:text-8xl text-accent/20 font-serif leading-none"
            >
              "
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-4 right-4 text-6xl sm:text-8xl text-accent/20 font-serif leading-none rotate-180"
            >
              "
            </motion.div>
            
            <div className="relative z-10">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-4 sm:mb-6 opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground italic px-4">
                "Success is not measured by what you achieve, but by the lives
                you touch and the legacy you leave behind."
              </p>
              <p className="text-base sm:text-lg text-gradient-gold mt-4 sm:mt-6 font-semibold">
                - John Anderson
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
