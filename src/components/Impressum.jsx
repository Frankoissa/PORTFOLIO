import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'; // Import the styles
import { FiGithub, FiLinkedin, FiMail, FiInfo } from "react-icons/fi"; // Import icons

export default function Impressum() {
  return (
    <footer className="w-full bg-white py-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Copyright */}
        <div className="text-gray-600 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Mohamadali Issa. All rights reserved.
        </div>
        
        {/* Center - Social icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://github.com/Frankoissa" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mohamadali-issa-9ba438230" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:ma-issa95@hotmail.com" className="text-gray-600 hover:text-black transition-colors">
            <FiMail size={20} />
          </a>
        </div>
        
        {/* Right side - Impressum */}
        <div>
          <Popup
            trigger={
              <button className="text-gray-600 text-sm hover:text-black flex items-center transition-colors">
                <FiInfo size={16} className="mr-1" /> Impressum
              </button>
            }
            modal
            contentStyle={{ 
              width: '90%', 
              maxWidth: '500px',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {close => (
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Impressum</h2>
                  <button className="text-gray-500 hover:text-black" onClick={close}>
                    &times;
                  </button>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-lg mb-2">Angaben gemäß § 5 TMG:</h3>
                  <p className="mb-4">Einzelunternehmen Entwicklung Mohamadali Issa</p>
                  
                  <h3 className="font-semibold text-lg mb-2">Postanschrift:</h3>
                  <p className="mb-4">Ostenberger Str. 97 Dortmund</p>
                  
                  <h3 className="font-semibold text-lg mb-2">Kontakt:</h3>
                  <p className="mb-6">E-Mail: ma-issa95@hotmail.com</p>
                  
                  <h3 className="font-semibold text-lg mb-2">Hinweise zur Website</h3>
                  <p className="text-sm text-gray-600 italic">
                    Das Impressum wurde mit dem{" "}
                    <a 
                      href="https://www.activemind.de/datenschutz/impressums-generator/"
                      className="text-blue-600 hover:underline"
                    >
                      Impressums-Generator der activeMind AG
                    </a>{" "}
                    erstellt.
                  </p>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </footer>
  );
}