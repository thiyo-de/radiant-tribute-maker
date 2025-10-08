import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Share2, MapPin, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/hooks/use-media-query";
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
  organization?: string;
  location?: string;
  date?: string;
}

const awards: Award[] = [
  {
    id: 1,
    image: award1,
    title: "Excellence Trophy",
    year: "2023",
    description: "Prestigious award for outstanding contributions to industry innovation.",
    fullDescription: "The Excellence Trophy is the highest honor in the technology industry, awarded to individuals who have demonstrated exceptional leadership, innovation, and impact. This recognition celebrates decades of groundbreaking work that has transformed how we approach modern challenges.",
    organization: "Global Tech Alliance",
    location: "San Francisco, CA",
    date: "March 15, 2023"
  },
  {
    id: 2,
    image: award2,
    title: "Certificate of Excellence",
    year: "2022",
    description: "Recognition for exceptional leadership and social impact.",
    fullDescription: "This Certificate of Excellence honors sustained commitment to social causes and community development. Awarded by the International Leadership Foundation for making significant contributions to education and empowering underprivileged communities worldwide.",
    organization: "International Leadership Foundation",
    location: "London, UK",
    date: "September 22, 2022"
  },
  {
    id: 3,
    image: award3,
    title: "Gold Medal of Honor",
    year: "2021",
    description: "Awarded for lifetime achievements in technology and philanthropy.",
    fullDescription: "The Gold Medal of Honor is bestowed upon visionaries who have dedicated their lives to advancing technology while maintaining a strong commitment to humanitarian causes. This rare distinction recognizes both professional excellence and personal integrity.",
    organization: "World Innovation Council",
    location: "Tokyo, Japan",
    date: "November 8, 2021"
  },
  {
    id: 4,
    image: award4,
    title: "Innovation Award",
    year: "2020",
    description: "Recognized for pioneering breakthrough solutions in the industry.",
    fullDescription: "The Innovation Award celebrates those who push boundaries and challenge conventional thinking. This accolade recognizes revolutionary contributions to technological advancement and the development of solutions that have improved lives across the globe.",
    organization: "Tech Innovators Association",
    location: "Berlin, Germany",
    date: "June 10, 2020"
  },
  {
    id: 5,
    image: award5,
    title: "Lifetime Achievement",
    year: "2019",
    description: "Honoring 50 years of dedication, excellence, and impact.",
    fullDescription: "The Lifetime Achievement Award is the pinnacle of recognition, celebrating half a century of unwavering dedication to excellence. This honor acknowledges not only professional accomplishments but also the profound and lasting impact on society, culture, and future generations.",
    organization: "International Achievement Society",
    location: "New York, NY",
    date: "December 5, 2019"
  },
  {
    id: 6,
    image: award6,
    title: "Star of Excellence",
    year: "2018",
    description: "Distinguished recognition for extraordinary leadership qualities.",
    fullDescription: "The Star of Excellence represents the zenith of leadership recognition. This award honors individuals who have consistently demonstrated exceptional vision, integrity, and the ability to inspire others to achieve greatness while maintaining the highest ethical standards.",
    organization: "Global Leadership Institute",
    location: "Singapore",
    date: "April 18, 2018"
  }
];

const AwardsSection = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const { toast } = useToast();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const handleShare = (award: Award) => {
    if (navigator.share) {
      navigator.share({
        title: award.title,
        text: award.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${award.title} - ${award.description}`);
      toast({
        title: "Copied to clipboard",
        description: "Award details have been copied to your clipboard.",
      });
    }
  };

  return (
    <section id="awards" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-gradient-royal"
        >
          Awards & Recognition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto px-4"
        >
          A showcase of excellence and distinguished achievements
        </motion.p>

        {/* Awards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: isMobile ? 0 : -10, scale: isMobile ? 1 : 1.02 }}
              className="cursor-pointer group"
              onClick={() => setSelectedAward(award)}
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs sm:text-sm font-semibold">
                    {award.year}
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {award.description}
                  </p>
                  <div className="text-accent font-semibold text-xs sm:text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                    View Details →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Award Modal */}
        <Dialog open={!!selectedAward} onOpenChange={() => setSelectedAward(null)}>
          <DialogContent className={`${isMobile ? 'max-w-[95vw] h-[90vh]' : 'max-w-3xl max-h-[90vh]'} overflow-y-auto`}>
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-gradient-royal pr-8">
                {selectedAward?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedAward && (
              <div className="space-y-4 sm:space-y-6">
                <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent text-accent-foreground rounded-full font-semibold text-base sm:text-lg">
                    {selectedAward.year}
                  </div>
                </div>

                {/* Award Details */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedAward.organization && (
                    <div className="flex items-start gap-2 sm:gap-3 glass-card rounded-lg p-3 sm:p-4">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-muted-foreground">Organization</div>
                        <div className="text-sm sm:text-base font-semibold text-foreground">
                          {selectedAward.organization}
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedAward.location && (
                    <div className="flex items-start gap-2 sm:gap-3 glass-card rounded-lg p-3 sm:p-4">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-muted-foreground">Location</div>
                        <div className="text-sm sm:text-base font-semibold text-foreground">
                          {selectedAward.location}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                      Brief Description
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {selectedAward.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                      Full Details
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {selectedAward.fullDescription}
                    </p>
                  </div>

                  {selectedAward.date && (
                    <div className="pt-3 sm:pt-4 border-t border-border">
                      <div className="glass-card rounded-xl p-3 sm:p-4 bg-primary/5">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Awarded on:</span> {selectedAward.date}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(selectedAward)}
                    className="w-full glass-card rounded-xl p-3 sm:p-4 hover:bg-accent/10 transition-colors flex items-center justify-center gap-2 text-primary font-semibold text-sm sm:text-base"
                    aria-label="Share award details"
                  >
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    Share this achievement
                  </button>
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
