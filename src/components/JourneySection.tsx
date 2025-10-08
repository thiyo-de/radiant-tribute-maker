import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, Briefcase, Heart, GraduationCap, Trophy } from "lucide-react";

const milestones = [
  {
    year: "1970",
    decade: "1970s",
    title: "The Beginning",
    description: "Born in a small town with big dreams and endless possibilities ahead.",
    icon: Heart,
    side: "left"
  },
  {
    year: "1988",
    decade: "1980s",
    title: "Academic Excellence",
    description: "Graduated with honors from prestigious university, laying the foundation for future success.",
    icon: GraduationCap,
    side: "right"
  },
  {
    year: "1995",
    decade: "1990s",
    title: "Career Launch",
    description: "Started pioneering work in technology industry, introducing innovative solutions.",
    icon: Briefcase,
    side: "left"
  },
  {
    year: "2005",
    decade: "2000s",
    title: "First Major Recognition",
    description: "Received Industry Leader Award for groundbreaking contributions to technology.",
    icon: Trophy,
    side: "right"
  },
  {
    year: "2010",
    decade: "2010s",
    title: "Philanthropic Vision",
    description: "Founded charitable organization impacting thousands of lives through education.",
    icon: Heart,
    side: "left"
  },
  {
    year: "2018",
    decade: "2010s",
    title: "Global Recognition",
    description: "Honored with Lifetime Achievement Award for dedication to social causes.",
    icon: Award,
    side: "right"
  },
  {
    year: "2023",
    decade: "2020s",
    title: "Continuing Legacy",
    description: "Still inspiring, still leading, still making a difference every single day.",
    icon: Trophy,
    side: "left"
  }
];

const JourneySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-gradient-royal"
        >
          The Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-center text-muted-foreground mb-20 max-w-2xl mx-auto"
        >
          A timeline of remarkable achievements and memorable milestones
        </motion.p>

        <div className="relative" ref={containerRef}>
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-border hidden lg:block">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-accent to-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const isLeft = milestone.side === "left";
              const Icon = milestone.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Decade Label */}
                  {(index === 0 || milestones[index - 1].decade !== milestone.decade) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="text-center mb-8"
                    >
                      <span className="inline-block text-2xl sm:text-3xl font-bold text-gradient-gold">
                        {milestone.decade}
                      </span>
                    </motion.div>
                  )}

                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${isLeft ? "" : "lg:grid-flow-dense"}`}>
                    {/* Content Card */}
                    <div className={`${isLeft ? "" : "lg:col-start-2"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="glass-card rounded-2xl p-6 sm:p-8 group cursor-pointer relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-accent mb-1">
                                {milestone.year}
                              </div>
                              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:flex justify-center items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/50 animate-glow-pulse"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
              <Calendar className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
