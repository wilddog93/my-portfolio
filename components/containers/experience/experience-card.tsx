import React, { FC, Key } from "react";
import { ThemeProps } from "@/config/theme";
import { Image, Link } from "@nextui-org/react";
import clsx from "clsx";

type ExperienceProps = {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
  duration: string;
  location: string;
  description: string;
  color: string;
}

type Props = {
  theme: ThemeProps;
  key?: Key | undefined;
  className?: string | undefined;
  experience: ExperienceProps
}

export const ExperienceCard: FC<Props> = ({ theme, experience, className, ...props }) => {
  return (
    <div
      className={clsx(
        "w-full flex items-center gap-4 mb-5 border-2 rounded-lg p-4"
        )}
      >
      <div
        style={{ borderColor: theme.avatarMisc }}
        className="overflow-hidden w-full max-w-fit h-full border rounded-xl bg-white p-2">
        <Image
          className="object-contain object-center w-[100px] h-[80px]"
          src={`/image/logo/${experience.logo_path}`}
        />
      </div>

      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="experience-card-title" style={{ color: theme.text }}>
            {experience["title"]}
          </h3>
          <p
            className="experience-card-company"
            style={{ color: theme.secondaryText }}
          >
            <Link
              isExternal
              href={experience["company_url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Company Website
            </Link>
          </p>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {experience["description"]}
        </p>
      </div>
    </div>
  );
};
