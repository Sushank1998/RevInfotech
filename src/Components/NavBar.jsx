import { useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cartIcon.png";
import manu from "../assets/menu.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const Links = [
    {
      label: "Menu",
      href: "#",
    },
    {
      label: "Flavours",
      href: "#",
    },
    {
      label: "Wingclub",
      href: "#",
    },
    {
      label: "Wingside Business",
      href: "#",
    },
    {
      label: "Catering",
      href: "#",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className="shadow-sm w-full sticky top-0 left-0 z-10">
      <nav className="md:flex bg-white py-4 md:px-10 px-7 items-center justify-between">
        <a href="#" id="logo" className="flex gap-2 items-center">
          <img src={logo} alt="" className="object-cover w-auto max-w-16" />
        </a>
        <div
          className="absolute right-8 top-6 cursor-pointer md:hidden" 
          onClick={toggleMenu}
        >
          <img src={manu} alt="" className="max-w-6" />
        </div>
        <ul
          className={`md:flex md:items-center md:pd-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-6 text-sm md:my-0 my-7">
              <a
                href={link.href}
                className="text-gray-800 hover:text-gray-400 duration-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <a href="#" id="logo" className="flex p-5 items-center">
            <img
              src={cartIcon}
              alt=""
              className="object-cover w-auto max-w-4"
            />
          </a>
          <button className="bg-[#F8CA0F] hover:bg-yellow-300 text-[#2C3641] font-bold py-2 px-4 rounded">
            ORDER NOW
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
