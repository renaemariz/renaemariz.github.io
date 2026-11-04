import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
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
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides } = props;
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const activeSlide = slides.find((s) => s.id === selectedId);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: true,
    }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <div key={slide.id} className="embla__slide">
                <motion.div
                  className="relative h-full min-w-full overflow-hidden"
                  layoutId={`image-${slide.id}`}
                  onClick={() => setSelectedId(slide.id)}
                >
                  <Image
                    fill
                    className="object-cover"
                    src={slide.url}
                    alt={slide.alt}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="embla__controls bg-black/60 w-full">
            <div className="embla__dots ">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : "",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence
        onExitComplete={() => {
          emblaApi?.plugins()?.autoplay?.play();
        }}
      >
        {selectedId && activeSlide && (
          <>
            <Portal>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              >
                <motion.div
                  layoutId={`image-${selectedId}`}
                  className="relative w-full max-w-4xl aspect-video"
                >
                  <ModalCarousel
                    slides={slides}
                    initialIndex={selectedId}
                    onClose={() => setSelectedId(null)}
                  ></ModalCarousel>
                </motion.div>
              </motion.div>
            </Portal>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmblaCarousel;
