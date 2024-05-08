import { images1, images2, images3 } from "../services/beforeImages"
import heLogo from '../assets/logo/hebrew.png'
import enLogo from '../assets/logo/english.png'
import bth from '../assets/logo/bth.webp'
import { useContext } from "react"
import { langContext } from "../contexts/langContext"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslation } from "react-i18next"

const AfterSlider = () => {
    const { t } = useTranslation()

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
    }
    const { lang } = useContext(langContext)

    return (
        <div className="flex md:flex-col w-2/12 max-w-60 pl-10">
            <div className="flex flex-row max-md:w-[75vw] md:flex-col gap-3 ">
                <div className="max-m:w-4/12">
                    <Slider {...settings}>
                        {images1.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
                <div className="max-md:w-4/12">
                    <Slider {...settings}>
                        {images2.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
                <div className="max-md:w-4/12">
                    <Slider {...settings}>
                        {images3.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="space-y-1 max-md:hidden">
                <img src={lang == 'he' ? heLogo : enLogo} alt="nirim logo" />
                <img src={bth} alt="bring them home logo" />
            </div>
        </div>
    )
}

export default AfterSlider