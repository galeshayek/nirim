import { FCC } from "../@types/types"

const Title: FCC = ({ children }) => {
    return (
        <h2 className="text-5xl border-b-4 font-medium border-primary mb-6 text-center">{children}</h2>
    )
}

export default Title