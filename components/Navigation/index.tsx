import { useRouter } from "next/router";
import Link from "next/link";
import {
  NavigationContainer,
  MenuList,
  MenuItem,
  NavLink,
} from "@/components/Navigation/styles";

export function Navigation(): JSX.Element {
  const router = useRouter();

  return (
    <NavigationContainer>
      <MenuList>
        <MenuItem className={router.pathname === "/" ? "active" : ""}>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </MenuItem>
        <MenuItem
          className={router.pathname.startsWith("/fav") ? "active" : ""}
        >
          <Link href="/fav">
            <NavLink>Favorites</NavLink>
          </Link>
        </MenuItem>
      </MenuList>
    </NavigationContainer>
  );
}
