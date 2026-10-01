import { NavLink } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

export function Navbar() {
  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
        <NavLink to="/" className="text-lg font-bold">
          Porter Nilsson
        </NavLink>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink to="/bluemap" className={navigationMenuTriggerStyle()}>
                BlueMap
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
