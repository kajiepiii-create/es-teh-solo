import { SparkleIcon } from "./icons";

const TICKER_ITEMS = [
  "100% gula asli",
  "Mulai Rp2.500",
  "Segar · Hemat · Nikmat",
  "Dari pucuk daun teh sampai pucuk sedotan",
  "Buat nemenin harimu",
];

function TickerGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
        <div key={`${item}-${index}`} className="flex shrink-0 items-center">
          <span className="whitespace-nowrap px-5 text-[10px] font-bold uppercase tracking-[0.16em] text-forest sm:px-7 sm:text-[11px]">
            {item}
          </span>
          <SparkleIcon className="h-3 w-3 shrink-0 text-forest/45" />
        </div>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="marquee-group relative mt-4 overflow-hidden border-y border-forest/15 bg-honey py-3 sm:mt-5 sm:py-3.5">
      <div className="marquee-track flex w-max items-center">
        <TickerGroup />
        <div aria-hidden="true" className="flex shrink-0 items-center">
          <TickerGroup />
        </div>
      </div>
    </div>
  );
}
