import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { Button } from "./ui/button";
import { HiOutlineMenu } from "react-icons/hi";

type HeaderMenuProps = {};

export const HeaderMenu: FC = () => {
  return (
    <div className="flex items-center justify-between h-16 md:h-20 w-full pr-3 md:pr-6 pl-2 md:pl-4">
      <div className={`hidden md:block`}>
        <Image src="/logo.png" alt="logo" width={254} height={49} />
      </div>
      <div className={`md:hidden`}>
        <Image src="/logo.png" alt="logo" width={160} height={20} />
      </div>
      <NavigationMenu className={`hidden md:block`}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} flex gap-1 items-center bg-transparent text-lime-900 hover:bg-lime-100`}
              href="https://github.com"
              target="_blank"
            >
              <p>DigDAOについて</p>
              <HiOutlineExternalLink />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} flex gap-1 items-center bg-transparent text-lime-900 hover:bg-lime-100`}
              href="https://github.com/Dig-DAO/vc-verifier"
              target="_blank"
            >
              <BsGithub />
              <p>Github</p>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className={`md:hidden`}>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={`outline`}
              className={`bg-lime-50 border-lime-200 border-[1px] text-lime-900 active:bg-transparent hover:bg-transparent`}
            >
              <HiOutlineMenu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-lime-50">
            <div
              className={`flex flex-col items-start justify-start gap-4 py-8`}
            >
              <Link
                href="https://note.com/mariroom/n/nd123a8a18611"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  className={`flex gap-1 items-center text-lime-900 text-xl hover:bg-lime-100`}
                >
                  <p>DigDAOについて</p>
                  <HiOutlineExternalLink />
                </Button>
              </Link>
              <Link
                href="https://github.com/Dig-DAO/vc-verifier"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  className={`flex gap-1 items-center text-lime-900 text-xl hover:bg-lime-100`}
                >
                  <BsGithub />
                  <p>Github</p>
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
