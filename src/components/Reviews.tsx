import { CheckIcon, QuoteIcon, StarIcon } from "./icons";

const REVIEWS = [
  {
    quote:
      "Rp2.500 tapi rasanya nggak murahan. Es-nya banyak, tehnya kerasa banget. Pas banget buat pulang kuliah.",
    name: "Rani",
    role: "Mahasiswa",
    initials: "RA",
    color: "bg-honey text-forest",
  },
  {
    quote:
      "Thai Tea-nya creamy dan manisnya nggak bikin enek. Habis pulang sekolah pasti sempetin mampir dulu.",
    name: "Bagas",
    role: "Siswa SMA",
    initials: "BA",
    color: "bg-forest text-honey",
  },
  {
    quote:
      "Less sugar-nya juara buat aku yang lagi jaga konsumsi gula. Tetap seger, nggak hambar sama sekali.",
    name: "Dinda",
    role: "Mahasiswa",
    initials: "DI",
    color: "bg-leaf text-cream",
  },
];

export function Reviews() {
  return (
    <section className="relative overflow-hidden border-t border-forest/10 py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-honey" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-tea/70 sm:text-[10px]">
                Kata mereka
              </span>
            </div>
            <h2 className="mt-3 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold uppercase leading-[1] tracking-[-0.045em] text-forest">
              Sudah coba? Giliranmu.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-medium text-forest/50">
            <span className="flex gap-0.5 text-honey">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-3.5 w-3.5" />
              ))}
            </span>
            Segar dan ramah kantong, katanya.
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <figure
              key={review.name}
              className={`relative flex flex-col rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                index === 0
                  ? "border-honey/60 bg-honey/20"
                  : index === 1
                    ? "border-forest/10 bg-white/60"
                    : "border-forest/10 bg-mint"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-honey">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <QuoteIcon className="h-6 w-6 text-forest/15" />
              </div>
              <blockquote className="mt-4 flex-1 text-pretty text-[12px] leading-[1.8] text-forest/70 sm:text-[13px]">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-forest/10 pt-4">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full text-[10px] font-bold ${review.color}`}
                >
                  {review.initials}
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1 text-[12px] font-bold text-forest">
                    {review.name}
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-leaf text-cream">
                      <CheckIcon className="h-2.5 w-2.5" />
                    </span>
                  </p>
                  <p className="text-[9.5px] text-forest/45">{review.role}</p>
                </div>
                <span className="ml-auto text-[8px] font-medium uppercase tracking-[0.08em] text-forest/30">
                  Pelanggan
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
