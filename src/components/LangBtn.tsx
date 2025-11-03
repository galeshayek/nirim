import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { lngs } from "../translation/lngs";
import { useContext } from "react";
import { langContext } from "../contexts/langContext";
import { useTranslation } from "react-i18next";

const LangBtn = () => {
  const { updateLang } = useContext(langContext);
  const { i18n } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 h-fit text-xl bg-oposite rounded">
          <Globe />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-textColor bg-oposite">
        {Object.keys(lngs).map((lng) => {
          return (
            <DropdownMenuItem
              key={lngs[lng].code}
              onClick={() => {
                i18n.changeLanguage(lng);
                updateLang(lng);
              }}
            >
              {lngs[lng].nativeName}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangBtn;
