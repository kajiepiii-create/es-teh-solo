import { PRODUCTS, formatRupiah, type Product } from "../lib/site";
import { CheckIcon, CupIcon, MinusIcon, PlusIcon, SparkleIcon } from "./icons";
import { cn } from "../utils/cn";

type QuantityControlProps = {
  product: Product;
  quantity: number;
  onAdd: (id: string) => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  compact?: boolean;
};

function QuantityControl({
  product,
  quantity,
  onAdd,
  onInc,
  onDec,
  compact = false,
}: QuantityControlProps) {
  if (quantity === 0) {
    return (
      <button
        type="button"
        onClick={() => onAdd(product.id)}
        className={cn(
          "group/add inline-flex items-center justify-center gap-2 rounded-full bg-forest font-semibold text-cream transition-all hover:bg-leaf active:scale-[0.98]",
          compact
            ? "px-4 py-2.5 text-[11px]"
            : "w-full px-4 py-3 text-[12px] uppercase tracking-[0.06em] sm:w-auto"
        )}
        aria-label={`Tambah ${product.name} ke pesanan`}
      >
        <PlusIcon className="h-3.5 w-3.5 text-honey transition-transform group-hover/add:rotate-90" />
        Tambah
      </button>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-1 rounded-full bg-forest p-1 text-cream",
        compact ? "" : "w-full sm:w-auto"
      )}
    >
      <button
        type="button"
        onClick={() => onDec(product.id)}
        className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
        aria-label={`Kurangi ${product.name}`}
      >
        <MinusIcon className="h-3.5 w-3.5" />
      </button>
      <span className="min-w-7 text-center text-[12px] font-bold tabular-nums text-honey">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onInc(product.id)}
        className="grid h-8 w-8 place-items-center rounded-full bg-honey text-forest transition hover:bg-honey-light"
        aria-label={`Tambah satu ${product.name}`}
      >
        <PlusIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

type MenuSectionProps = {
  quantities: Record<string, number>;
  onAdd: (id: string) => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
};

