import React from "react";
import ReactDOM from "react-dom";
const name = "Aaron";

function calcRand() {
  return Math.round(Math.random() * 10);
}
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>
      {name} your lucky number is {calcRand()}
    </p>
  </div>,
  document.getElementById("root")
);
