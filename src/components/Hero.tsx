import {
  ArrowDown,
  ArrowUpRight,
  CupIcon,
  LeafIcon,
  SparkleIcon,
  StarIcon,
  WalletIcon,
  WhatsAppIcon,
} from "./icons";

type HeroProps = {
  onOrder: () => void;
};

export function Hero({ onOrder }: HeroProps) {
  return (
    <section id="beranda" className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[26px] bg-forest sm:rounded-[40px]">
        <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-leaf/35 blur-[100px]" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-honey/10 blur-[90px]" />
        <div className="dot-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_right,rgba(0,0,0,0.75),transparent_70%)]" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-14 right-[-2rem] select-none text-[13rem] font-extrabold leading-none tracking-[-0.08em] text-cream/[0.035] sm:text-[22rem]"
        >
          TEH
        </span>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-11 px-5 pb-11 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-8 lg:px-12 lg:pb-[3.25rem] lg:pt-[3rem]">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-honey text-forest">
                <SparkleIcon className="h-3 w-3" />
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/85 sm:text-[10px]">
                Teh kekinian dari Solo
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.25rem,10.4vw,3.9rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] text-cream sm:mt-7 lg:max-w-[11ch]">
              <span className="block">
                <span className="inline-block">Segarkan</span>{" "}
                <span className="inline-block text-honey">Harimu,</span>
              </span>
              <span className="block">Tanpa Bikin</span>
              <span className="block">
                Kantong{" "}
                <span className="relative inline-block text-honey">
                  Bolong!
                  <svg
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-honey/70 sm:-bottom-2 sm:h-3"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5C52 2.5 144 2 197 7.5"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[33rem] text-pretty text-[13px] leading-[1.8] text-cream/70 sm:mt-7 sm:text-[15px] lg:text-base">
              Nikmati kesegaran Es Teh Solo dengan rasa teh yang nikmat dan{" "}
              <strong className="font-semibold text-cream">100% gula asli</strong>. Dibuat buat
              nemenin aktivitas dan menyegarkan harimu, mulai dari harga uang jajan.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onOrder}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-honey px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.1em] text-forest shadow-[0_14px_30px_-12px_rgba(233,185,75,0.7)] transition-all hover:-translate-y-0.5 hover:bg-honey-light hover:shadow-[0_18px_34px_-12px_rgba(233,185,75,0.85)] sm:text-[13px]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Pesan Sekarang
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/20 bg-white/[0.035] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-cream backdrop-blur-sm transition-all hover:border-cream/40 hover:bg-white/10 sm:text-[13px]"
              >
                Lihat Menu
                <ArrowDown className="h-4 w-4 text-honey transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            <div className="mt-7 grid max-w-sm grid-cols-3 gap-2 border-t border-cream/10 pt-5 sm:mt-8">
              {[
                { icon: LeafIcon, label: "100% gula asli" },
                { icon: WalletIcon, label: "Mulai Rp2.500" },
                { icon: CupIcon, label: "3 pilihan rasa" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
                  <Icon className="h-4 w-4 shrink-0 text-honey" />
                  <span className="text-[9px] font-medium leading-tight text-cream/65 sm:text-[10px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-rise-delay relative mx-auto w-full max-w-[345px] sm:max-w-[410px] lg:max-w-none">
            <div className="absolute inset-x-4 top-6 bottom-0 rotate-[3deg] rounded-[999px_999px_34px_34px] border border-cream/20" />
            <div className="dot-grid absolute -left-3 top-16 h-24 w-24 rounded-full opacity-60 sm:-left-5" />

            <div className="relative overflow-hidden rounded-[999px_999px_30px_30px] border border-cream/25 bg-forest-soft shadow-[0_35px_80px_-25px_rgba(0,0,0,0.65)]">
              <div className="aspect-[4/4.6] w-full lg:aspect-[4/4.9]">
                <img
                  src="/images/hero-cup.webp"
                  alt="Segelas Es Teh Solo dingin dengan es batu, irisan jeruk nipis, dan daun teh segar"
                  className="h-full w-full object-cover object-[center_45%]"
                  loading="eager"
                  fetchPriority="high"
                  width="768"
                  height="1152"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rotate-[-2deg] rounded-2xl border border-white/60 bg-cream px-4 py-3 shadow-xl sm:bottom-5 sm:left-5">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-tea/80">
                  Mulai dari
                </p>
                <p className="mt-0.5 flex items-baseline gap-1 text-[23px] font-extrabold leading-none tracking-[-0.04em] text-forest sm:text-[26px]">
                  Rp2.500
                  <span className="text-[9px] font-medium tracking-normal text-forest/45">
                    /cup
                  </span>
                </p>
              </div>

              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/25 bg-forest/40 px-3 py-1.5 backdrop-blur-md sm:right-5 sm:top-5">
                <StarIcon className="h-3 w-3 text-honey" />
                <span className="text-[9px] font-semibold text-cream">Segar tiap seruput</span>
              </div>
            </div>

            <div className="absolute -right-2 -top-4 grid h-[84px] w-[84px] place-items-center rounded-full border-[3px] border-forest bg-honey text-forest shadow-xl sm:-right-5 sm:-top-5 sm:h-[100px] sm:w-[100px]">
              <div className="absolute inset-[7px] rounded-full border border-dashed border-forest/25" />
              <div className="flex flex-col items-center gap-0.5">
                <StarIcon className="h-3 w-3 fill-forest" />
                <span className="text-[15px] font-extrabold leading-none tracking-[-0.04em] sm:text-[17px]">
                  100%
                </span>
                <span className="text-[6.5px] font-bold uppercase leading-none tracking-[0.12em] sm:text-[7px]">
                  gula asli
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-1 hidden rotate-[4deg] items-center gap-2 rounded-xl border border-cream/20 bg-white/[0.08] px-3 py-2 backdrop-blur-md sm:flex lg:-right-3">
              <span className="h-2 w-2 rounded-full bg-leaf-light shadow-[0_0_0_4px_rgba(140,196,122,0.15)]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-cream/85">
                Dibuat fresh
              </span>
            </div>

            <LeafIcon className="absolute -left-4 bottom-24 h-9 w-9 -rotate-12 text-leaf-light/70 animate-float sm:-left-6 sm:h-11 sm:w-11" />
            <SparkleIcon className="absolute -right-2 bottom-32 h-5 w-5 text-honey animate-float-slow sm:bottom-36 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
