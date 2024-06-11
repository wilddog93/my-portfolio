"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Fade } from "react-awesome-reveal";

export const Navbar = () => {

  const pathname = usePathname()

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <Fade duration={1000} direction='down'>
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "transition-all duration-300 ease-in-out",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-8",
            "lg:data-[active=true]:after:-bottom-1",
            "data-[active=true]:after:left-0",
            "lg:data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "lg:data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[4px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-[#126e82]",
          ],
        }}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              {/* <Logo /> */}
              <p className="font-bold text-[#126e82]">{siteConfig.name}</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="center">
          <ul className="flex gap-4 justify-center">
            {siteConfig.navItems.map((item) => {
              let active = pathname == item.href || pathname.includes(item.label)
              return (
                <NavbarItem isActive={active} key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      active ? "text-[#126e82] font-medium" : "",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              )
            })}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedIn}>
              <FaLinkedin className="text-default-500 size-5" />
            </Link>
            <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
              <FaDiscord className="text-default-500 size-5" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <FaGithub className="text-default-500 size-5" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navItems.map((item, index) => {
              let active = pathname == item.href || pathname.includes(item.label)
              return (
                <NavbarMenuItem isActive={active} key={`${item}-${index}`}>
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      active ? "text-[#126e82] font-medium" : "",
                    )}
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              )
            })}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </Fade>
  );
};
