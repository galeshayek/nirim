import { testimonialCard } from "../../@types/types"


const Testimonial: testimonialCard = ({ title, text }) => {
    return (
        <div className="flex flex-col justify-center gap-3 shadow-lg bg-pop/25 aspect-[6/2] rounded px-4 m-4">
            <p className="text-md">{text}</p>
            <h3 className="text-2xl text-center">{title}</h3>
        </div>
    )
}

export default Testimonial