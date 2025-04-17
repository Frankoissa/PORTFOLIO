import React from "react";
import Foto from "../assets/MeinFotofürBewerbung (2).jpeg"
const Home = () => {
  return (
    <div name ="home" className="w-full h-screen bg-[#F1EFF1]">
      {/* Countainr */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full md:mt-10">
        <h1 className="text-black  text-4xl md:mt-10 sm:py-5 mt-4">Hi There 🖐 my name is Issa</h1>
        <h2 className="text-3xl"> i'm a Junior-Full-Stack-Developer</h2>
        <div className="flex px-5 ">

        <p className="mt-10 text-gray-700 text-2xl md:flex-col">
          As medical informatics student and Junior Full Stack
          Developer, I can help program your modern website or automate your
          processes to save time and resources. Let me provide you with a
          customized solution using modern technologies and frameworks.
        </p>
        <img title="Mohamadali Issa" src={Foto} alt="No Foto" className="w-[30%] rounded-full hidden md:block" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
