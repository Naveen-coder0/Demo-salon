import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Stylists",
    description: "Our award-winning team brings decades of combined experience and passion.",
  },
  {
    icon: Clock,
    title: "Premium Products",
    description: "We use only the finest luxury brands for exceptional, lasting results.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Every service is tailored to your unique style and preferences.",
  },
  {
    icon: Heart,
    title: "Relaxing Ambiance",
    description: "Step into a sanctuary designed for your ultimate comfort and relaxation.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%_/_0.03)_0%,_transparent_70%)] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(15_50%_60%_/_0.03)_0%,_transparent_70%)]" />

      <div className="container-luxury relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs tracking-widest uppercase mb-6"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Where </span>
              <span className="text-gradient-gold italic">Luxury</span>
              <span className="text-foreground"> Meets Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              At LUXE Salon, we believe that exceptional beauty services should be an
              experience, not just an appointment. Our sanctuary of style combines
              cutting-edge techniques with timeless elegance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-8"
            >
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-gradient-gold">15+</span>
                <span className="text-muted-foreground text-sm">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-gradient-gold">50K+</span>
                <span className="text-muted-foreground text-sm">Happy Clients</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-gradient-gold">25+</span>
                <span className="text-muted-foreground text-sm">Expert Stylists</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-6 group hover:bg-muted/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
