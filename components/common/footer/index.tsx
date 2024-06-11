"use client"

import { greeting } from "@/config/portfolio";
import React, { useMemo } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { darkTheme, lightTheme } from "@/config/theme";
import { Fade } from "react-awesome-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export const Footer = () => {
  const { resolvedTheme } = useNextTheme();

  const theme = useMemo(() => {
    let theme = resolvedTheme == "dark" ? darkTheme : lightTheme;
    return theme;
  }, [resolvedTheme])

  return (
    <Fade duration={1000} direction="down">
      <div className="w-full flex flex-col gap-4 items-center p-10">
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          {greeting.title2}&trade; 1993 - {new Date().getFullYear()}
        </p>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Template design inspired by Harikrushn
        </p>
      </div>
    </Fade>
  );
}
