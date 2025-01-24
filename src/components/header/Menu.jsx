import { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span
        onClick={toggleMenu}
        className="flex items-center cursor-pointer text-3xl hover:text-red-600 hover:scale-105 transition-all will-change-transform md:hidden"
      >
        &#x2630;
      </span>
      <ul
        className={`${
          isOpen ? "-right-0" : "-right-60"
        } md:flex md:static md:gap-4 transition-all md:h-auto md:w-auto md:p-0 fixed top-28 bg-black h-screen w-60 p-8 z-20`}
      >
        <MenuItem text={"Patinadores"} href="#skaters" onClick={toggleMenu} />
        <MenuItem text={"Puntos"} href="#scoreboard" onClick={toggleMenu} />
        <MenuItem text={"Acerca de"} href="#about" onClick={toggleMenu} />
        <MenuItem text={"Contacto"} href="#contact" onClick={toggleMenu} />
      </ul>
    </>
  );
};
export default Menu;
