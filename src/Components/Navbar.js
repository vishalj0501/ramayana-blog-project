import React from "react";
import { SunIcon, MoonIcon,GitHubIcon } from "../Assets/icons"
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const {isDark,setIsDark} = props;

  return (
    
      <div className="dark:bg-primary-dark">
          <div className="flex flex-row justify-between items-center px-3 py-4 mx-5 md:mx-20">
            <Link to="/">

            <div className="text-lg md:text-2xl" style={{ fontFamily: 'MedievalSharp, serif'}}>
                {/* <span className="md:text-4xl shadow-[5px_7px_10px_rgba(300,100,10,5)]">Tales from Ramayana</span> */}
                <span className="md:text-4xl shadow">Tales from Ramayana</span>
            </div>


            </Link>
            
              <ul className="flex flex-row justify-evenly" role="search">
                <li className="hidden md:px-4 md:inline-block hover:bg-slate-400/30 backdrop-blur py-2 rounded-md hover:cursor-pointer">
                  <Link className="" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
              </ul>
          </div>
      </div>
    
  );
};

export default Navbar;
