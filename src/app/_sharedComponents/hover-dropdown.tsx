"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
/*   NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport, */
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ReactNode } from "react";
interface InputProps {
  className?: string;
  trigger: string | JSX.Element;
  children: ReactNode;
}

export function HoverDropdown({ className, children, trigger }: InputProps) {
  return (
    <div className={cn("", className)}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0">
              {trigger}
            </NavigationMenuTrigger>
            <NavigationMenuContent>{children}</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
