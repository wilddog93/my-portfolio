"use client"

import { useTheme } from "next-themes";
import { degrees } from "@/config/portfolio";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "@/config/theme";
import { EducationImage } from "@/components/containers/education/education-image";
import { Educations } from "@/components/containers/education";
import { Certifications } from "@/components/containers/certification";

export default function EducationPage() {
  const { resolvedTheme } = useTheme();

  const theme = useMemo(() => {
    let theme = resolvedTheme == "dark" ? darkTheme : lightTheme;
    return theme;
  }, [resolvedTheme])

  return (
    <section className="flex flex-col gap-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center tracking-wider">
        <EducationImage className="w-full max-w-full" theme={theme} />
        <div className="w-full flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-semibold" style={{ color: theme.text }}>
            Education
          </h1>
          <h3 className="text-lg sm:text-xl font-medium" style={{ color: theme.text }}>
            Basic Qualification and Certifications
          </h3>
          <p
            className="experience-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            I actively participate in Glints Academy and other tech-related
            activities. Below are some of my major certifications.
          </p>
        </div>
      </div>

      <Educations theme={theme} />
      <Certifications theme={theme} />
    </section>
  );
}
