"use client"

import React, { useMemo } from 'react'
import { darkTheme, lightTheme } from "@/config/theme";
import { useTheme as useNextTheme } from "next-themes";
import { greeting, socialMediaLinks } from '@/config/portfolio';
import { FeelingProud } from './feeling-proud';
import { SocialMedia } from '@/components/common/social-media';
import { Link } from '@nextui-org/link';
import { button as buttonTheme } from "@nextui-org/react"

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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 items-center tracking-wider">
      <div className='w-full flex flex-col gap-6 text-center sm:text-left'>
        <h1 className="text-6xl font-semibold">{greeting.title}</h1>
        <p
          className="text-lg font-medium"
          style={{ color: colors.secondaryText }}
        >
          <span>I'm </span>
          <span style={{ color: colors.accentColor }}>
            {greeting.full_name}.{" "}
          </span>
          {greeting.subTitle}
        </p>

        <SocialMedia items={socialMediaLinks} className='sm:justify-start' />

        <div className="portfolio-repo-btn-div">
          <Link
            className={buttonTheme({
              variant: "flat",
              color: "primary",
              radius: "md"
            })}
            href='/contact'
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="w-full max-w-full h-auto">
        <FeelingProud className="w-full max-w-full h-auto" />
      </div>
    </div>
  )
}
