import { formatRupiah, PRODUCTS, waLink } from "../lib/site";
import {
  ArrowUpRight,
  CheckIcon,
  PhoneIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./icons";

type PromoProps = {
  onOrder: () => void;
};

export function Promo({ onOrder }: PromoProps) {
  const bundle = PRODUCTS[3];

  return (
    <section id="promo" className="relative overflow-hidden border-y-2 border-forest bg-honey">
      <div className="dot-grid-dark absolute inset-0 opacity-40" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-5 select-none text-[11rem] font-extrabold leading-none tracking-[-0.08em] text-forest/[0.055] sm:text-[19rem]"
      >
        HAUS?
      </span>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-cream/35 px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-forest sm:text-[10px]">
                Promo & info
              </span>
            </div>

            <h2 className="mt-5 text-[clamp(2.35rem,6.6vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-forest">
              Haus?
              <br />
              Es Teh Solo
              <br />
              <span className="my-1 inline-block bg-forest px-2 pb-1 text-honey sm:px-3">
                solusinya!
              </span>
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex rotate-[-1.5deg] items-baseline gap-1.5 rounded-xl border-2 border-forest bg-cream px-4 py-2.5 shadow-[4px_4px_0_0_#0E3A26]">
                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-tea">
                  Mulai
                </span>
                <span className="text-[26px] font-extrabold leading-none tracking-[-0.05em] text-forest sm:text-[30px]">
                  Rp2.500
                </span>
                <span className="text-[10px] font-semibold text-forest/55">saja!</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3 py-2 text-[9px] font-semibold text-forest/75">
                <SparkleIcon className="h-3 w-3" />
                Nggak bikin kantong bolong
              </span>
            </div>

            <p className="mt-5 max-w-lg text-pretty text-[13px] leading-[1.8] text-forest/70 sm:text-sm">
              Nggak perlu nunggu tanggal tua buat minuman yang beneran enak. Pilih menu
              favoritmu, pesan lewat WhatsApp, dan biar kesegarannya yang kerja.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onOrder}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-cream shadow-[5px_5px_0_0_rgba(255,248,232,0.55)] transition-all hover:-translate-y-0.5 hover:bg-forest-soft hover:shadow-[6px_6px_0_0_rgba(255,248,232,0.75)]"
              >
                <WhatsAppIcon className="h-4 w-4 text-honey" />
                Pesan sekarang
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold text-forest/65 underline decoration-forest/25 decoration-1 underline-offset-4 transition-colors hover:text-forest"
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                atau chat ke 0853-3510-3030
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Harga mulai Rp2.500", "100% gula asli", "Bisa buat rame-rame"].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-[9.5px] font-semibold text-forest/65"
                >
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-forest text-honey">
                    <CheckIcon className="h-2.5 w-2.5" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[410px] lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-4 rotate-[-5deg] rounded-[110px_110px_28px_28px] border-2 border-forest/25"
            />
            <div className="relative rotate-[2deg] overflow-hidden rounded-[110px_110px_26px_26px] border-2 border-forest bg-forest p-2.5 shadow-[10px_12px_0_0_rgba(14,58,38,0.16)] transition-transform duration-500 hover:rotate-0">
              <div className="relative overflow-hidden rounded-[100px_100px_18px_18px] bg-[#fff3da]">
                <img
                  src={bundle.image}
                  alt="Paket Nongkrong Es Teh Solo berisi dua es teh dan satu thai tea"
                  loading="lazy"
                  width="1024"
                  height="1024"
                  className="aspect-square w-full object-cover mix-blend-multiply"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/70 to-transparent px-4 pb-4 pt-14">
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-honey">
                    Paling pas buat sharing
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="text-xl font-extrabold leading-none text-cream">Paket Nongkrong</p>
                    <p className="shrink-0 rounded-full bg-honey px-3 py-1.5 text-[11px] font-extrabold text-forest">
                      {formatRupiah(bundle.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-1 -top-4 rotate-[-8deg] rounded-xl bg-cream px-3.5 py-2.5 shadow-lg sm:-left-4">
              <p className="text-[7.5px] font-bold uppercase tracking-[0.16em] text-tea/60">
                2 Es Teh + 1 Thai Tea
              </p>
              <p className="mt-0.5 text-sm font-extrabold text-forest">
                Hemat Rp1.000 <span className="text-honey">✦</span>
              </p>
            </div>

            <div className="absolute -bottom-5 right-2 flex rotate-[-3deg] items-center gap-2 rounded-full border border-forest/20 bg-cream px-3.5 py-2 shadow-md sm:right-4">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-leaf text-cream">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.06em] text-forest/70">
                Harga tetap ramah
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
