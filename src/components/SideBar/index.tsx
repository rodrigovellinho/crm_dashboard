"use client";

import {
  Cog,
  BarChart,
  CheckSquare,
  Flag,
  HomeIcon,
  SquareStack,
  Users,
  Menu,
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import Profile from "./Profile";
import Button from "../Button";
import { useMemo, useState } from "react";
import useBreakpoint from "@/hooks/useBreakpoint";

const SidebarData = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Produtos",
    icon: BarChart,
    href: "/products",
  },
  {
    title: "Projects",
    icon: SquareStack,
    href: "/",
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    href: "/",
  },
  {
    title: "Reporting",
    icon: Flag,
    href: "/",
  },
  {
    title: "Usuários",
    icon: Users,
    href: "/",
  },
];

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const breakpoint = useBreakpoint();

  console.log("breakpoint", breakpoint);

  const isMenuVisible = useMemo(() => {
    if (breakpoint == "lg" || breakpoint == "xl") return true;
    else if (breakpoint !== "lg" && breakpoint !== "xl" && isMenuOpen === false)
      return false;
    else return true;
  }, [breakpoint, isMenuOpen]);

  return (
    <aside
      className={`fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200  bg-white p-4 lg:bottom-0 lg:right-auto lg:h-screen lg:w-80 lg:border-r lg:px-5 lg:py-8 ${isMenuOpen && "bottom-0"}`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col gap-6 ${!isMenuVisible ? "hidden" : "flex"}`}
      >
        <nav className="space-y-0.5">
          <ul aria-orientation="horizontal" role="menubar">
            {SidebarData.map((item) => (
              <NavItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <ul>
              <NavItem title="Configurações" icon={Cog} />
            </ul>
          </nav>

          <div className="h-px bg-zinc-200" />
          <Profile />
        </div>
      </div>
    </aside>
  );
}
