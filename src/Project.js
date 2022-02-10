import React from "react";
import "./Project.css";
import Image from "./img/Coursera-clone-ss.png";
import Img from "./img/Purplle-clone-ss.png";

export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects I've Worked On</h1>
        <div className="project-section">
          <div className="center">
            <div className="one">
              <img src={Image} alt="project" />
              <h2>Clone of Purplle</h2>
              <p>
                Purplle is India’s one of the leading beauty and fashion
                platform that offers a comprehensive range of cosmetics,
                engagement prodducts and expert assistance.
              </p>
              <p>Tool-kit: HTML | CSS | Javascript</p>

              <a
                href="https://purplle-cw.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Project Demo</button>
              </a>
              <a
                href="https://github.com/codingwithgyan/Ecommerce-CW"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
            </div>

            <div className="one">
              <img src={Img} alt="project" />
              <h2>Clone of Coursera</h2>
              <p>
                About One of the top e-learning platform, that helps students
                and professional learn new skills and excel in their careers.
              </p>
              <p>
                Tool-kit: HTML | CSS | Javascript | Nodejs | MongoDB | Express
              </p>

              <a
                href="https://courseraclone-backend.herokuapp.com/home_page"
                target="_blank"
                rel="noreferrer"
              >
                <button>Project Demo</button>
              </a>
              <a
                href="https://github.com/dhimanankita54/Coursera"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