export function MenuSection({ quantities, onAdd, onInc, onDec }: MenuSectionProps) {
  const items = PRODUCTS.slice(0, 3);
  const bundle = PRODUCTS[3];
  const bundleQty = quantities[bundle.id] ?? 0;

  return (
    <section id="menu" className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-36 h-72 w-72 rounded-full border border-leaf/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full bg-honey/15 blur-2xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/50 py-1.5 pl-1.5 pr-4">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-honey">
                <CupIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-forest/70 sm:text-[10px]">
                Menu pilihan
              </span>
            </div>
            <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.6vw,3.35rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.045em] text-forest">
              Pilihan seger buat{" "}
              <span className="relative inline-block text-leaf">
                kantong
                <svg
                  viewBox="0 0 120 9"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2 w-full text-honey"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6.5C36 2 82 1.8 118 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              yang senang.
            </h2>
          </div>

          <div className="max-w-sm lg:pb-1">
            <p className="text-pretty text-[13px] leading-[1.8] text-forest/60 sm:text-sm">
              Dari yang klasik sampai yang creamy, semua diseduh dengan gula asli. Pilih
              favoritmu, atur jumlahnya, lalu pesan lewat WhatsApp.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Mulai Rp2.500", "3 pilihan rasa", "1 paket hemat"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-forest/10 bg-white/60 px-3 py-1.5 text-[9px] font-semibold text-forest/70 sm:text-[10px]"
                >
                  <CheckIcon className="h-3 w-3 text-leaf" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-4 sm:gap-5 md:grid-cols-3">
          {items.map((product, index) => {
            const quantity = quantities[product.id] ?? 0;

            return (
              <article
                key={product.id}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[26px] border bg-[#fffcf3] p-3 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(14,58,38,0.35)]",
                  product.featured
                    ? "border-honey/70 shadow-[0_16px_36px_-28px_rgba(14,58,38,0.45)]"
                    : "border-forest/10"
                )}
              >
                <div className="relative overflow-hidden rounded-[19px] bg-[#fff3da]">
                  <span
                    className={cn(
                      "absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.12em] shadow-sm",
                      product.featured
                        ? "bg-honey text-forest"
                        : "border border-forest/10 bg-cream/90 text-forest/80 backdrop-blur-sm"
                    )}
                  >
                    {product.featured && <SparkleIcon className="h-2.5 w-2.5" />}
                    {product.tag}
                  </span>
                  <span className="absolute right-3 top-3 z-10 font-medium text-[10px] tracking-[0.18em] text-tea/45">
                    0{index + 1}
                  </span>
                  <img
                    src={product.image}
                    alt={`${product.name} Es Teh Solo`}
                    loading="lazy"
                    width="1024"
                    height="1024"
                    className="aspect-square w-full object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/75 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-forest/70 backdrop-blur-sm">
                    {product.short}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[25px] font-extrabold leading-none tracking-[-0.045em] text-forest">
                      {product.name}
                    </h3>
                    <div className="shrink-0 text-right">
                      <p className="text-[22px] font-extrabold leading-none tracking-[-0.04em] text-leaf">
                        {formatRupiah(product.price)}
                      </p>
                      <p className="mt-1 text-[9px] font-medium text-forest/40">per cup</p>
                    </div>
                  </div>

                  <p className="mt-3 min-h-[3.25rem] text-pretty text-[11.5px] leading-[1.7] text-forest/55 sm:text-xs">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-dashed border-forest/15 pt-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-forest/40">
                      {quantity > 0 ? `${quantity} di pesanan` : "Siap dipesan"}
                    </span>
                    <QuantityControl
                      product={product}
                      quantity={quantity}
                      onAdd={onAdd}
                      onInc={onInc}
                      onDec={onDec}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[26px] bg-forest sm:rounded-[32px]">
          <div className="dot-grid absolute inset-0 opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-honey/15 blur-3xl" />
          <div className="relative grid items-center gap-6 p-5 sm:p-7 md:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/[0.06] px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.16em] text-honey">
                <SparkleIcon className="h-3 w-3" />
                Buat rame-rame
              </span>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-[26px] font-extrabold uppercase leading-none tracking-[-0.04em] text-cream sm:text-3xl">
                  Paket Nongkrong
                </h3>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-cream/65">
                  hemat Rp1.000
                </span>
              </div>
              <p className="mt-2 max-w-md text-[12px] leading-[1.75] text-cream/60 sm:text-[13px]">
                {bundle.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] font-extrabold leading-none tracking-[-0.04em] text-honey sm:text-[32px]">
                    {formatRupiah(bundle.price)}
                  </span>
                  <span className="text-xs font-medium text-cream/35 line-through">
                    {formatRupiah(bundle.originalPrice ?? bundle.price)}
                  </span>
                </div>
                <QuantityControl
                  product={bundle}
                  quantity={bundleQty}
                  onAdd={onAdd}
                  onInc={onInc}
                  onDec={onDec}
                  compact
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {["2 Es Teh", "1 Thai Tea", "Pas buat 3 orang"].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.06em] text-cream/50"
                  >
                    <CheckIcon className="h-3 w-3 text-leaf-light" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto hidden w-full max-w-[280px] sm:block md:ml-auto">
              <div className="absolute inset-x-4 -bottom-2 top-4 rotate-3 rounded-[80px_80px_22px_22px] border border-cream/25" />
              <div className="relative overflow-hidden rounded-[80px_80px_22px_22px] border border-cream/20 bg-[#fff3da]">
                <img
                  src={bundle.image}
                  alt="Paket Nongkrong: dua Es Teh dan satu Thai Tea Es Teh Solo"
                  loading="lazy"
                  width="1024"
                  height="1024"
                  className="aspect-square w-full object-cover mix-blend-multiply sm:aspect-[5/4]"
                />
              </div>
              <div className="absolute -left-3 bottom-4 -rotate-3 rounded-xl bg-honey px-3 py-2 text-forest shadow-lg">
                <p className="text-[7.5px] font-bold uppercase tracking-[0.15em] opacity-70">
                  Cuma
                </p>
                <p className="text-sm font-extrabold leading-none">Rp3.333/cup</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] text-forest/40">
          <CupIcon className="h-3.5 w-3.5" />
          Semua minuman disajikan dingin. Punya request khusus? Tulis di catatan pesanan.
        </p>
      </div>
    </section>
  );
}
