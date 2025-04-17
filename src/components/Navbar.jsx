import React, { useState } from "react";
import Logo from "../assets/logo2.gif";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickhandler = () => setNav(!nav);

  // Navigation links array
  const navLinks = [
    { id: 1, to: "home", title: "Home" },
    { id: 2, to: "projekt", title: "Project" },
    { id: 3, to: "contact", title: "Contact" },
  ];

  // Social links array
  const socialLinks = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/mohamadali-issa-9ba438230",
      title: "LinkedIn",
      icon: <FaLinkedin size={40} />,
      bgColor: "bg-[#1c46c5]",
    },
    {
      id: 2,
      href: "https://github.com/Frankoissa",
      title: "Github",
      icon: <FaGithub size={40} />,
      bgColor: "bg-[#333333]",
    },
    {
      id: 3,
      href: "mailto:ma-issa95@hotmail.com",
      title: "mail me 😊",
      icon: <HiOutlineMail size={40} />,
      bgColor: "bg-[#4a3a4a]",
    },
    /* Uncomment to add WhatsApp
    { 
      id: 4, 
      href: "https://wa.me/4917645974631", 
      title: "text me 🥰", 
      icon: <FaWhatsapp size={40} />,
      bgColor: "bg-[#4EC75A]" 
    }
    */
  ];

  return (
    <div className="fixed w-full top-0 h-[80px] flex justify-between items-center px-4 bg-[#F1EFF1] text-black md:m-auto sm:mb-10 z-50 shadow-sm">
      {/* Logo */}
      <img
        title="Issa der Developer"
        src={Logo}
        alt="Developer Logo"
        style={{ width: "80px" }}
        className="transition-transform duration-300 hover:scale-105"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between">
        {navLinks.map((link) => (
          <li key={link.id} className="relative px-4 mx-2 py-2 group">
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              className="inline-block transition-all duration-300 hover:text-gray-800"
            >
              {link.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        onClick={clickhandler}
        className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer z-10"
      >
        {!nav ? (
          <FaBars className="transition-transform duration-300 hover:rotate-90" />
        ) : (
          <FaTimes className="transition-transform duration-300 hover:rotate-90" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#F1EFF1] flex flex-col justify-center items-center"
        }
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="py-6 text-4xl relative overflow-hidden group"
          >
            <Link
              onClick={clickhandler}
              to={link.to}
              smooth={true}
              duration={500}
              className="transition-all duration-300 hover:text-gray-600 group-hover:pl-2"
            >
              <span className="relative z-10">{link.title}</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map((social) => (
            <li
              key={social.id}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-500 ${social.bgColor} hover:shadow-lg`}
            >
              <a
                className="flex justify-between items-center w-full text-white pl-5 pr-3"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {social.title}
                </span>
                <div className="transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  {social.icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
