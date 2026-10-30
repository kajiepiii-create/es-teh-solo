import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.24-.7.24-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.25 8.23Z" />
    </svg>
  );
}

export function ArrowUpRight({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}

export function ArrowDown({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M12 4v15M5 12l7 7 7-7" />
    </svg>
  );
}

export function PlusIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function CloseIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function BagIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M5.5 8h13l1.2 11a2 2 0 0 1-2 2.2H6.3a2 2 0 0 1-2-2.2L5.5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function LeafIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M20 4C12 4 5 7 5 14c0 3 2.5 5 5 5 7 0 10-7 10-15Z" />
      <path d="M4 21c2-6 6-9 12-12" />
    </svg>
  );
}

export function CupIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M5 8h14l-1.5 11.2a2 2 0 0 1-2 1.8h-7a2 2 0 0 1-2-1.8L5 8Z" />
      <path d="M4 8h16M10 8l1.4-5M13.5 8l2-4" />
      <path d="M8.5 13.5c1.2.8 2.4-.8 3.6 0s2.4-.8 3.6 0" />
    </svg>
  );
}

export function WalletIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5Z" />
      <path d="M4 8h15M16 13.5h4v3h-4a1.5 1.5 0 0 1 0-3Z" />
    </svg>
  );
}

export function StarIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.44 6.2 20.5l1.1-6.47-4.7-4.58 6.5-.95L12 2.6Z" />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </svg>
  );
}

export function SparkleIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2c.5 4.9 2.9 7.3 8 8-5.1.7-7.5 3.1-8 8-.5-4.9-2.9-7.3-8-8 5.1-.7 7.5-3.1 8-8Z" />
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <path d="M7.5 3.5 5 4.2a2 2 0 0 0-1.4 2.3c.8 6.8 5.2 11.2 12 12A2 2 0 0 0 18 17l.7-2.5-4-1.7-1.4 2a12 12 0 0 1-4.6-4.6l2-1.4-1.7-4-1.5-.3Z" />
    </svg>
  );
}

export function ClockIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function QuoteIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9.5 5C5.9 6.3 3.5 9.3 3.5 13.1c0 3.2 1.8 5.4 4.5 5.4 2.2 0 3.8-1.6 3.8-3.8 0-2.1-1.4-3.6-3.4-3.6-.3 0-.7 0-1 .2.4-1.8 1.6-3.1 3.3-4L9.5 5Zm10 0c-3.6 1.3-6 4.3-6 8.1 0 3.2 1.8 5.4 4.5 5.4 2.2 0 3.8-1.6 3.8-3.8 0-2.1-1.4-3.6-3.4-3.6-.3 0-.7 0-1 .2.4-1.8 1.6-3.1 3.3-4L19.5 5Z" />
    </svg>
  );
}

export function IceIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3.5" />
      <path d="M8.5 9.5c1.5-1.5 5.5-1.5 7 0M8.5 14.5c1.5-1.5 5.5-1.5 7 0" />
    </svg>
  );
}
