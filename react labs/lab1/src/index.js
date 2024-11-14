import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render( what to show, where );
ReactDOM.render(
  <div>
    <h1>My Favoorit Food </h1>
    <ul>
      <li>pasta</li>
      <li>pizza</li>
      <li>fries</li>
    </ul>
  </div>,
  document.getElementById("root")
);
