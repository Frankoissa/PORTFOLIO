import React, { Component, useState } from "react";
import Logo from "../assets/logo2.gif";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

//imports

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickhandler = () => setNav(!nav);
  const [data, setData] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className=" fixed w-full top-0 h-[80px] flex justify-between items-center px-4 bg-[#F1EFF1] text-black md:m-auto sm:mb-10">
      {/*Logo*/}
      <img
        title="Issa der Developer"
        src={Logo}
        style={{ width: "80px" }}
        autoPlay
        muted
      />

      {/* Menue*/}
      <ul className=" hidden md:flex justify-between ">
        <li className="border-b transition duration-400 ease-in-out hover:border-b-2 hover:border-black hover:shadow-sm mb-2">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="border-b transition duration-400 ease-in-out hover:border-b-2 hover:border-black hover:shadow-sm mb-2">
          <Link to="projekt" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="border-b transition duration-400 ease-in-out hover:border-b-2 hover:border-black hover:shadow-sm mb-2">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger*/}
      <div onClick={clickhandler} className="md:hidden  px-2 z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Handymenue*/}

      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#F1EFF1] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={clickhandler} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        {/** Add it later 
        <li className="py-6 text-4xl">
          <Link onClick={clickhandler} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
     */}
        <li className="py-6 text-4xl">
          <Link
            onClick={clickhandler}
            to="projekt"
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={clickhandler}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1c46c5]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/mohamadali-issa-9ba438230"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={40} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/Frankoissa"
              target="_blank"
            >
              Github <FaGithub size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4a3a4a]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:ma-issa95@hotmail.com"
              target="_blank"
            >
              mail me 😊 <HiOutlineMail size={40} />
            </a>
          </li>

          {/*
   //Wahtsapp kann ich später adden 

      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#4EC75A]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://wa.me/4917645974631 "
              target="_blank"
            >
              text me 🥰 <FaWhatsapp size={40} />
            </a>
          </li>
     

   */}
        </ul>
      </div>
      {/*Wither Icons */}
      {/* <div
        className=" hidden lg:flex fixed flex-col top-[35%] right-0 bg-[#F1EFF1]  w-[60px] h-[50px] text-blue-700 hover:w-[250px] hover:h-[320px] hover:bg-transparent duration-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovering ? (
          <div className="hover-content">
            <p>This is some content that appears on hover.</p>
          </div>
        ) : (
         <WiDayHail className="w-full h-sc"/>
        )}
        </div> */}
    </div>
  );
};

export default Navbar;
