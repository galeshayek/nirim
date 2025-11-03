import { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import useWindowSize from "../hooks/useWindowSize";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import LangBtn from "../components/LangBtn";
import { t } from "i18next";

const Header = () => {
  const { width } = useWindowSize();
  const [index, setindex] = useState("z-10");
  const [open, setOpen] = useState(false);

  if (width >= 1024) {
    return (
      <header className="bg-primary grid px-10 h-16 sticky z-10 top-0 w-screen">
        <NavBar />
      </header>
    );
  } else {
    return (
      <header
        className={`${index} bg-primary sticky top-0 translate-y-0 py-4 pl-4 flex justify-between pr-10`}
      >
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <button
              onClick={() => {
                setOpen(true);
                setindex("");
              }}
            >
              <Menu className="text-3xl text-oposite" />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose />
            <div className="bg-oposite border-b-4 border-pop py-3 z-20">
              <NavBar />
            </div>
          </DrawerContent>
        </Drawer>
        <div className="lg:hidden self-center text-center">
          <a
            href={t("donation.link")}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-pop text-xl px-3 py-1 rounded-md"
          >
            {t("header.nav2")}
          </a>
        </div>
        <LangBtn />
      </header>
    );
  }
};

export default Header;
