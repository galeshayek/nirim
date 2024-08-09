import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Title from "../components/Title";

const Kibbutz = () => {
  const { t } = useTranslation();
  return (
    <section
      dir={i18next.dir()}
      className="flex flex-col justify-center items-center pt-16 mx-3 md:mx-10 px-4 border-l-[2rem] border-pop"
    >
      <Title>{t("kibbutz.title")}</Title>
      <h2 className="text-2xl pb-5 -mt-4">{t("afterOct.subtitle")}</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          {/* <h3 className="text-primary font-semibold text-4xl">{t('kibbutz.title')}</h3>
                    <h4 className="text-primary text-2xl md:text-3xl font-semibold">{t('kibbutz.subtitle1')}</h4>
                    <h5 className="font-semibold text-2xl">{t('kibbutz.subtitle2')}</h5> */}
          <p className="px-5 md:px-20 leading-8 md:text-justify">
            {t("kibbutz.text")}
          </p>
        </div>
        {/* <img className="size-fit aspect-square md:size-4/12" src={photo18} alt={t('kibbutz.photoAlt')} /> */}
      </div>
    </section>
  );
};

export default Kibbutz;
