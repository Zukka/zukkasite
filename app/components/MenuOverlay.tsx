import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  closeMenu: () => void;
  links: {
    title: string;
    path: string;
  }[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeMenu }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {links.map((link, index) => (
        <li key={index} onClick={() => closeMenu()}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
