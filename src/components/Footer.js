import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex justify-between items-center bg-slate-500">
    <h3>Designed and Developed by Belkhiria Ahmed</h3>
    <h3>Copyright © {year} SB</h3>
    <ul className="flex justify-items-start h-16 items-center ">
            <li >
              <a 
                href="https://github.com/Iqahmediq"
                style={{ color: "white" }}

              >
                <AiFillGithub className="h-10 w-10 mr-8" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com"
                style={{ color: "white" }}

              >
                <AiOutlineTwitter className="h-10 w-10 mr-8 " />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com"
                style={{ color: "white" }}
              >
                <FaLinkedinIn className="h-10 w-10 mr-8"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com"
                style={{ color: "white" }}
              >
                <AiFillInstagram className="h-10 w-10 mr-4"/>
              </a>
            </li>
          </ul>
    </div>
  );
}

export default Footer;
