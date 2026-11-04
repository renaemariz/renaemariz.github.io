import React from "react";
import { EmblaOptionsType } from "embla-carousel";
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
  options?: EmblaOptionsType;
  initialIndex: number;
  onClose: () => void;
};

const ModalCarousel = ({ slides, initialIndex, onClose }: PropType) => {
  const [emblaRef] = useEmblaCarousel({
    startIndex: initialIndex,
    loop: true,
  });

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute -top-7.5 right-[5%] h-10 w-10 z-50 text-white text-xl bg-slate-600/80 rounded-full cursor-pointer"
      >
        ✕
      </button>
      {/* MODAL CAROUSEL VIEWPORT */}
      <div className="w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 flex items-center justify-center p-4 cursor-grab"
            >
              <motion.div
                layoutId={`img-${slide.id}`} // Matches the main carousel ID
                className="relative w-full h-full max-w-4xl aspect-video"
              >
                <Image
                  fill
                  className="object-contain"
                  src={slide.url}
                  alt={slide.alt}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ModalCarousel;
