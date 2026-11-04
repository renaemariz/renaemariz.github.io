import React, { useState, useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Portal } from "./Portal";
import Autoplay from "embla-carousel-autoplay";
import ModalCarousel from "./ModalCarousel";

export type Slide = {
  id: number;
  url: string;
  alt: string;
};

type PropType = {
  slides: Slide[];
  galleryId?: string | number;
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, galleryId } = props;

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const activeIndex = slides.findIndex((s) => s.id === selectedId);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, ...props.options },
    [Autoplay({ stopOnInteraction: true })],
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const slideRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Open modal and remember previous focus
  const openModal = (id: number) => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    emblaApi?.plugins()?.autoplay?.stop();
    setSelectedId(id);
  };

  // The handler is attached to this carousel only, so sibling galleries never
  // receive its arrow-key events. Enter and Space remain native button actions.
  const handleCarouselKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (selectedId !== null || !emblaApi) return;
    if (
      event.target instanceof HTMLElement &&
      (event.target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName))
    ) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      emblaApi.scrollNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      emblaApi.scrollPrev();
    }
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <>
      <div
        onKeyDown={handleCarouselKeyDown}
        className="embla"
        role="region"
        aria-roledescription="carousel"
        aria-label="Image gallery"
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="embla__slide cursor-pointer"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
              >
                <motion.button
                  type="button"
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                  className="relative h-full w-full cursor-pointer focus-visible:z-10 focus-visible:border-4 focus-visible:border-cyan-400"
                  layoutId={`image-${galleryId}-${slide.id}`}
                  onClick={() => {
                    openModal(slide.id);
                  }}
                  aria-label={`Open image: ${slide.alt}`}
                >
                  <Image
                    fill
                    className="object-cover"
                    src={slide.url}
                    alt={slide.alt}
                  />
                </motion.button>
              </div>
            ))}
          </div>

          <div
            className="embla__controls bg-black/60 w-full"
            aria-label="Carousel navigation"
          >
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={[
                    "embla__dot focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    index === selectedIndex ? "embla__dot--selected" : "",
                  ].join(" ")}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence
        onExitComplete={() => {
          previousFocusRef.current?.focus();
          emblaApi?.plugins()?.autoplay?.play();
        }}
      >
        {selectedId !== null && activeIndex >= 0 && (
          <Portal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-150 flex items-center justify-center bg-black/90"
              role="dialog"
              aria-modal="true"
              aria-label="Image gallery viewer"
            >
              <motion.div
                ref={modalRef}
                tabIndex={-1}
                className="relative w-full max-w-4xl aspect-video"
              >
                <ModalCarousel
                  key={`${galleryId}-${selectedId}`}
                  galleryId={galleryId}
                  slides={slides}
                  initialIndex={activeIndex}
                  onClose={closeModal}
                />
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmblaCarousel;
