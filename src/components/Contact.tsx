import { Logo } from "./Logo";
import { WA_DISPLAY, formatRupiah, PRODUCTS, waLink } from "../lib/site";
import {
  ArrowUpRight,
  CheckIcon,
  CupIcon,
  LeafIcon,
  PhoneIcon,
  SparkleIcon,
  WalletIcon,
  WhatsAppIcon,
} from "./icons";

const FOOTER_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Cara Pesan", href: "#cara-pesan" },
  { label: "Promo", href: "#promo" },
  { label: "Kontak", href: "#kontak" },
];

export function Contact() {
  return (
    <section id="kontak" className="px-3 pb-4 pt-10 sm:px-4 sm:pb-6 sm:pt-14">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[30px] bg-forest px-5 py-9 sm:rounded-[40px] sm:px-10 sm:py-12 lg:px-14">
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-leaf/40 blur-[90px]" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-honey/15 blur-[80px]" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 right-1/4 h-24 w-24 rounded-full border border-cream/10"
        />

        <div className="relative grid items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/[0.06] py-1.5 pl-1.5 pr-4">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-honey text-forest">
                <SparkleIcon className="h-3 w-3" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/75">
                Info pemesanan
              </span>
            </div>

            <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] text-cream">
              Yuk, pesan
              <br />
              <span className="text-honey">sekarang!</span>
            </h2>
            <p className="mt-4 max-w-md text-pretty text-[12.5px] leading-[1.8] text-cream/60 sm:text-[13.5px]">
              Pilih minumanmu lewat menu, isi keranjang, lalu kirim pesanan ke WhatsApp. Mau
              tanya-tanya dulu juga boleh—kami bantu dari pertanyaan sampai pesanan siap.
            </p>

            <div className="mt-6 inline-flex flex-col">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/40">
                WhatsApp
              </span>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 flex items-center gap-3 text-[24px] font-extrabold leading-none tracking-[-0.03em] text-cream transition-colors hover:text-honey sm:text-[30px]"
              >
                {WA_DISPLAY}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/10 text-honey transition-all group-hover:rotate-45 group-hover:bg-honey group-hover:text-forest">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-honey px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-forest transition-all hover:-translate-y-0.5 hover:bg-honey-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat via WhatsApp
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-cream/80 transition-colors hover:border-cream/40 hover:bg-white/[0.06] hover:text-cream"
              >
                Balik ke menu
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-cream/10 pt-5">
              {[
                { icon: WalletIcon, label: "Mulai Rp2.500" },
                { icon: LeafIcon, label: "100% gula asli" },
                { icon: CupIcon, label: "Pesanan custom" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-[9.5px] font-medium text-cream/50"
                >
                  <Icon className="h-3.5 w-3.5 text-honey" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[390px] rotate-[-1.5deg] sm:max-w-[420px] lg:ml-auto lg:mr-0">
            <div className="absolute inset-x-3 -bottom-3 top-3 rotate-[2.5deg] rounded-[22px] border border-cream/15" />
            <div className="relative overflow-hidden rounded-[22px] bg-cream text-forest shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
              <div className="flex items-start justify-between border-b border-dashed border-forest/20 p-5 pb-4">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-tea/60">
                    Order ticket
                  </p>
                  <p className="mt-1.5 text-[18px] font-extrabold leading-none tracking-[-0.04em]">
                    ES TEH SOLO<span className="text-honey">.</span>
                  </p>
                </div>
                <span className="rounded-full bg-honey/30 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-tea">
                  No. 001
                </span>
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-3.5 p-5 text-[10px]">
                {[
                  ["WhatsApp", WA_DISPLAY],
                  ["Nama usaha", "Es Teh Solo"],
                  ["Cocok buat", "Pelajar, mahasiswa & pecinta teh"],
                  ["Harga mulai", formatRupiah(PRODUCTS[2].price)],
                  ["Pemesanan", "Langsung via WhatsApp"],
                ].map(([label, value]) => (
                  <div key={label} className="contents">
                    <span className="self-start pt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-tea/55">
                      {label}
                    </span>
                    <span className="text-right text-[10.5px] font-semibold leading-snug text-forest/80">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative border-t border-dashed border-forest/20 p-5 pt-4">
                <span className="absolute -left-2.5 -top-2.5 h-5 w-5 rounded-full bg-forest" />
                <span className="absolute -right-2.5 -top-2.5 h-5 w-5 rounded-full bg-forest" />
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-tea/55">
                      Tagline
                    </p>
                    <p className="mt-1 max-w-[190px] text-[11px] font-semibold leading-snug text-forest/70">
                      Dari pucuk daun teh sampai pucuk sedotan.
                    </p>
                  </div>
                  <div className="flex h-8 items-end gap-[2px]" aria-hidden="true">
                    {[2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4].map((width, index) => (
                      <span
                        key={index}
                        className="w-[2px] rounded-full bg-forest/45"
                        style={{ height: `${8 + width * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-forest px-3 py-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-honey text-forest">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <p className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-cream/75">
                    Segar · Hemat · Nikmat
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-5 grid h-14 w-14 rotate-12 place-items-center rounded-full border-2 border-forest bg-honey text-forest shadow-lg sm:-right-4 sm:-top-6 sm:h-16 sm:w-16">
              <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#092c1c] pb-28 pt-12 text-cream sm:pt-16 lg:pb-10">
      <div className="dot-grid absolute inset-0 opacity-20" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-1/2 w-full -translate-x-1/2 select-none whitespace-nowrap text-center text-[25vw] font-extrabold uppercase leading-none tracking-[-0.08em] text-cream/[0.025] sm:-bottom-14 sm:text-[21vw]"
      >
        Es Teh Solo
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-9 border-b border-cream/10 pb-10 md:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-5 text-[12px] leading-[1.8] text-cream/50">
              Minuman teh segar dengan 100% gula asli. Dibuat buat nemenin aktivitas dan
              menyegarkan harimu—tanpa bikin kantong bolong.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/10 px-3 py-1.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-cream/45">
              <SparkleIcon className="h-3 w-3 text-honey" />
              Segar · Hemat · Nikmat
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-honey">
              Jelajahi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[11.5px] text-cream/55 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-honey">
              Menu
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href="#menu"
                    className="group flex items-baseline justify-between gap-3 text-[11.5px] text-cream/55 transition-colors hover:text-cream"
                  >
                    <span>{product.name}</span>
                    <span className="text-[9.5px] text-cream/30 group-hover:text-honey">
                      {formatRupiah(product.price)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-honey">
              Kontak
            </h3>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex items-center gap-2.5 text-[13px] font-semibold text-cream transition-colors hover:text-honey"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/10 text-honey transition-colors group-hover:bg-honey group-hover:text-forest">
                <PhoneIcon className="h-3.5 w-3.5" />
              </span>
              {WA_DISPLAY}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-honey px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.06em] text-forest transition-all hover:-translate-y-0.5 hover:bg-honey-light"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Pesan via WhatsApp
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="mt-4 max-w-[180px] text-[10px] leading-relaxed text-cream/35">
              Nama usaha: Es Teh Solo. Pemesanan dibalas melalui WhatsApp.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-3 pt-5 text-[9.5px] text-cream/35 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Es Teh Solo. Dibuat segar di Solo.</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-honey" />
            Uang jajan aman, rasa tetap juara.
          </p>
        </div>
      </div>
    </footer>
  );
}
