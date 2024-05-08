import { useTranslation } from "react-i18next"
import ProjectsPage from "../components/ProjectsPage"
import ProjectCard from "../components/ProjectCard"
import { useEffect, useState } from "react"
import { sportCenterUl } from "../@types/types"
import i18next from "i18next"

const Infrastructure = () => {
    const { t } = useTranslation()
    const [ul, setul] = useState<sportCenterUl[]>([])
    const [ul2, setul2] = useState<sportCenterUl[]>([])
    useEffect(() => {
        const arr = []
        for (let i = 1; i < 5; i++) {
            const li = t(`projects.infrastructure.dairy.ul.li${i}`)
            const id = i
            arr.push({ li, id })
        }
        const arr2 = []
        for (let i = 1; i < 4; i++) {
            const li = t(`projects.infrastructure.reservoir.ul.li${i}`)
            const id = i
            arr2.push({ li, id })
        }
        setul(arr)
        setul2(arr2)
    }, [i18next.language])
    return (
        <ProjectsPage title={`${t('needs.ul.li4.subtitle')}`}>
            <ProjectCard>
                <h2 className="text-2xl">{t('projects.infrastructure.dairy.title')}</h2>
                <p>{t('projects.infrastructure.dairy.text')}</p>
                <p>{t('projects.infrastructure.dairy.text2')}</p>
                <div className="*:font-bold flex gap-5">
                    <p>{t('projects.infrastructure.dairy.budget')}</p>
                    <p>{t('projects.infrastructure.dairy.needed')}</p>
                </div>
                <ul className="text-center">
                    {ul.map((li) => (
                        <li key={li.id}>
                            {li.li}
                        </li>
                    ))}
                </ul>
            </ProjectCard>
            <ProjectCard>
                <h2 className="text-2xl">{t('projects.infrastructure.reservoir.title')}</h2>
                <p className="font-semibold">{t('projects.infrastructure.reservoir.subtitle')}</p>
                <p>{t('projects.infrastructure.reservoir.text1')}</p>
                <div className="*:font-bold flex gap-5">
                </div>
                <ul className="text-center">
                    {ul2.map((li) => (
                        <li key={li.id}>
                            &bull;
                            {` ${li.li}`}
                        </li>
                    ))}
                </ul>
                <p>{t('projects.infrastructure.reservoir.text2')}</p>
                <p>{t('projects.infrastructure.reservoir.text3')}</p>
                <div className="*:font-bold flex gap-5">
                    <p>{t('projects.infrastructure.reservoir.budget')}</p>
                    <p>{t('projects.infrastructure.reservoir.needed')}</p>
                </div>
            </ProjectCard>
        </ProjectsPage>
    )
}

export default Infrastructure