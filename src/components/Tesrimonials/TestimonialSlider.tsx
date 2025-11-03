import { useTranslation } from "react-i18next";
import Testimonial from "./Testimonial";
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialSlider = () => {
  const [showArrows, setShowArrows] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 768) {
      setShowArrows(true);
    } else {
      setShowArrows(false);
    }
  }, [width]);

  const testimonials = [
    'testi1',
    'testi2',
    'testi3',
    'testi4',
    'testi5',
    'testi6',
    'testi7',
    'testi8',
    'testi9'
  ];

  const { t } = useTranslation();

  return (
    <div dir={i18next.dir()} className="w-[85vw] md:w-8/12 md:py-0 -mt-8">
      <Carousel
        opts={{
          align: "start" as const,
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testi, index) => (
            <CarouselItem key={index}>
              <Testimonial
                title={t(`afterOct.${testi}.title`)}
                text={t(`afterOct.${testi}.p`)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {showArrows && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
