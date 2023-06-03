import React from "react";
import classes from './Header.module.css';

export default function Header(props) {
  return (
    <div className="header absolute h-[40rem] top-0 left-0 w-full bg-[url('/pics/header.jpg')] bg-cover bg-center text-white">
      <nav className="navbar text-right h-14 w-full relative">
        <ul>
          <li className="inline-block list-none py-6 px-4">
            <a href="#" className="text-white text-base hover:bg-yellow-900 hover:text-black">
              item1
            </a>
          </li>
          <li className="inline-block list-none py-6 px-4">
            <a href="#" className="text-white text-base hover:bg-yellow-900 hover:text-black">
              item2
            </a>
          </li>
          <li className="inline-block list-none py-6 px-4">
            <a href="#" className="text-white text-base hover:bg-yellow-900 hover:text-black">
              item3
            </a>
          </li>
        </ul>
      </nav>
      <div className={classes.headerDiv}>
        <div className={classes.text}>
          Strong ride<br />
          Built for our planet
        </div>
        <a>Explore more</a>
      </div>
    </div>
  );
}