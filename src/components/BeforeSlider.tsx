import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { images1, images2, images3 } from "../services/afterImages"
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
    return (
        <>
            <div className="flex gap-3 w-10/12">
                <div className="w-4/12">
                    <Slider {...settings}>
                        {images1.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
                <div className="w-4/12">
                    <Slider {...settings}>
                        {images2.map((img) => (
                            <img className="aspect-square rounded-lg" key={img.id} src={img.src} alt={t('afterOct.images.alt')} />
                        ))}
                    </Slider>
                </div>
                <div className="w-4/12">
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