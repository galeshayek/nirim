import { useTranslation } from "react-i18next"
import ProjectCard from "../components/ProjectCard"
import ProjectsPage from "../components/ProjectsPage"

const Educational = () => {
    const { t } = useTranslation()
    return (<ProjectsPage title="Educational Facilities">
        <ProjectCard>
            <h2 className="text-2xl">{t('projects.educational.kinderGarden.title')}</h2>
            <p>{t('projects.educational.kinderGarden.text1')}</p>
            <div className="flex gap-3 *:font-bold">
                <p>{t('projects.educational.kinderGarden.budget')}</p>
                <p>{t('projects.educational.kinderGarden.needed')}</p>
            </div>
            <p className="font-medium">{t('projects.educational.kinderGarden.text2')}</p>
        </ProjectCard>
        <ProjectCard>
            <h2 className="text-2xl">{t('projects.educational.activities.title')}</h2>
            <p>{t('projects.educational.activities.text1')}</p>
            <p>{t('projects.educational.activities.budget')}</p>
        </ProjectCard>

        <ProjectCard>
            <h2 className="text-2xl">{t('projects.educational.youthClab.title')}</h2>
            <p>{t('projects.educational.youthClab.text1')}</p>
            <p>{t('projects.educational.youthClab.budget')}</p>
        </ProjectCard>

    </ProjectsPage>)
}

export default Educational