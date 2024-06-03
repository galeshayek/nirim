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
import i18next from "i18next";
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
        <div dir={i18next.dir()} className="w-[85vw] md:w-8/12 md:py-0 -mt-8">
            <Slider {...settings}>
                {testimonials.map((testi, index) => (
                    <Testimonial
                        key={index}
                        title={t(`afterOct.${testi}.title`)}
                        text={t(`afterOct.${testi}.p`)}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default TestimonialSlider
