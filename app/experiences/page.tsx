"use client"

import { useTheme } from "next-themes";
import { degrees, experience, projects, projectsHeader } from "@/config/portfolio";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "@/config/theme";
import { ProjectImage } from "@/components/containers/project/project-image";
import { Link } from "@nextui-org/link";
import { Accordion, AccordionItem, Avatar, Image, button } from "@nextui-org/react";
import SoftwareSkill from "@/components/common/software-skills";
import { FaGithub } from "react-icons/fa";
import { ExperienceImage } from "@/components/containers/experience/experience-image";
import { ExperienceCard } from "@/components/containers/experience/experience-card";
import clsx from "clsx";

export default function ExperiencePage() {
  const { resolvedTheme } = useTheme();

  const theme = useMemo(() => {
    let theme = resolvedTheme == "dark" ? darkTheme : lightTheme;
    return theme;
  }, [resolvedTheme])

  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="flex flex-col gap-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center tracking-wider">
        <ExperienceImage className="w-full max-w-full" theme={theme} />
        <div className="w-full flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-semibold" style={{ color: theme.text }}>
            {experience.title}
          </h1>

          <h1 className="text-xl sm:text-2xl font-semibold" style={{ color: theme.text }}>
            {experience["subtitle"]}
          </h1>
          <p
            className=""
            style={{ color: theme.secondaryText }}
          >
            {experience["description"]}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 tracking-wider">
        <h1 className="text-xl sm:text-2xl font-semibold">{experience.title}</h1>
        <Accordion 
          variant="shadow" 
          selectionMode="single"
          itemClasses={{
            title: "font-semibold"
          }}
        >
          {experience.sections.experiences.map((job, id) => {
            return (
              <AccordionItem
                key={id}
                aria-label={job.title}
                title={job.company}
                subtitle={
                  <div className="flex flex-col gap-1">
                    <p>{job.duration}</p>
                    <p>{job.location}</p>
                  </div>
                }
              >
                <ExperienceCard experience={job} theme={theme} />
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  );
}
