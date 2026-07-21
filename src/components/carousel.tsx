"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * A horizontally scrolling set of items.
 *
 * A carousel hides most of its content behind interaction, and users rarely
 * go past the first item. Use it where the items are genuinely alternatives
 * and space is genuinely short, not to fit more onto a page.
 */

type EmblaApi = NonNullable<UseEmblaCarouselType[1]>;

const CarouselContext = createContext<{
  viewportRef: ReturnType<typeof useEmblaCarousel>[0];
  api: EmblaApi | undefined;
  canPrev: boolean;
  canNext: boolean;
} | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel parts must be used inside <Carousel>");
  }
  return context;
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Names the region, so it is announced as a group rather than loose content. */
  label: string;
}

export function Carousel({ label, className, children, ...props }: CarouselProps) {
  const [ref, api] = useEmblaCarousel({ loop: false, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback((instance: EmblaApi) => {
    setCanPrev(instance.canScrollPrev());
    setCanNext(instance.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    sync(api);
    api.on("select", sync).on("reInit", sync);
    return () => {
      api.off("select", sync).off("reInit", sync);
    };
  }, [api, sync]);

  return (
    <CarouselContext.Provider value={{ viewportRef: ref, api, canPrev, canNext }}>
      <section
        aria-roledescription="carousel"
        aria-label={label}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </section>
    </CarouselContext.Provider>
  );
}

/** The scrolling viewport. Holds the items; controls sit outside it. */
export function CarouselContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { viewportRef } = useCarousel();
  return (
    <div ref={viewportRef} className="overflow-hidden">
      <div className={cn("flex gap-4", className)} {...props} />
    </div>
  );
}

export function CarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3", className)}
      {...props}
    />
  );
}

const control =
  "inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-body)] transition-colors " +
  "hover:bg-[var(--color-hover)] hover:text-[var(--color-fg)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] " +
  "disabled:pointer-events-none disabled:opacity-40";

export function CarouselPrevious({ className }: { className?: string }) {
  const { api, canPrev } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Previous"
      disabled={!canPrev}
      onClick={() => api?.scrollPrev()}
      className={cn(control, className)}
    >
      <ChevronLeft size={15} aria-hidden="true" />
    </button>
  );
}

export function CarouselNext({ className }: { className?: string }) {
  const { api, canNext } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Next"
      disabled={!canNext}
      onClick={() => api?.scrollNext()}
      className={cn(control, className)}
    >
      <ChevronRight size={15} aria-hidden="true" />
    </button>
  );
}
