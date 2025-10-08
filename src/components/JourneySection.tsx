import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Award, Briefcase, Heart, GraduationCap, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const milestones = [
  {
    year: "1970",
    decade: "1970s",
    title: "The Beginning",
    description: "Born in a small town with big dreams and endless possibilities ahead.",
    fullDescription: "Born in a small town with big dreams and endless possibilities ahead. From an early age, John showed exceptional curiosity and determination, qualities that would define his extraordinary journey. Growing up in a close-knit community, he learned the values of hard work, integrity, and the importance of giving back.",
    icon: Heart,
    side: "left"
  },
  {
    year: "1988",
    decade: "1980s",
    title: "Academic Excellence",
    description: "Graduated with honors from prestigious university, laying the foundation for future success.",
    fullDescription: "Graduated with honors from prestigious university, laying the foundation for future success. His academic achievements were complemented by leadership roles in student organizations and groundbreaking research projects that caught the attention of industry leaders.",
    icon: GraduationCap,
    side: "right"
  },
  {
    year: "1995",
    decade: "1990s",
    title: "Career Launch",
    description: "Started pioneering work in technology industry, introducing innovative solutions.",
    fullDescription: "Started pioneering work in technology industry, introducing innovative solutions that would transform how businesses operate. His early ventures demonstrated a unique ability to identify emerging trends and develop practical applications that addressed real-world challenges.",
    icon: Briefcase,
    side: "left"
  },
  {
    year: "2005",
    decade: "2000s",
    title: "First Major Recognition",
    description: "Received Industry Leader Award for groundbreaking contributions to technology.",
    fullDescription: "Received Industry Leader Award for groundbreaking contributions to technology. This prestigious recognition marked the beginning of a series of accolades that would cement his reputation as an innovator and thought leader in the field.",
    icon: Trophy,
    side: "right"
  },
  {
    year: "2010",
    decade: "2010s",
    title: "Philanthropic Vision",
    description: "Founded charitable organization impacting thousands of lives through education.",
    fullDescription: "Founded charitable organization impacting thousands of lives through education. This initiative combined his passion for learning with his commitment to social justice, providing opportunities for underprivileged youth to access quality education and mentorship.",
    icon: Heart,
    side: "left"
  },
  {
    year: "2018",
    decade: "2010s",
    title: "Global Recognition",
    description: "Honored with Lifetime Achievement Award for dedication to social causes.",
    fullDescription: "Honored with Lifetime Achievement Award for dedication to social causes. This international recognition celebrated not just professional success, but a lifetime commitment to making the world a better place through sustainable initiatives and community empowerment.",
    icon: Award,
    side: "right"
  },
  {
    year: "2023",
    decade: "2020s",
    title: "Continuing Legacy",
    description: "Still inspiring, still leading, still making a difference every single day.",
    fullDescription: "Still inspiring, still leading, still making a difference every single day. The journey continues with new projects, mentorship programs, and initiatives that ensure the legacy of excellence and compassion will inspire generations to come.",
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
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-gradient-royal"
        >
          The Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto px-4"
        >
          A timeline of remarkable achievements and memorable milestones
        </motion.p>

        <div className="relative" ref={containerRef}>
          {/* Timeline Line */}
          <div className={`absolute ${isMobile ? 'left-6' : 'left-1/2'} top-0 bottom-0 w-0.5 sm:w-1 ${isMobile ? '' : '-ml-0.5'} bg-border`}>
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-accent to-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isLeft = milestone.side === "left";
              const Icon = milestone.icon;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isMobile ? -20 : (isLeft ? -50 : 50) }}
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
                      className="text-center mb-6 sm:mb-8"
                    >
                      <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xl sm:text-2xl md:text-3xl font-bold shadow-lg">
                        {milestone.decade}
                      </span>
                    </motion.div>
                  )}

                  <div className={`grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-6 sm:gap-8 items-center ${isLeft ? "" : "lg:grid-flow-dense"}`}>
                    {/* Content Card */}
                    <div className={`${isMobile ? 'ml-16 sm:ml-20' : (isLeft ? "" : "lg:col-start-2")}`}>
                      <motion.div
                        whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -5 }}
                        className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 group cursor-pointer relative overflow-hidden"
                        onClick={() => toggleExpand(index)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-primary to-accent shrink-0">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                                {milestone.year}
                              </div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {isExpanded ? milestone.fullDescription : milestone.description}
                          </p>
                          
                          <button
                            className="mt-3 sm:mt-4 text-xs sm:text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                            aria-label={isExpanded ? "Show less" : "Read more"}
                          >
                            {isExpanded ? (
                              <>Show Less <ChevronUp className="w-4 h-4" /></>
                            ) : (
                              <>Read More <ChevronDown className="w-4 h-4" /></>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className={`${isMobile ? 'absolute left-6' : 'hidden lg:flex justify-center items-center'}`}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/50 animate-glow-pulse"
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
            className="flex justify-center mt-8 sm:mt-12"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
