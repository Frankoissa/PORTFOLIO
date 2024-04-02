import React from "react";
import JavaScript from "../assets/JavaScript.png";
import Java from "../assets/java.png";
import HTML from "../assets/html.png";
import mySql from "../assets/mysql.png";
import tailwind from "../assets/Tailwind.png";
import NodeJs from "../assets/modeJS.png";
import reactImg from "../assets/React.png";
import CSS from "../assets/css.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#F1EFF1] text-gray-900 w-full h-screen md:py-[250px] "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div>
          <p className="px-4 text-4xl font-bold inline border-b-4 border-black">
            Experience
          </p>
          <p className="py-4 px-4 text-2xl text-gray-600">
            I have worked with:
          </p>
        </div>
        {/* Skills Bilder */}
        <div className="px-3 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          {/* ... your skill images ... */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
