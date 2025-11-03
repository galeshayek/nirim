import { useTranslation } from "react-i18next";
import { images1, images2, images3 } from "../lib/beforeImages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BeforeSliderMobile = () => {
  const { t } = useTranslation();

  const autoplaySettings = {
    align: "start" as const,
    loop: true,
  };

  return (
    <div className="w-[70vw] md:pl-12">
      <div className="flex flex-row *:w-[25vw] gap-3">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default BeforeSliderMobile;
