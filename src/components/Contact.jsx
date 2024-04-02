import React from "react";
import Impressum from "./Impressum";

const Contact = () => {

  const blackStyl = "text-gray-900"
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#F1EFF1] flex justify-center items-center p-4 "
      >
        <form
          method="POST"
          action="https://getform.io/f/e2a3c230-cef4-477b-82cd-44200f67a98d"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-black text-gray-900">
              Contact me 📧
            </p>
          </div>
          <input
            className="p-4 mb-2"
            type="text"
            placeholder="Name.."
            name="name"
            required
          />
          <input
            className="p-4 mb-2"
            type="email"
            required
            placeholder="Exsampel@.."
            name="Email"
          />
          <textarea
            className="p-4 mb-2"
            name="message"
            placeholder="write a message.."
            cols="30"
            rows="10"
          ></textarea>

          <button className="pt-4 bg-[#F1EFF1] hover:scale-125 duration-500 hover:shadow-lg">
            <p className=" border border-gray-800"> Submit </p>{" "}
          </button>
        </form>
      </div>
      <Impressum />
    </>
  );
};

export default Contact;
