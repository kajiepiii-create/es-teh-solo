import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import {
  ArrowUpRight,
  BagIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  SparkleIcon,
} from "./icons";
import { WA_DISPLAY } from "../lib/site";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "Promo", href: "#promo" },
];

type HeaderProps = {
  cartCount: number;
  onOrder: () => void;
};

export function Header({ cartCount, onOrder }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className="bg-forest text-cream/80">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[9px] font-medium uppercase tracking-[0.16em] sm:px-8 sm:text-[10px]">
          <p className="flex min-w-0 items-center gap-2">
            <SparkleIcon className="h-3 w-3 shrink-0 text-honey" />
            <span className="truncate">Dari pucuk daun teh sampai pucuk sedotan</span>
          </p>
          <a
            href="#kontak"
            className="flex shrink-0 items-center gap-2 transition-colors hover:text-honey"
          >
            <PhoneIcon className="h-3 w-3" />
            <span className="hidden sm:inline">Pesan langsung</span>
            <span className="tracking-[0.08em] text-honey">{WA_DISPLAY}</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:h-[82px] sm:px-8">
          <Logo className="shrink-0" />

          <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2.5 text-[13px] font-medium text-forest/70 transition-colors hover:bg-forest/[0.055] hover:text-forest"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-honey transition-transform group-hover:scale-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOrder}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white/40 text-forest transition-all hover:-translate-y-0.5 hover:border-forest/30 hover:bg-white"
              aria-label={`Buka keranjang, ${cartCount} item`}
            >
              <BagIcon className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 grid h-[19px] min-w-[19px] place-items-center rounded-full bg-honey px-1 text-[10px] font-bold text-forest ring-2 ring-cream">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOrder}
              className="group hidden items-center gap-2 rounded-full bg-forest py-2.5 pl-5 pr-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-cream transition-all hover:-translate-y-0.5 hover:bg-leaf sm:flex"
            >
              Pesan Sekarang
              <span className="grid h-7 w-7 place-items-center rounded-full bg-honey text-forest transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white/40 text-forest transition hover:bg-white lg:hidden"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden border-forest/10 bg-cream transition-[max-height,opacity] duration-300 lg:hidden ${
            mobileOpen ? "max-h-[420px] border-t opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Navigasi seluler" className="mx-auto w-full max-w-7xl px-5 py-5 sm:px-8">
            <div className="flex flex-col divide-y divide-forest/10">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-forest"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] font-medium tracking-widest text-tea/55">
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-forest/40" />
                </a>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
              <button
                type="button"
                onClick={() => {
                  closeMobile();
                  onOrder();
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide text-cream"
              >
                <BagIcon className="h-4 w-4 text-honey" />
                Pesan Sekarang {cartCount > 0 && `· ${cartCount}`}
              </button>
              <a
                href="#kontak"
                onClick={closeMobile}
                className="grid place-items-center rounded-full border border-forest/20 px-4 text-forest"
                aria-label="Lihat informasi kontak"
              >
                <PhoneIcon className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
