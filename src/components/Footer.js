import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex justify-between items-center bg-slate-900">
    <h3>Designed and Developed by Belkhiria Ahmed</h3>
    <h3>Copyright © {year} SB</h3>
    <ul className="flex justify-items-start h-16 items-center ">
            <li >
              <a 
                href="https://github.com/Iqahmediq"
                style={{ color: "white" }}
                target="_blank"

              >
                <AiFillGithub className="h-10 w-10 mr-8" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTthgvDBgXjbpZVHkLzvQmthQKtJJggfrBRGfBBxJpznxjrvdBXmZbFTRNwLqwmBXcBvrP"
                style={{ color: "white" }}
                target="_blank"

              >
                <SiGmail className="h-10 w-10 mr-8 " />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/belkhiria-ahmed-61b550238/"
                style={{ color: "white" }}
                target="_blank"

              >
                <FaLinkedinIn className="h-10 w-10 mr-8"/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ahmed.belkhiria.9404/"
                style={{ color: "white" }}
                target="_blank"
              >
                <AiFillFacebook className="h-10 w-10 mr-4"/>
              </a>
            </li>
          </ul>
    </div>
  );
}

export default Footer;
