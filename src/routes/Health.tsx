import { useTranslation } from "react-i18next"
import ProjectsPage from "../components/ProjectsPage"
import ProjectCard from "../components/ProjectCard"
import { useEffect, useState } from "react"
import { sportCenterUl } from "../@types/types"
import i18next from "i18next"

const Health = () => {
    const { t } = useTranslation()
    const [ul, setul] = useState<sportCenterUl[]>([])
    useEffect(() => {
        const arr = []
        for (let i = 1; i < 4; i++) {
            const li = t(`projects.health.sportsCenter.ul.li${i}`)
            const id = i
            arr.push({ li, id })
        }
        setul(arr)
    }, [i18next.language])
    return (
        <ProjectsPage title={`${t('needs.ul.li2.subtitle')}`}>
            <ProjectCard>
                <h2 className="text-2xl">{t('projects.health.therapies.title')}</h2>
                <p>{t('projects.health.therapies.text1')}</p>
                <p className="font-bold">{t('projects.health.therapies.budget')}</p>
            </ProjectCard>

            <ProjectCard>
                <h2 className="text-2xl">{t('projects.health.sportsCenter.title')}</h2>
                <p className="text-center">{t('projects.health.sportsCenter.text1')}</p>
                <p>{t('projects.health.sportsCenter.text2')}</p>
                <p className="font-semibold">{t('projects.health.sportsCenter.subtitle')}</p>
                <ul>
                    {ul.map((li) => (
                        <li key={li.id}>
                            {li.li}
                        </li>
                    ))}
                </ul>
                <p className="font-bold">{t('projects.health.sportsCenter.budget')}</p>
            </ProjectCard>

        </ProjectsPage>
    )
}

export default Health