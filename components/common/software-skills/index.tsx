import { Button, Tooltip } from "@nextui-org/react";
import React, { FC } from "react";
import { Icon } from "../icons";
import { IconType } from "react-icons";
import clsx from "clsx";

type LogoProps = {
  skillName?: string;
  icon: IconType,
  style?: any;
  className?: string | undefined;
}

type Props = {
  logos: LogoProps[]
}

const SoftwareSkill: FC<Props> = ({ logos }) => {
  return (
    <ul className="relative w-full flex flex-wrap gap-4 items-center justify-center">
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
