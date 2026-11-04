import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";

export type Slide = {
  id: number;
  url: string;
  alt: string;
};

type PropType = {
  slides: Slide[];
  galleryId?: string | number;
  initialIndex: number;
  onClose: () => void;
};

const ModalCarousel = ({
  slides,
  galleryId,
  initialIndex,
  onClose,
}: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex,
  });

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const close = useCallback(() => onClose(), [onClose]);

  // Explicitly synchronize the initial slide
  useEffect(() => {
    if (!emblaApi || slides.length === 0) return;

    const safeIndex = Math.max(0, Math.min(initialIndex, slides.length - 1));

    emblaApi.scrollTo(safeIndex, true);
  }, [emblaApi, initialIndex, slides.length]);

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Focus close button
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Keyboard controls
  useEffect(() => {
    if (!emblaApi) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!modalElement.contains(event.target as Node)) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          emblaApi.scrollNext();
          break;

        case "ArrowLeft":
          event.preventDefault();
          emblaApi.scrollPrev();
          break;

        case "Escape":
          event.preventDefault();
          event.stopPropagation();
          close();
          break;

        case "Tab": {
          const focusable = modalElement.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
          );

          if (!focusable.length) {
            event.preventDefault();
            modalElement.focus();
            break;
          }

          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }

          break;
        }
      }
    };

    modalElement.addEventListener("keydown", handleKeyDown);

    return () => {
      modalElement.removeEventListener("keydown", handleKeyDown);
    };
  }, [emblaApi, close]);

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      className="relative w-full h-full flex flex-col items-center justify-center"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image gallery viewer"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute -top-7.5 right-[5%] h-10 w-10 z-50 text-white text-xl bg-slate-600/80 rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
      >
        ✕
      </button>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Image {selectedIndex + 1} of {slides.length}
      </p>

      <div className="w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 flex items-center justify-center p-4"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <motion.div
                layoutId={`image-${galleryId}-${slide.id}`}
                className="relative w-full h-full max-w-4xl aspect-video"
              >
                <Image
                  fill
                  className="object-contain"
                  src={slide.url}
                  alt={slide.alt}
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 flex items-center gap-6 z-50">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous image"
          className="text-white bg-slate-600/80 rounded-full w-10 h-10 focus-visible:outline-2 focus-visible:outline-white"
        >
          ←
        </button>

        <span className="text-white text-sm">
          {selectedIndex + 1} / {slides.length}
        </span>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next image"
          className="text-white bg-slate-600/80 rounded-full w-10 h-10 focus-visible:outline-2 focus-visible:outline-white"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ModalCarousel;
