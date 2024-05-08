import { FCC } from "../../@types/types"

const PrimaryBtn: FCC = ({ children }) => {
    return (
        <button className="bg-alabaster px-5 py-2 rounded-lg text-md">{children}</button>
    )
}

export default PrimaryBtn