import React from "react";
import "./Main.module.css";

export default function Header(props) {
  return (
    <div className="main">
      <h1>{props.message}</h1>
    </div>
  );
}
