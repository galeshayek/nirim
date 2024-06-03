import i18next from "i18next"
import { testimonialCard } from "../../@types/types"


const Testimonial: testimonialCard = ({ title, text }) => {
    return (
        <div dir={i18next.dir()} className="flex flex-col justify-center gap-3 shadow-lg bg-slate-700 text-oposite aspect-[6/2] rounded px-4 m-4">
            <p className="text-md">"{text}"</p>
            <h3 className="text-2xl text-center">{title}</h3>
        </div>
    )
}

export default Testimonial