export const needsSectionAnchor = () => {
    const needsSection = document.getElementById('needsSection')
    needsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export const footerSectionAnchor = () => {
    const needsSection = document.getElementById('footerSection')
    needsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
// export const needsSectionAnchor = () => {
//     const needsSection = document.getElementById('projects')
//     needsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
// }