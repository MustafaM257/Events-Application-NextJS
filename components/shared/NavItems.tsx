"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const path = usePathname();
  return (
    <ul className="flex w-full gap-5 flex-col md:flex-row items-start">
      {headerLinks.map((link) => {
        const isActive = path === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive ? "text-primary-500" : ""
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
