import { button as buttonTheme } from "@nextui-org/react"
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import React, { FC } from "react";
import { IconType } from "react-icons";
import { Icon } from "../icons";

type SocialMedia = {
  link: string;
  icon: IconType;
};

type Props = {
  items: SocialMedia[];
  className?: string | undefined
}

export const SocialMedia: FC<Props> = ({ items, className }) => {
  return (
    <div className={clsx(
      "w-full max-w-xs flex items-center justify-center gap-2",
      className
    )}>
      {items.map((social, index) => {
        return (
          <Link
            href={social.link}
            isExternal
            className={buttonTheme({
              variant: "flat",
              color: "primary",
              isIconOnly: true,
              radius: "full",
              size: "md"
            })}
          >
            <Icon icon={social.icon} />
          </Link>
        )
      })}
    </div>
  );
}
