import { Button, Tooltip } from "@nextui-org/react";
import React, { FC, Key } from "react";
import { Icon } from "../icons";
import { IconType } from "react-icons";
import clsx from "clsx";

type LogoProps = {
  skillName?: string;
  icon: IconType,
  className?: string | undefined;
  style?: any;
}

type Props = {
  logos: LogoProps[];
  className?: string | undefined;
  key?: Key | undefined;
}

const SoftwareSkill: FC<Props> = ({ logos, className, ...props }) => {
  return (
    <ul {...props} className={clsx(
      "relative w-full flex",
      className
    )}>
      {logos.map((logo, index) => {
        return (
          <Tooltip key={index} showArrow={true} content={logo.skillName}>
            <Button isIconOnly radius="full" variant="light" size="md">
              <Icon icon={logo.icon} className={clsx("size-10", logo.className)} style={logo.style} />
            </Button>
          </Tooltip>
        );
      })}
    </ul>
  );
}

export default SoftwareSkill;
