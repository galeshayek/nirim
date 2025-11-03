import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import i18next from "i18next";

interface ProjectCardProps {
  children: ReactNode;
  className?: string;
}

const ProjectCard = ({ children, className }: ProjectCardProps) => {
  return (
    <div
      dir={i18next.dir()}
      className={cn(
        "bg-primary/25 text-center flex flex-col items-center gap-2 p-6 rounded-lg border",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ProjectCard;
