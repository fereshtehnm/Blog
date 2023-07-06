import React from "react";


export default function Header(props) {
  return (
    <div className="header relative h-[50rem] top-0 left-0 w-full bg-[url('/pics/header.jpg')] bg-cover bg-center text-white " data-theme="light">
      <nav className=" navbar flex items-center justify-center h-16 w-full relative">

        <ul>
          <li className="inline-block list-none py-6 px-2">
            <a href="#posts-header" className="text-xl text-amber-300 opacity-70 hover:bg-amber-500 hover:bg-opacity-25 hover:text-white p-2">
              Posts
            </a>
          </li>
          <li className="inline-block list-none py-6 px-2">
            <a href="#image-header" className="text-xl text-amber-300 opacity-70 hover:bg-amber-500 hover:bg-opacity-25 hover:text-white p-2">
              Images
            </a>
          </li>
          <li className="inline-block list-none py-6 px-2">
            <a href="#" className="text-xl text-amber-300 opacity-70 hover:bg-amber-500 hover:bg-opacity-25 hover:text-white p-2">
              item3
            </a>
          </li>
        </ul>
      </nav>
      <div className=" bg-gradient-to-r from-orange-900 text-7xl font-extrabold  text-amber-100 drop-shadow-lg relative text-start top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-16">
        <div>
          Strong ride<br />
          Built for our planet<br />
          Explore more
        </div>
      </div>
    </div>
  );
}