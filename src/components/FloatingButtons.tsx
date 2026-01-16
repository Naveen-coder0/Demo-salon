import CartButton from "@/components/CartButton";

interface FloatingButtonsProps {
  onCartClick: () => void;
}

const FloatingButtons = ({ onCartClick }: FloatingButtonsProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* Cart Button */}
      <CartButton onClick={onCartClick} />

      {/* Call Button */}
      <a
        href="tel:+919988324455"
        aria-label="Call Us"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-gold hover:scale-105 transition-transform"
      >
        📞
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919467269782"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-gold hover:scale-105 transition-transform"
      >
        💬
      </a>

    </div>
  );
};

export default FloatingButtons;
