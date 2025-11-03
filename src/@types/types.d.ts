import { ReactNode } from "react";

export type FCC = (props: { children: ReactNode }) => ReactNode;

export interface LanguageMap {
  [key: string]: {
    nativeName: string;
    code: string;
  };
}

export type testimonialCard = (props: { title: ReactNode; text: ReactNode }) => ReactNode;

export type imagesType = {
  id: number;
  src: string;
};

export type sportCenterUl = { li: string; id: number };
