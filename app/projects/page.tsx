"use client"

import { useTheme } from "next-themes";
import { degrees, projects, projectsHeader } from "@/config/portfolio";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "@/config/theme";
import { ProjectImage } from "@/components/containers/project/project-image";
import { Link } from "@nextui-org/link";
import { Image, button } from "@nextui-org/react";
import SoftwareSkill from "@/components/common/software-skills";
import { FaGithub } from "react-icons/fa";

export default function ducationPage() {
  const { resolvedTheme } = useTheme();

  const theme = useMemo(() => {
    let theme = resolvedTheme == "dark" ? darkTheme : lightTheme;
    return theme;
  }, [resolvedTheme])

  return (
    <section className="flex flex-col gap-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center tracking-wider">
        <ProjectImage className="w-full max-w-full" theme={theme} />
        <div className="w-full flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-semibold" style={{ color: theme.text }}>
            {projectsHeader.title}
          </h1>
          <p
            className=""
            style={{ color: theme.secondaryText }}
          >
            {projectsHeader["description"]}
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.data.map((repo, id) => {
          return(
            <Link
              key={id}
              isExternal
              href={repo.website}
              title={repo.name}
              target="_blank"
              className="w-full tracking-wider flex flex-col gap-6 rounded-lg border p-4 items-start text-foreground border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 transition-all scale-95 hover:scale-100"
            >
              <h1 className="text-xl sm:text-2xl font-medium">{repo.name}</h1>
              <p>{repo.description}</p>
              <SoftwareSkill logos={repo.languages} className="flex items-center justify-start gap-4" />
            </Link>
          )
        })}
      </div>

      <Link
        isExternal
        target="_blank"
        href="https://github.com/wilddog93?tab=repositories"
        className={button({
          variant: 'bordered',
          color: "default",
          className: "w-full max-w-fit mx-auto"
        })}
      >
        <span><FaGithub className="text-inherit size-5" /></span>
        More on Github.
      </Link>
    </section>
  );
}
