import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import award3 from "@/assets/award-3.jpg";
import award4 from "@/assets/award-4.jpg";
import award5 from "@/assets/award-5.jpg";
import award6 from "@/assets/award-6.jpg";

interface Award {
  id: number;
  image: string;
  title: string;
  year: string;
  description: string;
  fullDescription: string;
}

const awards: Award[] = [
  {
    id: 1,
    image: award1,
    title: "Excellence Trophy",
    year: "2023",
    description: "Prestigious award for outstanding contributions to industry innovation.",
    fullDescription: "The Excellence Trophy is the highest honor in the technology industry, awarded to individuals who have demonstrated exceptional leadership, innovation, and impact. This recognition celebrates decades of groundbreaking work that has transformed how we approach modern challenges."
  },
  {
    id: 2,
    image: award2,
    title: "Certificate of Excellence",
    year: "2022",
    description: "Recognition for exceptional leadership and social impact.",
    fullDescription: "This Certificate of Excellence honors sustained commitment to social causes and community development. Awarded by the International Leadership Foundation for making significant contributions to education and empowering underprivileged communities worldwide."
  },
  {
    id: 3,
    image: award3,
    title: "Gold Medal of Honor",
    year: "2021",
    description: "Awarded for lifetime achievements in technology and philanthropy.",
    fullDescription: "The Gold Medal of Honor is bestowed upon visionaries who have dedicated their lives to advancing technology while maintaining a strong commitment to humanitarian causes. This rare distinction recognizes both professional excellence and personal integrity."
  },
  {
    id: 4,
    image: award4,
    title: "Innovation Award",
    year: "2020",
    description: "Recognized for pioneering breakthrough solutions in the industry.",
    fullDescription: "The Innovation Award celebrates those who push boundaries and challenge conventional thinking. This accolade recognizes revolutionary contributions to technological advancement and the development of solutions that have improved lives across the globe."
  },
  {
    id: 5,
    image: award5,
    title: "Lifetime Achievement",
    year: "2019",
    description: "Honoring 50 years of dedication, excellence, and impact.",
    fullDescription: "The Lifetime Achievement Award is the pinnacle of recognition, celebrating half a century of unwavering dedication to excellence. This honor acknowledges not only professional accomplishments but also the profound and lasting impact on society, culture, and future generations."
  },
  {
    id: 6,
    image: award6,
    title: "Star of Excellence",
    year: "2018",
    description: "Distinguished recognition for extraordinary leadership qualities.",
    fullDescription: "The Star of Excellence represents the zenith of leadership recognition. This award honors individuals who have consistently demonstrated exceptional vision, integrity, and the ability to inspire others to achieve greatness while maintaining the highest ethical standards."
  }
];

const AwardsSection = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-gradient-royal"
        >
          Awards & Recognition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          A showcase of excellence and distinguished achievements
        </motion.p>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-pointer group"
              onClick={() => setSelectedAward(award)}
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                    {award.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {award.description}
                  </p>
                  <div className="mt-4 text-accent font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                    View Details →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Award Modal */}
        <Dialog open={!!selectedAward} onOpenChange={() => setSelectedAward(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-gradient-royal">
                {selectedAward?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedAward && (
              <div className="space-y-6">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <img
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold text-lg">
                    {selectedAward.year}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Brief Description
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedAward.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Full Details
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedAward.fullDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="glass-card rounded-xl p-4 bg-primary/5">
                      <p className="text-sm text-muted-foreground italic">
                        This award represents not just personal achievement, but the
                        collective effort of teams, mentors, and supporters who made
                        this recognition possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AwardsSection;
