import { cn } from "../utils/cn";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  compact?: boolean;
};

export function Logo({ className, variant = "dark", compact = false }: LogoProps) {
  const light = variant === "light";

  return (
    <a
      href="#beranda"
      className={cn("group inline-flex items-center gap-2.5 sm:gap-3", className)}
      aria-label="Es Teh Solo — kembali ke beranda"
    >
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-[14px] transition-transform duration-300 group-hover:-rotate-6",
          compact ? "h-10 w-10" : "h-11 w-11 sm:h-12 sm:w-12",
          light ? "bg-cream text-forest" : "bg-forest text-cream"
        )}
      >
        <svg
          viewBox="0 0 32 32"
          className={compact ? "h-7 w-7" : "h-8 w-8 sm:h-[34px] sm:w-[34px]"}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8.5 11.5h15l-1.6 13a3 3 0 0 1-3 2.6h-5.8a3 3 0 0 1-3-2.6l-1.6-13Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M10 17.2h12l-1 8.6a1.6 1.6 0 0 1-1.6 1.4h-6.8a1.6 1.6 0 0 1-1.6-1.4L10 17.2Z" fill="#E9B94B" />
          <rect x="7" y="8.6" width="18" height="3.6" rx="1.8" fill="#E9B94B" stroke="#E9B94B" />
          <path d="m17 9 3.4-6" stroke="#8CC47A" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M21.5 4.6c1.6-2.1 4-1.8 5.2-.8-1.2 1.9-3.1 2.6-5.2.8Z" fill="#8CC47A" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[10px] font-medium uppercase leading-none tracking-[0.3em]",
            light ? "text-cream/65" : "text-tea/75"
          )}
        >
          es teh
        </span>
        <span
          className={cn(
            "mt-1 text-[25px] font-extrabold leading-none tracking-[-0.05em] sm:text-[28px]",
            light ? "text-cream" : "text-forest"
          )}
        >
          SOLO<span className="text-honey">.</span>
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1.5 text-[7px] font-semibold uppercase tracking-[0.22em] sm:text-[8px]",
              light ? "text-cream/55" : "text-forest/50"
            )}
          >
            Segar · Hemat · Nikmat
          </span>
        )}
      </span>
    </a>
  );
}
