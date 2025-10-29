import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="footerSection"
      className="bg-primary flex flex-col items-center md:flex-row justify-center md:items-start gap-16 py-10"
      dir={i18next.dir()}
    >
      <section className="order-1">
        <h4 className=" text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-2">
          {" "}
          {t("footer.links.title")}
        </h4>
        <div className="text-oposite flex flex-col">
          <a className="hover:underline" href="http://www.nirim.co.il/">
            &bull;
            {t("footer.links.item1")}
          </a>
        </div>
      </section>

      <section className="order-2 text-oposite text-md">
        <h4 className=" text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-2">
          {t("footer.contact.title")}
        </h4>
        <ul className="text-lg">
          <li className="flex gap-2">
            <p>{t("footer.contact.phone")}</p>
            <a href="tel:+972524827994" className="hover:underline">
              {t("footer.contact.phoneNumber")}
            </a>
          </li>
          <li className="flex gap-2">
            <p>{t("footer.contact.email")}</p>
            <a href="mailto:nirim.r2g@nirim.co.il" className="hover:underline">
              nirim.r2g@nirim.co.il
            </a>
          </li>
        </ul>
        <div className="flex gap-3 justify-center pt-6 text-primary *:text-5xl *:inline-block *:bg-pop *:rounded-lg">
          <a
            className="hover:scale-105 transition"
            href="mailto:nirim.r2g@nirim.co.il"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IoMailOutline />
          </a>
          <a
            className="hover:scale-105 transition"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoWhatsapp />
          </a>
          <a
            className="hover:scale-105 transition"
            href="https://www.instagram.com/kibbutz_nirim/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoInstagram />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
