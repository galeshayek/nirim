import { useContext, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import useWindowSize from "../hooks/useWindowSize";
import { lngs } from "../translation/lngs";

import {
    Drawer,
    DrawerBody, DrawerHeader,
    DrawerOverlay,
    DrawerContent, useDisclosure
} from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { langContext } from "../contexts/langContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
    const { width } = useWindowSize()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
    const { i18n } = useTranslation();
    const { updateLang } = useContext(langContext);
    const { toggle, theme } = useContext(ThemeContext);
    const [index, setindex] = useState('z-10')

    if (width >= 1024) {
        return (
            <header className="bg-primary grid grid-cols-3 h-16 sticky z-10 top-0 w-screen">
                <NavBar />
            </header >
        )
    } else {
        return (
            <header className={`${index} bg-primary sticky top-0 translate-y-0 py-4 pl-4`}>
                <button ref={btnRef} onClick={() => { onOpen(), setindex('') }}>
                    <BiMenu className="text-3xl text-oposite" />
                </button>
                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    blockScrollOnMount={false}
                >
                    <DrawerOverlay onClick={() => { onClose(), setindex('z-10') }} />
                    <DrawerContent>
                        <DrawerHeader>
                            <div className="bg-oposite flex gap-5 z-20">
                                <div className="space-x-1 *:border-2 *:rounded *:border-primary *:px-2">
                                    {Object.keys(lngs).map((lng) => (
                                        <button className="text-2xl" key={lng} type="submit" onClick={() => { i18n.changeLanguage(lng), updateLang(lng) }}>
                                            {lngs[lng].flag}
                                        </button>
                                    ))}
                                </div>
                                <button className="hover:bg-oposite/30 p-2 rounded text-2xl ml-auto mr-2" onClick={() => toggle()}>{theme == 'light' ? <BiSun /> : <BiMoon />}</button>
                            </div>
                        </DrawerHeader>

                        <DrawerBody>
                            <div className="bg-oposite border-b-4 border-pop pb-3 z-20">
                                <NavBar />
                            </div>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </header >
        )
    }
}

export default Header