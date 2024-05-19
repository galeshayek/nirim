import { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import useWindowSize from "../hooks/useWindowSize";

import {
    Drawer,
    DrawerBody, DrawerOverlay,
    DrawerContent, useDisclosure
} from '@chakra-ui/react';
import { BiMenu, } from "react-icons/bi";
import LangBtn from "../components/LangBtn";
import { t } from "i18next";
// import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
    const { width } = useWindowSize()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
    const [index, setindex] = useState('z-10')

    if (width >= 1024) {
        return (
            <header className="bg-primary grid grid-cols-3 px-10 h-16 sticky z-10 top-0 w-screen">
                <NavBar />
            </header >
        )
    } else {
        return (
            <header className={`${index} bg-primary sticky top-0 translate-y-0 py-4 pl-4 flex justify-between pr-10`}>
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
                        <DrawerBody>
                            <div className="bg-oposite border-b-4 border-pop py-3 z-20">
                                <NavBar />
                            </div>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <div className="lg:hidden self-center text-center">
                    <a href={t('donation.link')} target="_blank" rel="noreferrer noopener" className="bg-pop text-xl px-3 py-1 rounded-md">
                        {t('header.nav2')}
                    </a>
                </div>
                <LangBtn />
            </header >
        )
    }
}

export default Header