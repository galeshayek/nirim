import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const ErrorEelement = () => {
    const { t } = useTranslation()
    return (
        <div className="h-screen flex flex-col justify-start items-center">
            <p className="text-pop text-[25vw] font">404</p>
            <h1 className="text-5xl text-pop">{t('error.title')}</h1>
            <p className="text-xl pb-3">{t('error.text')}</p>
            <Link to={'/'}>
                <button className="bg-primary p-3 rounded text-xl">{t('error.btn')}</button>
            </Link>
        </div>
    )
}

export default ErrorEelement