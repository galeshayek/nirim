import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const needsSectionAnchor = () => {
    const needsSection = document.getElementById('needsSection')
    needsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export const footerSectionAnchor = () => {
    const needsSection = document.getElementById('footerSection')
    needsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
