"use client"

import { useTheme } from "next-themes";
import { contactPageData, degrees, experience, projects, projectsHeader, socialMediaLinks } from "@/config/portfolio";
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
import { SocialMedia } from "@/components/common/social-media";
import { BLogImage } from "@/components/containers/contact/blog-image";

export default function ContactPage() {
  const { resolvedTheme } = useTheme();

  const theme = useMemo(() => {
    let theme = resolvedTheme == "dark" ? darkTheme : lightTheme;
    return theme;
  }, [resolvedTheme])

  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="flex flex-col gap-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center tracking-wider">
        <div className="w-full flex items-center justify-center">
          <Image className="w-full h-[400px]" src={`./image/${contactPageData["contactSection"].profile_image_path}`} />
        </div>
        <div className="w-full flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-semibold" style={{ color: theme.text }}>
            {contactPageData.contactSection.title}
          </h1>

          {/* <h1 className="text-xl sm:text-2xl font-semibold" style={{ color: theme.text }}>
            {contactPageData.blogSection.subtitle}
          </h1> */}
          <p
            className=""
            style={{ color: theme.secondaryText }}
          >
            {contactPageData.contactSection.description}
          </p>
          <SocialMedia items={socialMediaLinks} className='w-full sm:justify-start' />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center tracking-wider">
        <div className="w-full flex flex-col gap-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-semibold" style={{ color: theme.text }}>
            {contactPageData.blogSection.title}
          </h1>
          <p
            className=""
            style={{ color: theme.secondaryText }}
          >
            {contactPageData.blogSection.subtitle}
          </p>
          <Link
            isExternal
            target="_blank"
            className={button({
              variant: "solid",
              color: "default",
              radius: "sm",
              className: "w-full max-w-fit mx-auto sm:mx-0"
            })}
            href={contactPageData["blogSection"].link}
          >
            My LinkedIn Profile
          </Link>
        </div>

        <div className="w-full flex items-center justify-center">
          <BLogImage theme={theme} />
        </div>
      </div>
    </section>
  );
}
