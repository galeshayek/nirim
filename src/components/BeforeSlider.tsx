import { images1, images2, images3 } from "../services/afterImages"
import heLogo from '../assets/logo/hebrew.png'
import enLogo from '../assets/logo/english.png'
import bth from '../assets/logo/bth.webp'
import { useContext } from "react"
import { langContext } from "../contexts/langContext"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslation } from "react-i18next"

const BeforeSlider = () => {
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
        <>
            <div className="flex flex-col gap-3 ">
                <div>
                    <Slider {...settings}>
                        {images1.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
                <div>
                    <Slider {...settings}>
                        {images2.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
                <div>
                    <Slider {...settings}>
                        {images3.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default BeforeSlider