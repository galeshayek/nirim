import { ReactNode } from "react";

export type FCC = (props: { children: ReactNode }) => ReactNode
export type ProjectPage = (props: { children: ReactNode, title: ReactNode }) => ReactNode

export interface LanguageMap {
    [key: string]: {
        nativeName: string,
        code: string,
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

export type EmailForm = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    receiveUpdates: boolean;
}

export type sportCenterUl = { li: string, id: number }

export type users = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    receiveUpdates: boolean,
    __v: number,
    _id: string
}

export type manager = { pass: string }