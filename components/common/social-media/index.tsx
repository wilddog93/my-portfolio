import { button as buttonTheme } from "@nextui-org/react"
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import React, { FC } from "react";
import { IconType } from "react-icons";
import { Icon } from "../icons";

type SocialMedia = {
  link: string;
  icon: IconType;
  style?: any;
  className?: string | undefined;
};

type Props = {
  items: SocialMedia[];
  className?: string | undefined
}

export const SocialMedia: FC<Props> = ({ items, className }) => {
  return (
    <div className={clsx(
      "w-full flex items-center justify-center gap-2",
      className
    )}>
      {items.map((social, index) => {
        return (
          <Link
            href={social.link}
            isExternal
            className={buttonTheme({
              variant: "light",
              color: "primary",
              isIconOnly: true,
              radius: "full",
              size: "md"
            })}
          >
            <Icon className={clsx(
              "size-8",
              social.className
            )} icon={social.icon} style={social.style} />
          </Link>
        )
      })}
    </div>
  );
}
