import { useTranslation } from "react-i18next";
import photo from "../../assets/photosBefore/11.webp";
import { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import { useInterval } from "react-use";
import Title from "../../components/Title";

const Hero = () => {
  const [hidden, sethidden] = useState("");
  const ref = useRef<HTMLIFrameElement>(null);
  const videoRefresh = () => {
    if (ref.current) {
      ref.current.src = `${t(
        "hero.src"
      )}?autoplay=1&loop=1&mute=1&modestbranding=1&iv_load_policy=3&controls=1&disablekb=1&fs=0&color=white`;
    }
  };
  useInterval(videoRefresh, 292000);
  useEffect(() => {
    setTimeout(() => {
      sethidden("opacity-0 transition duration-1000");
    }, 5000);
    setTimeout(() => {
      sethidden("hidden");
    }, 6000);
  }, []);

  const { t } = useTranslation();
  return (
    <section
      dir={i18next.dir()}
      className="pt-10 flex flex-col justify-center items-center mx-3 md:mx-10 px-4 border-l-[2rem] border-pop"
    >
      <Title>{t("hero.title")}</Title>
      <p className="text-lg pb-16 md:px-28 xl:px-44 px-4 leading-8 md:text-justify">
        <span className="font-bold">{t("hero.subtitle")}</span>
        {t("hero.text")}
      </p>
      <div className="relative w-full">
        <div className={`absolute ${hidden}`}>
          <p className="text-white text-xl md:text-5xl md:scale-150 font-semibold absolute right-10 bottom-2 md:right-52 md:bottom-5">
            {t("hero.overlayText")}
          </p>
          <img
            className="mx-auto w-10/12 aspect-video"
            src={photo}
            alt="photo of the kibbutz"
          />
        </div>
        <iframe
          ref={ref}
          className="w-10/12 mx-auto aspect-video"
          src={`${t(
            "hero.src"
          )}?autoplay=1&loop=1&mute=1&modestbranding=1&iv_load_policy=3&controls=1&disablekb=1&fs=0&color=white`}
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
