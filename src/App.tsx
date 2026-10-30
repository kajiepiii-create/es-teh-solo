import { useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { MenuSection } from "./components/Menu";
import { Why } from "./components/Why";
import { Reviews } from "./components/Reviews";
import { Promo } from "./components/Promo";
import { Contact, Footer } from "./components/Contact";
import { OrderDrawer } from "./components/OrderDrawer";
import { MobileBar, WhatsAppFloat } from "./components/MobileBar";
import { PRODUCTS, formatRupiah, productById } from "./lib/site";
import { ArrowUpRight, CheckIcon } from "./components/icons";
import { cn } from "./utils/cn";

type ToastState = {
  id: number;
  name: string;
};

export default function App() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const cart = useMemo(() => {
    const count = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
    const total = PRODUCTS.reduce(
      (sum, product) => sum + product.price * (quantities[product.id] ?? 0),
      0
    );
    return { count, total };
  }, [quantities]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addItem = (id: string) => {
    const product = productById(id);
    if (!product) return;

    setQuantities((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
    setToast({ id: Date.now(), name: product.name });
  };

  const incrementItem = (id: string) => {
    setQuantities((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
  };

  const decrementItem = (id: string) => {
    setQuantities((current) => {
      const nextQuantity = (current[id] ?? 0) - 1;
      if (nextQuantity <= 0) {
        const next = { ...current };
        delete next[id];
        return next;
      }
      return { ...current, [id]: nextQuantity };
    });
  };

  const openOrder = () => setDrawerOpen(true);

  return (
    <div className="min-h-screen overflow-x-clip bg-cream">
      <Header cartCount={cart.count} onOrder={openOrder} />

      <main>
        <Hero onOrder={openOrder} />
        <Ticker />
        <MenuSection
          quantities={quantities}
          onAdd={addItem}
          onInc={incrementItem}
          onDec={decrementItem}
        />
        <Why onOrder={openOrder} />
        <Reviews />
        <Promo onOrder={openOrder} />
        <Contact />
      </main>

      <Footer />

      <OrderDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        quantities={quantities}
        onAdd={addItem}
        onInc={incrementItem}
        onDec={decrementItem}
        onClear={() => setQuantities({})}
      />

      <MobileBar cartCount={cart.count} total={cart.total} onOrder={openOrder} />
      <WhatsAppFloat />

      <div
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed bottom-[92px] left-1/2 z-40 w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 transition-all duration-300 lg:bottom-6",
          toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        {toast && (
          <div className="pointer-events-auto flex items-center gap-2.5 rounded-2xl border border-cream/15 bg-forest px-3 py-2.5 text-cream shadow-[0_18px_40px_-16px_rgba(14,58,38,0.65)]">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf-light/20 text-leaf-light">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <p className="min-w-0 flex-1 truncate text-[10.5px] font-medium">
              <span className="font-bold text-honey">{toast.name}</span> masuk keranjang
            </p>
            <button
              type="button"
              onClick={() => {
                setToast(null);
                openOrder();
              }}
              className="flex shrink-0 items-center gap-1 rounded-full bg-honey px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.04em] text-forest transition-colors hover:bg-honey-light"
            >
              Lihat
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>

      {cart.count > 0 && (
        <span className="sr-only" aria-live="polite">
          {cart.count} item di keranjang, total {formatRupiah(cart.total)}
        </span>
      )}
    </div>
  );
}
