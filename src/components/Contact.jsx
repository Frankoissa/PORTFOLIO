import React from "react";
import Impressum from "./Impressum";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full min-h-screen bg-[#F1EFF1] flex justify-center items-center p-4 py-16"
      >
        <div className="max-w-[700px] w-full bg-white rounded-xl shadow-lg p-8 md:p-10">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-black text-gray-900">
              Contact me 📧
            </p>
            <p className="text-gray-600 mt-4">
              Have a question or want to work together? Send me a message!
            </p>
          </div>

          <form
            method="POST"
            action="https://getform.io/f/e2a3c230-cef4-477b-82cd-44200f67a98d"
            className="flex flex-col w-full"
          >
            <div className="mb-4 relative">
              <label
                htmlFor="name"
                className="text-sm text-gray-600 mb-1 block"
              >
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  id="name"
                  className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 mb-1 block"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  id="email"
                  className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  name="Email"
                />
              </div>
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="message"
                className="text-sm text-gray-600 mb-1 block"
              >
                Message
              </label>
              <div className="relative">
                <div className="absolute top-4 left-0 pl-3 flex items-start pointer-events-none">
                  <FiMessageSquare className="text-gray-400" />
                </div>
                <textarea
                  id="message"
                  className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  name="message"
                  placeholder="Write your message here..."
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic mb-6 leading-relaxed">
              By submitting this form, you consent to the processing of your personal data for the purpose of responding to your inquiry. Your information will be handled in accordance with our privacy policy and will not be shared with third parties.
            </p>

            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Send Message <FiSend className="ml-1" />
            </button>
          </form>
        </div>
      </div>
      <Impressum />
    </>
  );
};

export default Contact;