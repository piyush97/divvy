import Link from "next/link";
import { MENU_ITEMS } from "../utils/constants/menu";

/**
 * Menu component
 *
 */
const Menu = () =>
  MENU_ITEMS.map(({ name, link, key }) => (
    <Link href={link} key={key}>
      <a className="mr-4 text-pink-500">{name}</a>
    </Link>
  ));
export default Menu;
