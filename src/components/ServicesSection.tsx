import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, User, ShoppingBag, Check } from "lucide-react";
import { useCart, ServiceItem } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ServiceFeature {
  name: string;
  price: number;
}

const services = [
  {
    icon: Scissors,
    title: "Hair",
    subtitle: "Styling & Color",
    description:
      "From precision cuts to stunning color transformations. Our master stylists create looks that define your personal brand.",
    features: [
      { name: "Haircuts & Styling", price: 500 },
      { name: "Color & Highlights", price: 1500 },
      { name: "Keratin Treatments", price: 3000 },
      { name: "Hair Extensions", price: 5000 },
    ] as ServiceFeature[],
  },
  {
    icon: Sparkles,
    title: "Beauty",
    subtitle: "Makeup & Skincare",
    description:
      "Enhance your natural beauty with our premium beauty services. Expert techniques using luxury products.",
    features: [
      { name: "Bridal Makeup", price: 8000 },
      { name: "Facials & Skincare", price: 1200 },
      { name: "Lash Extensions", price: 2000 },
      { name: "Nail Art", price: 800 },
    ] as ServiceFeature[],
  },
  {
    icon: User,
    title: "Grooming",
    subtitle: "Men's Excellence",
    description:
      "Refined grooming services for the modern gentleman. Classic techniques with contemporary style.",
    features: [
      { name: "Beard Sculpting", price: 400 },
      { name: "Hot Towel Shaves", price: 300 },
      { name: "Men's Facials", price: 1000 },
      { name: "Hair Styling", price: 600 },
    ] as ServiceFeature[],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;
  const { items, addItem } = useCart();

  const handleAddToCart = (feature: ServiceFeature) => {
    const serviceItem: ServiceItem = {
      id: `${service.title}-${feature.name}`,
      title: feature.name,
      subtitle: service.title,
      price: feature.price,
    };
    
    const exists = items.find((i) => i.id === serviceItem.id);
    if (exists) {
      toast.info("Already added to cart");
      return;
    }
    
    addItem(serviceItem);
    toast.success(`${feature.name} added to cart`);
  };

  const isInCart = (featureName: string) => {
    return items.some((i) => i.id === `${service.title}-${featureName}`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="glass-card p-8 md:p-10 h-full card-elevated">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%_/_0.1)_0%,_transparent_70%)]" />

        {/* Icon */}
        <motion.div
          className="relative w-16 h-16 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Content */}
        <div className="relative">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-1">
            {service.title}
          </h3>
          <p className="text-primary text-sm tracking-wider uppercase mb-4">
            {service.subtitle}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features with Prices */}
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{feature.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-primary">₹{feature.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleAddToCart(feature)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isInCart(feature.name)
                        ? "bg-green-500/20 text-green-500"
                        : "bg-primary/20 text-primary hover:bg-primary/30"
                    }`}
                  >
                    {isInCart(feature.name) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%_/_0.05)_0%,_transparent_70%)]" />

      <div className="container-luxury relative">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs tracking-widest uppercase mb-6"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Exceptional </span>
            <span className="text-gradient-gold italic">Care</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Discover our comprehensive range of premium services designed to enhance
            your natural beauty and elevate your style.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
