import { useTranslation } from "react-i18next"
import ProjectsPage from "../components/ProjectsPage"
import ProjectCard from "../components/ProjectCard"
import { useEffect, useState } from "react"
import { sportCenterUl } from "../@types/types"
import i18next from "i18next"

const Community = () => {
    const { t } = useTranslation()
    const [ul, setul] = useState<sportCenterUl[]>([])
    const [ul2, setul2] = useState<sportCenterUl[]>([])
    useEffect(() => {
        const arr = []
        for (let i = 1; i < 6; i++) {
            const li = t(`projects.community.colorfulPlayground.ul.li${i}`)
            const id = i
            arr.push({ li, id })
        }
        const arr2 = []
        for (let i = 1; i < 3; i++) {
            const li = t(`projects.community.pool.ul.li${i}`)
            const id = i
            arr2.push({ li, id })
        }
        setul(arr)
        setul2(arr2)
    }, [i18next.language])
    return (
        <ProjectsPage title={t('needs.ul.li3.subtitle')}>
            <ProjectCard>
                <h2 className="text-2xl">{t('projects.community.colorfulPlayground.title')}</h2>
                <p>{t('projects.community.colorfulPlayground.text1')}</p>
                <p className="font-semibold">{t('projects.community.colorfulPlayground.subtitle')}</p>
                <ul className="text-center">
                    {ul.map((li) => (
                        <li key={li.id}>
                            {li.li}
                        </li>
                    ))}
                </ul>
                <p className="font-bold">{t('projects.community.colorfulPlayground.budget')}</p>
            </ProjectCard>

            <ProjectCard>
                <h2 className="text-2xl">{t('projects.community.diningHall.title')}</h2>
                <p>{t('projects.community.diningHall.text1')}</p>
                <p className="font-semibold">{t('projects.community.diningHall.highlight1')}</p>
                <p className="">{t('projects.community.diningHall.text2')}</p>
                <p className="font-bold">{t('projects.community.diningHall.highlight2')}</p>
                <p className="">{t('projects.community.diningHall.text3')}</p>
            </ProjectCard>

            <ProjectCard>
                <h2 className="text-2xl">{t('projects.community.groceryStore.title')}</h2>
                <p>{t('projects.community.groceryStore.text1')}</p>
                <p className="">{t('projects.community.groceryStore.text2')}</p>
                <p className="font-bold">{t('projects.community.groceryStore.budget')}</p>
            </ProjectCard>

            <ProjectCard>
                <h2 className="text-2xl">{t('projects.community.communityGarden.title')}</h2>
                <p>{t('projects.community.communityGarden.text1')}</p>
                <p className="font-bold">{t('projects.community.communityGarden.budget')}</p>
            </ProjectCard>

            <ProjectCard>
                <h2 className="text-2xl">{t('projects.community.pool.title')}</h2>
                <p>{t('projects.community.pool.text1')}</p>
                <p className="font-semibold">{t('projects.community.pool.subtitle')}</p>
                <ul className="text-center">
                    {ul2.map((li) => (
                        <li key={li.id}>
                            {li.li}
                        </li>
                    ))}
                </ul>
                <p className="font-bold">{t('projects.community.pool.budget')}</p>

            </ProjectCard>
        </ProjectsPage>
    )
}

export default Community