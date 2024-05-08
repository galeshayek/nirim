import { useTranslation } from "react-i18next"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TestimonialSlider from "../../components/Tesrimonials/TestimonialSlider"
import BeforeSlider from "../../components/BeforeSlider"
const AfterOct = () => {
    const { t } = useTranslation()
    return (
        <section id="about" className="m-auto flex flex-col gap-y-5 pt-10 mx-3 md:mx-10 px-4 items-center border-l-[2rem] border-pop">
            <p><span className="font-bold">{t('afterOct.title')}</span>{t('afterOct.p')}</p>
            <TestimonialSlider />
            <BeforeSlider />
            <h2 className="text-2xl p-3 bg-primary text-oposite font-semibold">{t('afterOct.subtitle')}</h2>
        </section>
    )
}

export default AfterOct