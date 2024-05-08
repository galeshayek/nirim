import { FCC } from "../@types/types"

const ProjectCard: FCC = ({ children }) => {
    return (
        <div className="bg-primary/25 text-center flex flex-col items-center gap-2 p-3 rounded-lg">
            {children}
        </div>
    )
}

export default ProjectCard