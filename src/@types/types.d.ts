import { ReactNode } from "react";

export type FCC = (props: { children: ReactNode }) => ReactNode
export type ProjectPage = (props: { children: ReactNode, title: ReactNode }) => ReactNode

export interface LanguageMap {
    [key: string]: {
        nativeName: string,
        flag: string,
    };
}

export type testimonialCard = (props: { title: ReactNode, text: ReactNode }) => ReactNode

export type imagesType = {
    id: number, src: string
}

export type Form = {
    name: {
        first: string,
        last: string
    },
    email: string
}

export type sportCenterUl = { li: string, id: number }