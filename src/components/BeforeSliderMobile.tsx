import { useTranslation } from "react-i18next"
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { images1, images2, images3 } from "../services/beforeImages"

const BeforeSliderMobile = () => {
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
            <div className="w-[70vw] md:pl-12">
                <div className="flex flex-row *:w-[25vw] gap-3 ">
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
            </div>
        </>
    )
}

export default BeforeSliderMobile