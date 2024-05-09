import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import Testimonial from "./Testimonial";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import './testimonialSlider.scss';
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
const TestimonialSlider = () => {
    const [boolean, setBoolean] = useState(true)
    const { width } = useWindowSize()

    useEffect(() => {
        if (width >= 768) {
            setBoolean(true)
        } else {
            setBoolean(false)
        }
    }, [width])

    const { t } = useTranslation()
    const settings = {
        dots: boolean,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 8000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: boolean
    };
    return (
        <div className=" w-[85vw] md:w-8/12 md:py-4">
            <h3 className=" text-3xl text-center border-b-2 w-fit mx-auto border-slate-700">{t('afterOct.testiTitle')}</h3>
            <Slider {...settings}>
                <Testimonial title={t('afterOct.testi1.title')} text={t('afterOct.testi1.p')} />
                <Testimonial title={t('afterOct.testi2.title')} text={t('afterOct.testi2.p')} />
                <Testimonial title={t('afterOct.testi3.title')} text={t('afterOct.testi3.p')} />
                <Testimonial title={t('afterOct.testi4.title')} text={t('afterOct.testi4.p')} />
            </Slider>
        </div>
    )
}

export default TestimonialSlider
