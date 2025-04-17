import React from "react";

import Popup from "reactjs-popup";
export default function Impressum() {
  return (
    <div  className="py-5 bg-[#F1EFF1]">
    <Popup className="py-5 bg-[#F1EFF1]" trigger={<button> impressum </button>} position="bottom left">
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG:</h2>
      <p>Einzelunternehmen Entwicklung Mohamadali Issa</p>
      <h3>Postanschrift:</h3>
      <p>Ostenberger Str. 97 Dortmund</p>
      <h3>Kontakt:</h3>
      <p>E-Mail: ma-issa95@hotmail.com</p>
      <p></p>
      <p></p>
      <p></p>
      <h2>Hinweise zur Website</h2>
      <p></p>
      <p>
        <em>
          Das Impressum wurde mit dem{" "}
          <a href="https://www.activemind.de/datenschutz/impressums-generator/">
            Impressums-Generator der activeMind AG
          </a>{" "}
          erstellt.
        </em>
      </p>
    </Popup>
    </div>
  );
}
