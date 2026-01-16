import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, removeItem, clearCart, totalPrice } = useCart();

  const handleProceed = () => {
    if (items.length === 0) return;

    const servicesList = items
      .map((item) => `• ${item.title} (${item.subtitle}) - ₹${item.price}`)
      .join("\n");

    const message = `Hello! I would like to book the following services:\n\n${servicesList}\n\nTotal: ₹${totalPrice}\n\nPlease confirm availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919467269782?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card/95 backdrop-blur-xl border-l border-primary/20 z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-foreground">Your Services</h2>
                    <p className="text-sm text-muted-foreground">{items.length} items selected</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">No services selected yet</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Browse our services and add them to your cart
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="glass-card p-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-primary">{item.subtitle}</p>
                        <p className="text-lg font-bold text-foreground mt-1">₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-primary/20 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-2xl font-bold text-gradient-gold">₹{totalPrice}</span>
                  </div>
                  <Button
                    onClick={handleProceed}
                    className="w-full h-14 bg-gradient-to-r from-primary to-primary-light text-primary-foreground font-semibold text-lg rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Proceed via WhatsApp
                  </Button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear all services
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
