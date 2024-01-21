import React from "react";
import ICON from "../assets/icons/tools.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-slate-500 pb-8">
      <div className="grid grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-1 flex flex-col items-center pt-12">
          <a href="/">
            <img src={ICON} className="w-20 h-20" alt="Logo" />
          </a>
        </div>
        <div className="col-span-2 flex flex-col items-center pt-12 pl-6 md:col-span-1">
          <div className="flex items-center font-bold hover:text-slate-800">
            <a href="tel:360-356-6008">(360) 356-6008</a>
          </div>
          <div className="flex items-center font-bold hover:text-slate-800">
            <a href="mailto:Larrysgencon@gmail.com">Larrysgencon@gmail.com</a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="h-6 w-6 pr-6 pt-1 hover:text-slate-800"
                icon={faFacebookSquare}
              />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="h-6 w-6 hover:text-slate-800"
                icon={faInstagramSquare}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
