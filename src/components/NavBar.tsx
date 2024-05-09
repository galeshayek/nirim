import { useContext, useEffect } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { BiMoon, BiSun } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { lngs } from "../translation/lngs";
import { langContext } from "../contexts/langContext";
import { Link, NavLink } from "react-router-dom";
import { footerSectionAnchor, needsSectionAnchor } from "../services/ancors";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';


const NavBar = () => {
    const { updateLang, lang } = useContext(langContext);
    const { t } = useTranslation()
    const { i18n } = useTranslation();
    // const { toggle, theme } = useContext(ThemeContext);
    useEffect(() => {
        document.documentElement.lang = lang
        console.log(i18n.language)
    }, [lang])
    return (<>
        <div className="self-center max-lg:text-center max-lg:pb-4 lg:pl-10">
            <button className="bg-pop text-xl px-3 py-1 rounded-md">
                DONATE
            </button>
        </div>
        <ul className='lg:col-start-2 lg:col-end-2 flex lg:flex-row flex-col lg:text-oposite text-textColor justify-between items-center lg:items-end lg:pb-2 gap-5 lg:gap-0 *:text-xl ' dir={i18n.dir(lang)} >
            <li><Link to={'/'}>{t('header.nav1')}</Link></li>
            <li><button onClick={needsSectionAnchor}>{t('header.nav2')}</button></li>
            <Menu placement="bottom">
                <MenuButton>
                    Projects
                </MenuButton>
                <MenuList className="text-textColor bg-oposite border-pop border-4 lg:border-t-0 p-2 rounded-b-md space-y-2">
                    <MenuItem className="hover:underline"><NavLink to={'/educationalfacilities'}>{t('needs.ul.li1.subtitle')}</NavLink></MenuItem>
                    <MenuItem className="hover:underline"><NavLink to={'/health'}>{t('needs.ul.li2.subtitle')}</NavLink></MenuItem>
                    <MenuItem className="hover:underline"><NavLink to={'/community'}>{t('needs.ul.li3.subtitle')}</NavLink></MenuItem>
                    <MenuItem className="hover:underline"><NavLink to={'/infrastructure'}>{t('needs.ul.li4.subtitle')}</NavLink></MenuItem>
                </MenuList>
            </Menu>
            <li><button onClick={footerSectionAnchor}>{t('header.nav4')}</button></li>
        </ul >
        <div className="lg:flex hidden gap-2 col-start-3 col-end-4 justify-end items-center">
            <div className="space-x-1">
                {Object.keys(lngs).map((lng) => (
                    <button className="text-2xl" key={lng} type="submit" onClick={() => { i18n.changeLanguage(lng), updateLang(lng) }}>
                        <p className="px-1">
                            <span className={`fi fi-${lngs[lng].code}`}></span>
                        </p>
                    </button>
                ))}
            </div>
            {/* <button className="hover:bg-base/30 p-2 rounded text-2xl" onClick={() => toggle()}>{theme == 'light' ? <BiSun /> : <BiMoon />}</button> */}
        </div>
    </>)
}

export default NavBar