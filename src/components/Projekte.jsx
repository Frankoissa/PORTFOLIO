import { React, useRef } from "react";
import work from "../assets/WorkingOn.png";
import firsWork from "../assets/Works/WhatsApp Image 2023-05-08 at 12.36.45.jpeg";

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
          className="bg-[#F1EFF1] text-gray-900 w-full h-screen flex flex-row flex-wrap  sm:py-5 mt-10"
        >
          <a href="https://regal-capybara-1647e6.netlify.app" target="_blank">
            <img src={firsWork} alt="Not Available" width={450} height={450} />
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Projekte;
