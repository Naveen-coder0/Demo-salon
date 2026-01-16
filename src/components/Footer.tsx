import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const footerLinks = [
  {
    title: "Services",
    links: ["Hair Styling", "Beauty & Makeup", "Men's Grooming", "Nail Art"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Press"],
  },
  {
    title: "Support",
    links: ["FAQ", "Contact", "Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />

      <div className="container-luxury relative py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-block text-3xl font-serif font-bold tracking-wider mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient-gold">LUXE</span>
            </motion.a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Experience the pinnacle of luxury grooming. Where artistry meets elegance,
              and every visit is a transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 LUXE Salon. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with passion for beauty & excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
