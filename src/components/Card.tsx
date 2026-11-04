import React from "react";
import EmblaCarousel, { Slide } from "./Carousel";

type CardProps<T> = {
  index: number;
  title?: string;
  subTitle?: string;
  cardBody?: string | React.ReactNode;
  data?: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  renderItemStyle?: "fill" | "auto" | string;
  slides?: Slide[];
};

const Card = <T,>({
  index,
  title,
  subTitle,
  data,
  cardBody,
  renderItem,
  renderItemStyle = "auto",
  slides,
}: CardProps<T>) => {
  return (
    <div
      key={index}
      className={`${slides ? "grid grid-cols-1 lg:grid-cols-2 gap-4" : ""} group rounded-3xl border border-card-border bg-card-bg shadow-xl flex flex-col h-full overflow-hidden`}
    >
      <div className="flex-1 min-h-0">
        {slides && <EmblaCarousel slides={slides} />}
      </div>

      <div>
        <div className={`${cardBody ? "grow" : ""}`}>
          <div className="card-header bg-linear-to-br from-indigo-400 to-cyan-400 bg-size-[100%_2px] bg-no-repeat bg-bottom p-8 md:p-6">
            <h3 className="text-sm font-semibold uppercase text-main">
              {title}
            </h3>
            <p className="text-sm font-semibold text-main">{subTitle}</p>
          </div>

          {/* can support react nodes */}
          {cardBody && (
            <div className="card-body p-8 md:p-6  text-sm text-secondary leading-relaxed grow">
              {cardBody}
            </div>
          )}
        </div>

        {/* footer */}
        <div className="card-footer p-8 md:p-6 ">
          <div className={`card-footer-content gap-2 ${renderItemStyle}`}>
            {" "}
            {data?.map((item, i) => (
              <React.Fragment key={i}>{renderItem(item, i)}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
