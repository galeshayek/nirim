import { ProjectPage } from "../@types/types"

const ProjectsPage: ProjectPage = ({ title, children }) => {
    return (<div className="pb-4">
        <h1 className="bg-pop text-center text-4xl p-2 mb-2">{title}</h1>
        <div className="text-lg space-y-2 w-10/12 mx-auto">{children}</div>
    </div>
    )
}

export default ProjectsPage