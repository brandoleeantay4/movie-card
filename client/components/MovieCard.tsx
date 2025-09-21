import { Bookmark, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type MovieCardProps = {
  title: string;
  posterSrc: string;
  hoverSrc?: string;
  rating?: string;
  duration?: string;
  year?: string;
  provider?: string;
  width?: number; // base narrow width (px)
  expandedWidth?: number; // normal width (px)
  collapsedWidth?: number; // explicit base width (px)
  hoverWidth?: number; // explicit hover width override (px)
  height?: number; // fixed height (px)
  className?: string;
};

export function MovieCard({
  title,
  posterSrc,
  hoverSrc,
  rating = "PG",
  duration = "1h 36m",
  year = "2025",
  provider = "Netflix",
  width = 264,
  expandedWidth = 0,
  collapsedWidth,
  hoverWidth,
  height = 160,
  className,
}: MovieCardProps) {
  // Normal width to compare against (designer's "ancho normal")
  const normalWidth = expandedWidth && expandedWidth > 0 ? expandedWidth : width;
  const baseWidth = typeof collapsedWidth === "number" && collapsedWidth > 0 ? collapsedWidth : Math.round(normalWidth / 3);
  const finalHoverWidth = typeof hoverWidth === "number" && hoverWidth > 0 ? hoverWidth : Math.round(normalWidth * 2);

  return (
    <div
      className={cn(
        "group relative inline-block select-none align-top [--w:220px] [--w-expanded:420px] [--h:160px]",
        className,
      )}
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--w": `${baseWidth}px`,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--w-expanded": `${finalHoverWidth}px`,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "--h": `${height}px`,
      }}
    >
      {/* Card grows only to the right because it's inline-block and width increases */}
      <div className="w-[var(--w)] transition-[width] duration-300 ease-out will-change-[width] group-hover:w-[var(--w-expanded)]">
        <div className="relative h-[var(--h)] overflow-hidden rounded-xl bg-black shadow-card">
          {/* Base and hover image swap with constant height */}
          <img
            src={posterSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={hoverSrc ?? posterSrc}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />

          {/* Hover overlay content */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <button
            aria-label="Guardar"
            className="absolute right-2 top-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <Bookmark className="w-[22px] h-[28px]" />
          </button>
          <div className="absolute inset-x-3 bottom-3 translate-y-2 space-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="line-clamp-2 text-base font-semibold leading-tight text-white drop-shadow-sm">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-white/90">
              <span className="rounded border border-white/50 px-1.5 py-0.5 leading-none">{rating}</span>
              <span>{duration}</span>
              <span>•</span>
              <span>{year}</span>
              <span>•</span>
              <span className="font-medium">{provider}</span>
            </div>
            <div>
              <button className="inline-flex items-center justify-between rounded-full bg-[#3c4043] px-3 py-1.5 text-sm font-semibold text-white w-[190px] shadow-sm transition-colors hover:bg-[#3c4043]/90">
                Mirar en <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2 truncate text-sm font-medium text-foreground/90">{title}</div>
      </div>
    </div>
  );
}
