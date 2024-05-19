import { useTranslation } from "react-i18next"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import AfterSlider from "../../components/AfterSlider"
import TestimonialSlider from "../../components/Tesrimonials/TestimonialSlider"
import i18next from "i18next"
const AfterOct = () => {
    const { t } = useTranslation()
    return (
        <section id="about" className="m-auto flex flex-col gap-y-5 pt-10 mx-3 md:mx-10 px-4 items-center border-l-[2rem] border-pop">
            <p dir={i18next.dir()}><span className="font-bold">{t('afterOct.title')}</span>{t('afterOct.p')}</p>
            <div className="bg-slate-700 py-10 rounded-lg max-md:pl-7">
                <AfterSlider />
            </div>

            <TestimonialSlider />

            <h2 className="text-2xl p-3 bg-primary text-oposite font-semibold">{t('afterOct.subtitle')}</h2>
        </section>
    )
}

export default AfterOct