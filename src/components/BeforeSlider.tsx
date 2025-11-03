import { useTranslation } from "react-i18next";
import { images1, images2, images3 } from "../lib/beforeImages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BeforeSlider = () => {
  const { t } = useTranslation();

  const autoplaySettings = {
    align: "start" as const,
    loop: true,
  };

  return (
    <div className="flex flex-col gap-3">
      <Carousel opts={autoplaySettings} className="w-full">
        <CarouselContent>
          {images1.map((img) => (
            <CarouselItem key={img.id}>
              <img
                className="aspect-square rounded-lg w-full"
                src={img.src}
                alt={t('afterOct.images.alt')}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel opts={autoplaySettings} className="w-full">
        <CarouselContent>
          {images2.map((img) => (
            <CarouselItem key={img.id}>
              <img
                className="aspect-square rounded-lg w-full"
                src={img.src}
                alt={t('afterOct.images.alt')}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel opts={autoplaySettings} className="w-full">
        <CarouselContent>
          {images3.map((img) => (
            <CarouselItem key={img.id}>
              <img
                className="aspect-square rounded-lg w-full"
                src={img.src}
                alt={t('afterOct.images.alt')}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BeforeSlider;
