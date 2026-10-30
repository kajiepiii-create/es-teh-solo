import { useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_WA_MESSAGE, PRODUCTS, formatRupiah, waLink } from "../lib/site";
import {
  ArrowUpRight,
  BagIcon,
  CheckIcon,
  CloseIcon,
  CupIcon,
  LeafIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./icons";
import { cn } from "../utils/cn";

type OrderDrawerProps = {
  open: boolean;
  onClose: () => void;
  quantities: Record<string, number>;
  onAdd: (id: string) => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onClear: () => void;
};

type Method = "Ambil di tempat" | "Diantar";

export function OrderDrawer({
  open,
  onClose,
  quantities,
  onAdd,
  onInc,
  onDec,
  onClear,
}: OrderDrawerProps) {
  const [name, setName] = useState("");
  const [method, setMethod] = useState<Method>("Ambil di tempat");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const lines = useMemo(
    () =>
      PRODUCTS.map((product) => ({ product, quantity: quantities[product.id] ?? 0 })).filter(
        (line) => line.quantity > 0
      ),
    [quantities]
  );

  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const total = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  const handleSend = () => {
    if (!name.trim()) {
      setError("Isi nama kamu dulu ya, biar pesanannya gampang dikenali.");
      nameRef.current?.focus();
      return;
    }

    setError("");
    const orderLines = lines
      .map(
        (line, index) =>
          `${index + 1}. ${line.product.name} × ${line.quantity} — ${formatRupiah(
            line.product.price * line.quantity
          )}`
      )
      .join("\n");

    const message = [
      "Halo Es Teh Solo! Saya mau pesan:",
      "",
      orderLines,
      "",
      `Total: ${formatRupiah(total)}`,
      `Nama: ${name.trim()}`,
      `Metode: ${method}`,
      note.trim() ? `Catatan: ${note.trim()}` : "Catatan: -",
      "",
      "Mohon konfirmasi ketersediaan dan total akhirnya ya. Terima kasih!",
    ].join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Tutup keranjang"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={cn(
          "absolute inset-0 h-full w-full cursor-default bg-forest/55 backdrop-blur-[3px] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-drawer-title"
        inert={!open}
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-[435px] flex-col bg-cream shadow-[-30px_0_70px_-20px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-forest/10 px-5 pb-4 pt-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest text-honey">
              <BagIcon className="h-5 w-5" />
            </span>
            <div>
              <h2
                id="order-drawer-title"
                className="text-[17px] font-extrabold leading-none tracking-[-0.03em] text-forest"
              >
                Pesananmu
              </h2>
              <p className="mt-1 text-[9.5px] text-forest/45">
                {itemCount > 0
                  ? `${itemCount} item · ${formatRupiah(total)}`
                  : "Pilih yang seger dulu, yuk"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {itemCount > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="rounded-full px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-forest/40 transition-colors hover:bg-forest/5 hover:text-forest/70"
              >
                Kosongkan
              </button>
            )}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="grid h-9 w-9 place-items-center rounded-full border border-forest/15 bg-white/60 text-forest transition-colors hover:bg-white"
              aria-label="Tutup keranjang"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          {itemCount === 0 ? (
            <div>
              <div className="relative overflow-hidden rounded-[24px] border border-forest/10 bg-white/50 px-5 py-6 text-center">
                <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border-[10px] border-honey/20" />
                <div className="relative mx-auto h-28 w-28">
                  <div className="absolute inset-0 rotate-6 rounded-full bg-honey/30" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cream bg-[#fff3da] shadow-sm">
                    <img
                      src="/images/menu-es-teh.webp"
                      alt=""
                      className="h-full w-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <span className="absolute -right-1 bottom-1 grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-forest text-honey">
                    <LeafIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
                <h3 className="mt-4 text-[17px] font-extrabold tracking-[-0.03em] text-forest">
                  Keranjangmu masih kosong
                </h3>
                <p className="mx-auto mt-1.5 max-w-[270px] text-[11px] leading-relaxed text-forest/50">
                  Pilih minuman favoritmu di bawah. Bisa langsung tambah, kok.
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-tea/60">
                  Pilih minumanmu
                </p>
                <span className="flex items-center gap-1 text-[8.5px] font-medium text-forest/35">
                  <SparkleIcon className="h-2.5 w-2.5" />
                  Semua seger
                </span>
              </div>

              <div className="mt-2.5 space-y-2">
                {PRODUCTS.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/55 p-2.5"
                  >
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-[#fff3da]">
                      <img
                        src={product.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover mix-blend-multiply"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-bold text-forest">{product.name}</p>
                      <p className="text-[10px] font-semibold text-leaf">
                        {formatRupiah(product.price)}
                        {product.originalPrice && (
                          <span className="ml-1.5 font-normal text-forest/30 line-through">
                            {formatRupiah(product.originalPrice)}
                          </span>
                        )}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onAdd(product.id)}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-honey transition-all hover:rotate-90 hover:bg-leaf"
                      aria-label={`Tambah ${product.name}`}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full border border-forest/15 bg-white/50 px-4 py-3 text-[10px] font-semibold text-forest/65 transition-colors hover:border-forest/30 hover:text-forest"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-leaf" />
                Masih bingung? Tanya lewat WhatsApp
              </a>
            </div>
          ) : (
            <div>
              <div className="space-y-2.5">
                {lines.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-3 rounded-2xl border border-forest/10 bg-white/60 p-3"
                  >
                    <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl bg-[#fff3da]">
                      <img
                        src={product.image}
                        alt=""
                        className="h-full w-full object-cover mix-blend-multiply"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-[12.5px] font-bold leading-tight text-forest">
                            {product.name}
                          </p>
                          <p className="mt-0.5 text-[9px] text-forest/40">
                            {formatRupiah(product.price)} / cup
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onDec(product.id)}
                          aria-label={`Hapus ${product.name}`}
                          className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-forest/30 transition-colors hover:bg-forest/5 hover:text-forest"
                        >
                          <CloseIcon className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                        <div className="flex items-center rounded-full border border-forest/10 bg-cream p-0.5">
                          <button
                            type="button"
                            onClick={() => onDec(product.id)}
                            className="grid h-6 w-6 place-items-center rounded-full text-forest transition hover:bg-white"
                            aria-label={`Kurangi ${product.name}`}
                          >
                            <MinusIcon className="h-3 w-3" />
                          </button>
                          <span className="min-w-6 text-center text-[10.5px] font-bold tabular-nums text-forest">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onInc(product.id)}
                            className="grid h-6 w-6 place-items-center rounded-full bg-forest text-honey transition hover:bg-leaf"
                            aria-label={`Tambah ${product.name}`}
                          >
                            <PlusIcon className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-[12px] font-extrabold text-forest">
                          {formatRupiah(product.price * quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-tea/55">
                  Tambah lagi
                </p>
                <div className="no-scrollbar -mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1">
                  {PRODUCTS.map((product) => {
                    const quantity = quantities[product.id] ?? 0;
                    return (
                      <div
                        key={product.id}
                        className="flex w-[138px] shrink-0 flex-col rounded-xl border border-forest/10 bg-white/50 p-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-[#fff3da]">
                            <img
                              src={product.image}
                              alt=""
                              className="h-full w-full object-cover mix-blend-multiply"
                            />
                          </div>
                          <p className="text-[9.5px] font-semibold leading-tight text-forest/80">
                            {product.name}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-[10px] font-bold text-leaf">
                            {formatRupiah(product.price)}
                          </p>
                          <button
                            type="button"
                            onClick={() => onAdd(product.id)}
                            className="grid h-6 w-6 place-items-center rounded-full bg-forest text-honey transition-colors hover:bg-leaf"
                            aria-label={`Tambah ${product.name}`}
                          >
                            {quantity > 0 ? (
                              <span className="text-[9px] font-bold text-honey">{quantity}</span>
                            ) : (
                              <PlusIcon className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 space-y-3.5 rounded-2xl border border-forest/10 bg-white/45 p-4">
                <div>
                  <label
                    htmlFor="order-name"
                    className="text-[9px] font-bold uppercase tracking-[0.1em] text-forest/65"
                  >
                    Nama pemesan <span className="text-tea">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="order-name"
                    type="text"
                    value={name}
                    maxLength={60}
                    onChange={(event) => {
                      setName(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Nama kamu"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "order-name-error" : undefined}
                    className={cn(
                      "mt-1.5 w-full rounded-xl border bg-cream px-3.5 py-2.5 text-[12px] text-forest placeholder:text-forest/30 transition-colors focus:bg-white focus:outline-none focus:ring-2",
                      error
                        ? "border-tea focus:border-tea focus:ring-tea/15"
                        : "border-forest/15 focus:border-leaf focus:ring-leaf/15"
                    )}
                  />
                  {error && (
                    <p id="order-name-error" role="alert" className="mt-1.5 text-[9.5px] text-tea">
                      {error}
                    </p>
                  )}
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-forest/65">
                    Metode
                  </span>
                  <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                    {([
                      { value: "Ambil di tempat", icon: BagIcon },
                      { value: "Diantar", icon: PhoneIcon },
                    ] as const).map(({ value, icon: Icon }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setMethod(value)}
                        aria-pressed={method === value}
                        className={cn(
                          "flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 text-[10px] font-semibold transition-all",
                          method === value
                            ? "border-forest bg-forest text-cream"
                            : "border-forest/15 bg-cream text-forest/60 hover:border-forest/30"
                        )}
                      >
                        <Icon className={cn("h-3.5 w-3.5", method === value && "text-honey")} />
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="order-note"
                    className="text-[9px] font-bold uppercase tracking-[0.1em] text-forest/65"
                  >
                    {method === "Diantar" ? "Alamat & catatan" : "Catatan pesanan"}
                  </label>
                  <textarea
                    id="order-note"
                    value={note}
                    maxLength={240}
                    onChange={(event) => setNote(event.target.value)}
                    rows={2}
                    placeholder={
                      method === "Diantar"
                        ? "Tulis alamat lengkap & catatan..."
                        : "Contoh: es sedikit, gula jangan terlalu banyak..."
                    }
                    className="mt-1.5 w-full resize-none rounded-xl border border-forest/15 bg-cream px-3.5 py-2.5 text-[11px] leading-relaxed text-forest placeholder:text-forest/30 transition-colors focus:border-leaf focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf/15"
                  />
                </div>

                <div className="flex items-start gap-2 rounded-lg bg-forest/[0.05] px-3 py-2.5">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf" />
                  <p className="text-[9px] leading-relaxed text-forest/50">
                    Pesanan dikirim ke WhatsApp untuk dikonfirmasi. Nggak perlu bayar di muka.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {itemCount > 0 && (
          <div className="shrink-0 border-t border-forest/10 bg-cream/95 px-5 pb-5 pt-4 backdrop-blur-md">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-forest/40">
                  Total pesanan
                </p>
                <p className="mt-1 text-[23px] font-extrabold leading-none tracking-[-0.04em] text-forest">
                  {formatRupiah(total)}
                </p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-honey/25 px-2.5 py-1 text-[8.5px] font-semibold text-tea">
                <CupIcon className="h-3 w-3" />
                {itemCount} item
              </span>
            </div>

            <button
              type="button"
              onClick={handleSend}
              className="group mt-3 flex w-full items-center justify-center gap-2.5 rounded-full bg-forest px-5 py-3.5 text-[12px] font-bold uppercase tracking-[0.07em] text-cream transition-all hover:-translate-y-0.5 hover:bg-leaf"
            >
              <WhatsAppIcon className="h-4 w-4 text-honey" />
              Pesan via WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="mt-2 text-center text-[8.5px] text-forest/35">
              Total akhir dikonfirmasi lewat WhatsApp · tanpa biaya tersembunyi
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
