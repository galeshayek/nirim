import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { BiArrowBack, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmailForm } from "../../@types/types";
import { emailPattern } from "../../validation/regex";
import { postEmail } from "../../services/axiosPost";
import { useState } from "react";
import PropagateLoader from "react-spinners/BeatLoader";
import { phonePattern } from "../../validation copy/validation";
import { Checkbox } from '@chakra-ui/react';
import style from './footer.module.scss';

const Footer = () => {
    const { t } = useTranslation()
    const [errorMsg, seterrorMsg] = useState('')
    const [loading, setloading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setError,
        clearErrors
    } = useForm<EmailForm>({
        mode: 'all'
    })

    const onSubmit: SubmitHandler<EmailForm> = (data) => {
        setloading(true)
        postEmail(data)
            .then(r => {
                setloading(false)
                console.log(r)
                switch (r.data.statusCode) {
                    case 400:
                        seterrorMsg(`${t('footer.subscribe.email.errorMsg1')}`);
                        break;
                    case 200:
                        seterrorMsg(`${t('footer.subscribe.email.errorMsg2')}`);
                        reset();
                        break;
                }
            }
            )
            .catch((e) => {
                console.log(e)
            })
    }

    const onError = () => {
        setError('receiveUpdates', { type: 'required' }, { shouldFocus: false });
        setTimeout(() => {
            clearErrors('receiveUpdates');
        }, 500); // Reset the error after animation
    };

    return (
        <footer id="footerSection" className="bg-primary flex flex-col items-center md:flex-row justify-center md:items-start gap-16 py-10" dir={i18next.dir()}>
            <section className="order-1">
                <h4 className=" text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-2">                        {t('footer.links.title')}
                </h4>
                <div className="text-oposite flex flex-col">
                    <a className="hover:underline" href="http://www.nirim.co.il/">
                        &bull;
                        {t('footer.links.item1')}
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
                    <a className="hover:scale-105 transition" href="https://www.instagram.com/kibbutz_nirim/" target="_blank" rel="noreferrer noopener">
                        <BiLogoInstagram />
                    </a>
                </div>
            </section>

            <section>
                <h4 className="order-3 text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-5">{t('footer.subscribe.title')}</h4>
                <form
                    noValidate
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="flex flex-col gap-3 w-fit">

                    <div className="flex flex-col gap-2">
                        <div className="flex max-md:flex-col gap-3">
                            <div className="w-12/12 md:w-6/12">
                                <input
                                    className="border-4 border-pop rounded p-1"
                                    type="text"
                                    autoComplete="given-name"
                                    aria-label={t('footer.subscribe.firstName.ariaLabel')}
                                    placeholder={t('footer.subscribe.firstName.placeholder')}
                                    {
                                    ...register(
                                        "firstName", {
                                        required: `${t('footer.subscribe.firstName.required')}`,
                                        minLength: {
                                            value: 2,
                                            message: `${t('footer.subscribe.firstName.min')}`
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: `${t('footer.subscribe.firstName.max')}`
                                        }
                                    }
                                    )
                                    }
                                />
                                {errors.firstName &&
                                    <p className="text-oposite text-center">{errors.firstName?.message}</p>
                                }
                            </div>


                            <div className="w-12/12 md:w-6/12">

                                <input
                                    className="border-4 border-pop rounded p-1"
                                    type="text"
                                    autoComplete="family-name"
                                    aria-label={t('footer.subscribe.lastName.ariaLabel')}
                                    placeholder={t('footer.subscribe.lastName.placeholder')}
                                    {
                                    ...register(
                                        "lastName", {
                                        required: `${t('footer.subscribe.lastName.required')}`,
                                        minLength: {
                                            value: 2,
                                            message: `${t('footer.subscribe.lastName.min')}`
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: `${t('footer.subscribe.lastName.max')}`
                                        }
                                    }
                                    )
                                    }
                                />
                                {errors.lastName &&
                                    <p className="text-oposite text-center">{errors.lastName?.message}</p>
                                }
                            </div>

                        </div>

                        <div>
                            <input
                                className="border-4 border-pop rounded p-1 w-full"
                                type="email"
                                autoComplete="email"
                                aria-label={t('footer.subscribe.email.ariaLabel')}
                                placeholder={t('footer.subscribe.email.placeholder')}
                                {
                                ...register(
                                    "email", {
                                    required: `${t('footer.subscribe.email.required')}`,
                                    pattern: {
                                        value: emailPattern,
                                        message: `${t('footer.subscribe.email.errorMsg')}`
                                    }
                                }
                                )
                                }
                            />
                            {errors.email &&
                                <p className="text-oposite text-center">{errors.email?.message}</p>
                            }
                        </div>


                        <div>
                            <input
                                className="border-4 border-pop rounded p-1 w-full"
                                type="tel"
                                autoComplete="tel"
                                aria-label={t('footer.subscribe.number.ariaLabel')}
                                placeholder={t('footer.subscribe.number.placeholder')}
                                {
                                ...register(
                                    "phoneNumber", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: phonePattern,
                                        message: `${t('footer.subscribe.number.msg')}`
                                    }
                                }
                                )
                                }
                            />
                            {errors.phoneNumber &&
                                <p className="text-oposite text-center">{errors.phoneNumber?.message}</p>
                            }
                        </div>

                        <div>
                            <div className={errors.receiveUpdates ? style.shake : "pt-1 flex items-center gap-2"}>
                                <Checkbox
                                    className="size-5 text-primary focus:ring-primary bg-oposite rounded"
                                    type="checkbox"
                                    id="updatesCheckbox"
                                    {
                                    ...register("receiveUpdates", {
                                        required: true
                                    })
                                    }
                                />
                                <label
                                    aria-label={t('footer.subscribe.checkBox.ariaLabel')}
                                    htmlFor="updatesCheckbox" className={errors.receiveUpdates ? style.error : "font-medium text-sm text-pop"}>
                                    {t('footer.subscribe.checkBox.label')}
                                </label>
                            </div>


                        </div>
                    </div>
                    <div className={`${loading == true ? "flex" : 'hidden'} justify-center pt-2 pb-4`}>
                        <PropagateLoader
                            color='rgba(var(--pop))'
                            loading={loading}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>

                    <button className="bg-pop flex justify-center items-center gap-2 rounded px-3 text-xl hover:scale-110 transition">{t('footer.subscribe.button')} <span className={i18next.dir() == 'ltr' && 'rotate-180' || 'rotate-0'}><BiArrowBack /></span></button>
                    {errorMsg &&
                        <p className="text-oposite text-center font-medium text-xl">{errorMsg}</p>
                    }
                </form>
            </section>
        </footer>
    )
}

export default Footer