import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { lngs } from "../translation/lngs";
import { langContext } from "../contexts/langContext";

const NavBar = () => {
    const { updateLang, lang } = useContext(langContext);
    const { t } = useTranslation()
    const { i18n } = useTranslation();
    const { toggle, theme } = useContext(ThemeContext);
    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])
    return (<>
        <div>
            <button className="bg-pop px-3 py-1 rounded-md">
                DONATE
            </button>
        </div>
        <ul className='lg:col-start-2 lg:col-end-2 flex lg:flex-row flex-col lg:text-oposite text-textColor justify-between items-center lg:items-end lg:pb-2 gap-5 lg:gap-0 *:text-xl ' dir={i18n.dir(lang)} >
            <li><a href="#about">{t('header.nav1')}</a></li>
            <li><a href="#">{t('header.nav2')}</a></li>
            <li><a href="#">{t('header.nav3')}</a></li>
            <li><a href="#">{t('header.nav4')}</a></li>
        </ul >

        <div className="lg:flex hidden gap-2 col-start-3 col-end-4 justify-end items-center">
            <div className="space-x-1">
                {Object.keys(lngs).map((lng) => (
                    <button className="text-2xl" key={lng} type="submit" onClick={() => { i18n.changeLanguage(lng), updateLang(lng) }}>
                        {lngs[lng].flag}
                    </button>
                ))}
            </div>
            <button className="hover:bg-base/30 p-2 rounded text-2xl" onClick={() => toggle()}>{theme == 'light' ? <BiSun /> : <BiMoon />}</button>
        </div>
    </>)
}

export default NavBar