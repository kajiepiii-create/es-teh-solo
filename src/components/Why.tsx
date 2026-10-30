import {
  ArrowUpRight,
  CheckIcon,
  CupIcon,
  IceIcon,
  LeafIcon,
  QuoteIcon,
  SparkleIcon,
  WalletIcon,
  WhatsAppIcon,
} from "./icons";

type WhyProps = {
  onOrder: () => void;
};

const FEATURES = [
  {
    icon: LeafIcon,
    title: "100% Gula Asli",
    tag: "Manis yang jujur",
    description:
      "Manisnya datang dari gula asli, bukan sekadar penambah rasa. Tehnya tetap kerasa, segarnya dapat.",
  },
  {
    icon: WalletIcon,
    title: "Harga Ramah Kantong",
    tag: "Mulai Rp2.500",
    description:
      "Uang jajan tetap aman. Mulai dari Rp2.500, kamu sudah bisa dapat segelas es teh yang bikin segar seharian.",
  },
  {
    icon: CupIcon,
    title: "Pilihan Menu Beragam",
    tag: "3 pilihan rasa",
    description:
      "Es Teh yang klasik, Thai Tea yang creamy, atau Less Sugar yang lebih ringan. Ada buat semua selera.",
  },
];

const STEPS = [
  {
    icon: CupIcon,
    title: "Pilih minumanmu",
    description: "Klik Tambah pada menu favorit. Mau sekalian Paket Nongkrong? Bisa banget.",
  },
  {
    icon: WhatsAppIcon,
    title: "Chat WhatsApp",
    description: "Isi nama dan catatan pesananmu, lalu kirim lewat WhatsApp. Gampang, kan?",
  },
  {
    icon: IceIcon,
    title: "Tinggal seruput",
    description: "Tunggu konfirmasi dari kami, lalu nikmati Es Teh Solo yang segar dan dingin.",
  },
];

