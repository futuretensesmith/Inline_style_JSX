import React from "react";
import ReactDOM from "react-dom";
//since style is inline you have to write the style like a javascript object
//{key: "value"} value has to be a string
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: " 1px solid black"
};
//update style on the fly
customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
