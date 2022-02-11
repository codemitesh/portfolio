import React from "react";
import "./Contact.css";
export default function Contacts() {
  return (
    <div>
      <div className="contacts" id="Contact">
        <h1>Get in Touch at</h1>
        <div className="center-div">
          <div className="phone">
            <i className="fa fa-phone"> </i>

            <a href="tel:+91 8208108365 / 8698385574" rel="noreferrer">
              +91 8208108365 / 8698385574
            </a>
          </div>
          <div className="phone">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto: codemitesh@gmail.com">codemitesh@gmail.com</a>
          </div>
        </div>

        <a
          href="https://github.com/codemitesh"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="www.linkedin.com/in/mitesh-sawant-020341132"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>

        <a
          href="https://twitter.com/miteshsawant95"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a href="mailto: codemitesh@gmail.com">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
}
