import { useTranslation } from "react-i18next"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { images1, images2, images3 } from "../services/beforeImages"
import heLogo from '../assets/logo/hebrew.png'
import enLogo from '../assets/logo/english.png'
import bth from '../assets/logo/bth.webp'
import { useContext } from "react"
import { langContext } from "../contexts/langContext"
import { Link } from "react-router-dom"


const Needs = () => {
    const { lang } = useContext(langContext)
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
        <section id="needsSection" className="flex gap-10 my-10">
            <div className="flex md:flex-col w-2/12 max-w-60 pl-10">
                <div className="flex flex-row max-md:w-[75vw] md:flex-col gap-3 ">
                    <div className="max-md:w-4/12">
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
            <div className="space-y-3 pr-14 max-md:-ml-10 -pl-10 max-md:pt-52 max-sm:pt-36">
                <h2 className="text-2xl p-3 bg-primary text-oposite font-semibold">{t('needs.title')}</h2>
                <h3 className="font-semibold">{t('needs.subtitle')}</h3>
                <ul className="space-y-7">
                    <li>
                        <p><span className="font-semibold">{t('needs.ul.li1.subtitle')}</span>{t('needs.ul.li1.text')}<Link to={'/educationalfacilities#'} className="px-2 text-blue-500 hover:underline cursor-pointer">{t('needs.ul.link')}</Link></p>
                    </li>
                    <li>
                        <p><span className="font-semibold">{t('needs.ul.li2.subtitle')}</span>{t('needs.ul.li2.text')}<Link to={'/health#'} className="px-2 text-blue-500 hover:underline cursor-pointer">{t('needs.ul.link')}</Link></p>
                    </li>
                    <li>
                        <p><span className="font-semibold">{t('needs.ul.li3.subtitle')}</span>{t('needs.ul.li3.text')}<Link to={'/community#'} className="px-2 text-blue-500 hover:underline cursor-pointer">{t('needs.ul.link')}</Link></p>
                    </li>
                    <li>
                        <p><span className="font-semibold">{t('needs.ul.li4.subtitle')}</span>{t('needs.ul.li4.text')}<Link to={'/infrastructure#'} className="px-2 text-blue-500 hover:underline cursor-pointer">{t('needs.ul.link')}</Link></p>
                    </li>
                </ul>
                <div className="bg-primary p-2 max-md:-mx-10 flex flex-col gap-2 items-center">
                    <p className=" text-xl font-medium text-oposite text-center">{t('cta.text')}</p>
                    <button className="bg-pop font-medium px-3 py-1 rounded">Donate</button>
                </div>
            </div>
        </section>
    )
}

export default Needs