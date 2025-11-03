import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contexts/langContext";
import { Link, NavLink } from "react-router";
import { footerSectionAnchor, needsSectionAnchor } from "../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LangBtn from "../LangBtn";

const NavBar = () => {
  const { lang } = useContext(langContext);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <div className=" max-lg:hidden self-end pb-3 max-lg:text-center max-lg:pb-4 lg:pl-10">
        <a
          href={t("donation.link")}
          target="_blank"
          rel="noreferrer noopener"
          className="bg-pop text-lg px-3 py-2 rounded-md"
        >
          {t("header.nav2")}
        </a>
      </div>
      <ul
        className=" lg:col-start-2 lg:col-end-2 flex lg:flex-row flex-col lg:text-oposite text-textColor justify-between items-center lg:items-end lg:pb-2  md:*:text-lg *:text-xl "
        dir={i18n.dir(lang)}
      >
        <li>
          <Link to={"/"}>{t("header.nav1")}</Link>
        </li>
        <li>
          <button onClick={needsSectionAnchor}>{t("header.nav2")}</button>
        </li>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>{t("header.nav3")}</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-textColor bg-oposite border-pop lg:border-t-0 p-2 rounded-b-md">
            <DropdownMenuItem asChild>
              <NavLink to={"/educationalfacilities"} className="hover:underline">
                {t("needs.ul.li1.subtitle")}
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to={"/health"} className="hover:underline">
                {t("needs.ul.li2.subtitle")}
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to={"/community"} className="hover:underline">
                {t("needs.ul.li3.subtitle")}
              </NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to={"/infrastructure"} className="hover:underline">
                {t("needs.ul.li4.subtitle")}
              </NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <li>
          <button onClick={footerSectionAnchor}>{t("header.nav4")}</button>
        </li>

        <li>
          <a
            className="gradient"
            href="https://www.peach-in.com/cmp/Kibbutz-Nirim"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("header.nav5")}
          </a>
        </li>
      </ul>
      <div className="lg:flex hidden gap-2 col-start-3 col-end-4 justify-end items-center">
        <LangBtn />
      </div>
    </>
  );
};

export default NavBar;
