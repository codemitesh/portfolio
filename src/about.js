import React from "react";
import Image from "./img/profile.png";

import "./about.css";
export default function About() {
  return (
    <div>
      <div className="about-bg" id="about">
        <h1>About Me</h1>

        <div className="about-section">
          <div className="profile-img">
            <img src={Image} alt="img" />
          </div>

          <div className="para">
            <p>
              A Mechanical Engineer turned Web Developer, with the expertise in
              MERN Stack along with HTML, CSS and JavaScript and sound knowledge
              of Data Structures. I possess team work and remote work abilities
              & ready to explore the world of technology.
              <br />
            </p>
          </div>
        </div>
        {/* <div className="clear"></div> */}
      </div>
    </div>
  );
}
