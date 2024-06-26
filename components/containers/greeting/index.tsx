"use client"

import React, { useMemo } from 'react'
import { darkTheme, lightTheme } from "@/config/theme";
import { useTheme as useNextTheme } from "next-themes";
import { greeting, socialMediaLinks } from '@/config/portfolio';
import { FeelingProud } from './feeling-proud';
import { SocialMedia } from '@/components/common/social-media';
import { Link } from '@nextui-org/link';
import { button as buttonTheme } from "@nextui-org/react";

// animate
import { Fade } from "react-awesome-reveal";

export const Greeting = () => {
  const { resolvedTheme } = useNextTheme();

  const colors = useMemo(() => {
    let _condTheme = resolvedTheme == "dark" ? true : false;
    if (_condTheme) {
      return darkTheme;
    }
    return lightTheme;

  }, [resolvedTheme]);

  return (
    <Fade duration={1000} direction='up' triggerOnce>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center tracking-wider">
        <div className='w-full flex flex-col gap-6 text-center sm:text-left'>
          <h1 className="text-4xl sm:text-6xl font-semibold">{greeting.title}</h1>
          <p
            className="text-lg sm:text-xl font-medium"
            style={{ color: colors.secondaryText }}
          >
            <span>I'm </span>
            <span style={{ color: colors.accentColor }}>
              {greeting.full_name}.{" "}
            </span>
            {greeting.subTitle}
          </p>

          <SocialMedia items={socialMediaLinks} className='sm:justify-start' />

          <Link
            className={buttonTheme({
              variant: "solid",
              color: "primary",
              radius: "lg",
              className: "w-full max-w-fit mx-auto sm:mx-0"
            })}
            href='/contacts'
          >
            Contact Me
          </Link>
        </div>

        <div className="w-full max-w-full h-auto">
          <FeelingProud className="w-full max-w-full" />
        </div>
      </div>
    </Fade>
  )
}
