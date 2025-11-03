import { createContext, useState } from "react";
import { FCC } from "../@types/types";
import i18next from "i18next";

interface LangContextType {
  lang: string;
  updateLang: (lng: string) => void;
}

export const langContext = createContext<LangContextType>({
  lang: '',
  updateLang: () => { }
})

const LangProvider: FCC = ({ children }) => {
  const [lang, setLang] = useState(i18next.language);
  const updateLang = (lng: string) => {
    setLang(lng)
  }

  return (
    <langContext.Provider value={{ lang, updateLang }}>
      {children}
    </langContext.Provider>
  )
}

export default LangProvider
