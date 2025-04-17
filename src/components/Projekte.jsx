import { React, useRef } from "react";
import firsWork from "../assets/Works/DRRajab.jpeg";
// Import the images for your new projects - update these paths to match your actual files
import provetImage from "../assets/Works/Provet.png";
import saludImage from "../assets/Works/salud.png"

const Projekte = () => {
  return (
    <div className="w-full h-screen bg-[#F1EFF1] ">
      {/* große Div  */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col w-full justify-center">
        {/*überschrift */}
        <div>
          <p className="px-4 text-4xl font-bold inline border-b-4 border-black">
            My Projects
          </p>
          <p className="py-4 px-4 text-2xl text-gray-600">Working on it :</p>
        </div>

        <div
          name="projekt"
          className="bg-[#F1EFF1] text-gray-900 w-full h-screen flex flex-row flex-wrap gap-6 sm:py-5 mt-10"
        >
          {/* First Project */}
          <div className="project-card">
            <a
              href="https://praxis-rajab-bochum.de"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={firsWork}
                alt="Praxis Rajab"
                width={450}
                height={450}
                className="hover:scale-105 duration-500"
              />
            </a>
          </div>

          {/* Second Project - Provet */}
          <div className="project-card">
            <a
              href="https://provet-tierarzt-notdienst.de/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={provetImage}
                alt="Provet Tierarzt Notdienst"
                width={450}
                height={450}
                className="hover:scale-105 duration-500"
              />
            </a>
          </div>

          {/* Third Project - Salud Blog */}
          <div className="project-card">
            <a href="http://saludblog.de/" target="_blank" rel="noreferrer">
              <img
                src={saludImage}
                alt="Salud Blog"
                width={450}
                height={450}
                className="hover:scale-105 duration-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projekte;
