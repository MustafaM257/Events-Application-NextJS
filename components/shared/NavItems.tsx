import { headerLinks } from "@/constants";
import Link from "next/link";

const NavItems = () => {
  return (
    <ul className="flex w-full gap-5 flex-col md:flex-row items-start  ">
      {headerLinks.map((link) => {
        return (
          <li>
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
