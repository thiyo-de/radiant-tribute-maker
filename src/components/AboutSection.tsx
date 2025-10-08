import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-gradient-royal"
        >
          About the Legend
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={portrait}
                alt="Portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              John Anderson
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born in 1970, John Anderson has spent his life making an indelible
              mark on the world. From humble beginnings to becoming a
              distinguished leader, his journey is a testament to perseverance,
              vision, and unwavering dedication.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over three decades of pioneering work in technology and
              philanthropy, John has transformed industries and touched countless
              lives. His commitment to education, innovation, and social
              responsibility has earned him recognition worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond professional achievements, John is a devoted family man, a
              mentor to many, and a believer in the power of human potential. His
              legacy continues to inspire future generations to dream bigger and
              reach higher.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-gold">50+</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-gold">100+</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Awards Received
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-gold">1M+</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Lives Impacted
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
            <div className="relative z-10">
              <svg
                className="w-12 h-12 text-accent mx-auto mb-6 opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground italic">
                "Success is not measured by what you achieve, but by the lives
                you touch and the legacy you leave behind."
              </p>
              <p className="text-lg text-gradient-gold mt-6 font-semibold">
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
