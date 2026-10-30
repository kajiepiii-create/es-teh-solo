import { useEffect, useRef, useState } from "react";
import { formatRupiah, waLink } from "../lib/site";
import { ArrowRight, BagIcon, WhatsAppIcon } from "./icons";
import { cn } from "../utils/cn";

type MobileBarProps = {
  cartCount: number;
  total: number;
  onOrder: () => void;
};

export function MobileBar({ cartCount, total, onOrder }: MobileBarProps) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (cartCount > 0) setHidden(false);
  }, [cartCount]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 140) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-forest/15 bg-cream/95 px-4 pt-3 backdrop-blur-xl transition-transform duration-300 lg:hidden",
        hidden && "translate-y-full"
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg items-center gap-2.5">
        <a
          href="#menu"
          className="flex shrink-0 flex-col justify-center rounded-xl px-1 py-0.5"
        >
          <span className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-forest/40">
            <BagIcon className="h-3 w-3" />
            {cartCount > 0 ? "Keranjang" : "Menu"}
          </span>
          <span className="mt-0.5 text-[12px] font-extrabold leading-none text-forest">
            {cartCount > 0 ? formatRupiah(total) : "Mulai Rp2.500"}
          </span>
        </a>

        <button
          type="button"
          onClick={onOrder}
          className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-[11px] font-bold uppercase tracking-[0.06em] text-cream transition-colors active:bg-leaf"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 text-honey" />
          {cartCount > 0 ? `Pesan ${cartCount} item` : "Pesan sekarang"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-20 hidden items-center gap-0 rounded-full border border-cream/15 bg-forest/90 p-3 text-cream shadow-[0_16px_40px_-12px_rgba(14,58,38,0.6)] backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-leaf lg:flex"
      aria-label="Chat Es Teh Solo lewat WhatsApp"
    >
      <span className="grid h-6 w-6 place-items-center">
        <WhatsAppIcon className="h-5 w-5 text-honey" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-semibold transition-all duration-300 group-hover:max-w-32 group-hover:pl-2">
        Chat kami
      </span>
      <span className="absolute -right-1 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-honey opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-honey ring-2 ring-forest" />
      </span>
    </a>
  );
}
