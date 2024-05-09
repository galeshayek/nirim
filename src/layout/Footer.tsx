import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { BiArrowBack, BiLogoFacebook, BiLogoWhatsapp, } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form"
import { EmailForm } from "../@types/types";
import { emailPattern } from "../validation/regex";
import { postEmail } from "../services/axiosPost";
import { useState } from "react";
import PropagateLoader from "react-spinners/BeatLoader";




const Footer = () => {
    const { t } = useTranslation()
    const [errorMsg, seterrorMsg] = useState('')
    const [loading, setloading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EmailForm>({
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<EmailForm> = (data) => {
        setloading(true)
        postEmail(data)
            .then(r => {
                setloading(false)
                console.log(r)
                switch (r.data.statusCode) {
                    case 400:
                        seterrorMsg(`${t('footer.subscribe.errorMsg1')}`);
                        break;
                    case 200:
                        seterrorMsg(`${t('footer.subscribe.errorMsg2')}`);
                        reset();
                        break;
                }
            }
            )
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <footer id="footerSection" className="bg-primary flex flex-col items-center md:flex-row justify-center md:items-start gap-16 py-10" dir={i18next.dir()}>
            <section className="order-1">
                <h4 className=" text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-2">                        {t('footer.links.title')}
                </h4>
                <div className="text-oposite flex flex-col">
                    <a className="hover:underline" href="">
                        &bull;
                        {t('footer.links.item1')}
                    </a>
                    <a className="hover:underline" href="">
                        &bull;
                        {t('footer.links.item2')}
                    </a>
                </div>
            </section>

            <section className="order-2 text-oposite text-md">
                <h4 className=" text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-2">{t('footer.contact.title')}</h4>
                <ul className="text-lg">
                    <li className="flex gap-2">
                        <p>{t('footer.contact.phone')}</p>
                        <a href="tel:+972524827994" className="hover:underline">{t('footer.contact.phoneNumber')}</a>
                    </li>
                    <li className="flex gap-2">
                        <p>{t('footer.contact.email')}</p>
                        <a href="mailto:nirim.r2g@nirim.co.il" className="hover:underline">nirim.r2g@nirim.co.il</a>
                    </li>
                </ul>
                <div className="flex gap-3 justify-center pt-6 text-primary *:text-5xl *:inline-block *:bg-pop *:rounded-lg">
                    <a className="hover:scale-105 transition" href="mailto:nirim.r2g@nirim.co.il" target="_blank" rel="noreferrer noopener">
                        <IoMailOutline />
                    </a>
                    <a className="hover:scale-105 transition" href="https://wa.me/" target="_blank" rel="noreferrer noopener">
                        <BiLogoWhatsapp />
                    </a>
                    <a className="hover:scale-105 transition" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                        <BiLogoFacebook />
                    </a>
                </div>
            </section>

            <section>
                <h4 className="order-3 text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-5">{t('footer.subscribe.title')}</h4>
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3">
                    <div>
                        <input
                            className="border-4 border-pop rounded p-1"
                            type="email"
                            autoComplete="email"
                            aria-label={t('footer.subscribe.ariaLabel')}
                            placeholder={t('footer.subscribe.placeholder')}
                            {
                            ...register(
                                "email", {
                                required: true,
                                pattern: {
                                    value: emailPattern,
                                    message: `${t('footer.subscribe.errorMsg')}`
                                }
                            }
                            )
                            }
                        />
                        {errors.email &&
                            <p className="text-pop text-center">{errors.email?.message}</p>
                        }
                        <div className={`${loading == true ? "flex" : 'hidden'} justify-center pt-2 pb-4`}>
                            <PropagateLoader
                                color='rgba(var(--primary))'
                                loading={loading}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                        {errorMsg &&
                            <p className="text-pop text-center">{errorMsg}</p>
                        }
                    </div>

                    <button className="bg-pop flex justify-center items-center gap-2 rounded px-3 text-xl hover:scale-110 transition">{t('footer.subscribe.button')} <span className={i18next.dir() == 'ltr' && 'rotate-180' || 'rotate-0'}><BiArrowBack /></span></button>
                </form>
            </section>
        </footer>
    )
}

export default Footer