export function Why({ onOrder }: WhyProps) {
  return (
    <section id="keunggulan" className="relative overflow-hidden bg-mint py-16 sm:py-24">
      <div className="dot-grid-dark absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-20 h-80 w-80 rounded-full border-[28px] border-cream/60"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-cream/70 py-1.5 pl-1.5 pr-4">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-leaf text-cream">
                <LeafIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-forest/70 sm:text-[10px]">
                Kenapa Es Teh Solo?
              </span>
            </div>
            <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.5vw,3.3rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.045em] text-forest">
              Bukan cuma murah.
              <br />
              <span className="text-leaf">Tapi beneran enak.</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-[13px] leading-[1.85] text-forest/60 sm:text-sm lg:pb-1">
            Kami percaya minuman enak nggak harus mahal. Karena itu setiap gelas dibuat
            sederhana: teh yang mantap, gula asli, es yang cukup, dan harga yang tetap
            bersahabat.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rotate-[1.8deg] rounded-[30px] bg-forest/15"
            />
            <div className="relative h-full overflow-hidden rounded-[30px] bg-honey p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[18px] border-cream/25"
              />
              <QuoteIcon className="h-9 w-9 text-forest/20" />
              <p className="relative mt-4 text-[clamp(1.5rem,3vw,2rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.045em] text-forest">
                Dari pucuk daun teh, sampai pucuk sedotan.
              </p>
              <p className="mt-4 max-w-sm text-pretty text-[12px] leading-[1.8] text-forest/65 sm:text-[13px]">
                Minuman simpel yang dibuat serius. Dari pemilihan teh, takaran gula, sampai
                esnya—semua biar rasa segarnya pas di gelasmu.
              </p>

              <div className="relative mt-8 flex items-end gap-4 sm:gap-5">
                <div className="relative shrink-0">
                  <div className="h-[122px] w-[104px] overflow-hidden rounded-[52px_52px_14px_14px] border border-forest/15 bg-[#fff3da] sm:h-[144px] sm:w-[122px]">
                    <img
                      src="/images/menu-es-teh.webp"
                      alt="Es Teh Solo segar dengan es batu"
                      loading="lazy"
                      width="1024"
                      height="1024"
                      className="h-full w-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 grid h-10 w-10 rotate-6 place-items-center rounded-full border-2 border-honey bg-forest text-honey">
                    <SparkleIcon className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex-1 space-y-2 pb-1">
                  {["Uang jajan aman", "Es-nya banyak", "Rasanya nggak pelit"].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-[10px] font-semibold text-forest/75 sm:text-[11px]"
                    >
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-forest/10">
                        <CheckIcon className="h-2.5 w-2.5 text-forest" />
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-forest/15 pt-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-forest/50">
                  Cocok buat
                </p>
                <p className="text-[10px] font-semibold text-forest/75">
                  Anak sekolah · Mahasiswa · Semua yang haus
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-[30px] border border-forest/10 bg-cream p-2 sm:p-3">
            {FEATURES.map(({ icon: Icon, title, tag, description }, index) => (
              <div
                key={title}
                className={`group flex gap-4 rounded-[22px] p-4 transition-colors hover:bg-white/70 sm:gap-5 sm:p-5 ${
                  index > 0 ? "border-t border-forest/10" : ""
                }`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-leaf transition-colors duration-300 group-hover:bg-forest group-hover:text-honey sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <h3 className="text-[16px] font-bold leading-tight tracking-[-0.02em] text-forest sm:text-[17px]">
                      {title}
                    </h3>
                    <span className="rounded-full bg-honey/25 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.06em] text-tea">
                      {tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-pretty text-[11.5px] leading-[1.75] text-forest/55 sm:text-xs">
                    {description}
                  </p>
                </div>
                <span className="hidden self-start pt-0.5 text-[11px] font-semibold tracking-[0.15em] text-forest/20 sm:block">
                  0{index + 1}
                </span>
              </div>
            ))}

            <div className="mx-4 mb-1 mt-2 grid grid-cols-3 divide-x divide-forest/10 rounded-2xl border border-forest/10 bg-white/45 py-3 sm:mx-5">
              {[
                { value: "100%", label: "gula asli" },
                { value: "Rp2.500", label: "harga mulai" },
                { value: "3", label: "pilihan rasa" },
              ].map((stat) => (
                <div key={stat.label} className="px-2 text-center">
                  <p className="text-[15px] font-extrabold leading-none tracking-[-0.03em] text-forest sm:text-[17px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.06em] text-forest/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 px-4 pb-3 pt-4 sm:px-5">
              <p className="text-[9.5px] leading-snug text-forest/40">
                Mau buktiin sendiri?
                <br className="hidden sm:block" /> Pilih menu favoritmu dulu.
              </p>
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.06em] text-forest transition-all hover:border-forest hover:bg-forest hover:text-cream"
              >
                Lihat menu
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div
          id="cara-pesan"
          className="relative mt-14 rounded-[30px] border border-forest/10 bg-cream/80 px-5 py-7 sm:px-8 sm:py-9 lg:mt-16"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-leaf">
                  Cara pesan
                </span>
              </div>
              <h3 className="mt-2 text-[clamp(1.5rem,3.2vw,2.15rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-forest">
                Pesan gak pake ribet.
              </h3>
            </div>
            <p className="max-w-xs text-[11px] leading-relaxed text-forest/50">
              Tiga langkah, nggak sampai satu menit. Serius, segampang itu.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {STEPS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="relative rounded-2xl border border-forest/10 bg-white/60 p-4 sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-honey">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-2xl font-extrabold leading-none tracking-[-0.05em] text-forest/10">
                    0{index + 1}
                  </span>
                </div>
                <h4 className="mt-3.5 text-[13.5px] font-bold tracking-[-0.01em] text-forest">
                  {title}
                </h4>
                <p className="mt-1.5 text-[10.5px] leading-[1.7] text-forest/50">{description}</p>
                {index < STEPS.length - 1 && (
                  <ArrowUpRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 rotate-45 rounded-full bg-mint p-0.5 text-leaf sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="flex items-center gap-2 text-[9.5px] text-forest/40">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Pesanan dibalas lewat WhatsApp
            </p>
            <button
              type="button"
              onClick={onOrder}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-forest px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-cream transition-all hover:-translate-y-0.5 hover:bg-leaf sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4 text-honey" />
              Mulai pesan sekarang
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
