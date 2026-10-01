import { cn } from "cn";
import { NavLink } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

export function Navbar() {
  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-2xl font-bold">
          Porter Nilsson
        </NavLink>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<NavLink to="/bluemap" />}
                className={cn(navigationMenuTriggerStyle(), "text-base")}
              >
                BlueMap
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
