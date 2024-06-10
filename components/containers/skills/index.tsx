import React, { useMemo } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { ThemeProps, darkTheme, lightTheme } from "@/config/theme";
import { SkillSection } from "./skill-section";

export default function Skills() {
  const { resolvedTheme } = useNextTheme();

  const theme: ThemeProps = useMemo(() => {
    let theme = resolvedTheme == "dark" ? darkTheme : lightTheme;
    return theme;
  }, [resolvedTheme])

  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className="text-center text-6xl font-semibold mb-10" style={{ color: theme.text }}>
        Here's what I do
      </h1>
      <SkillSection theme={theme} />
    </div>
  );
}
