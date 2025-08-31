/* eslint-disable no-undef 

<div  id="parent">
      <div id="child">
         <h1 id="heading">Hello World</h1>
         <h2>This is h2 tag</h2>
         </div>

         <div id="child2">
         <h1>This is h1 tag</h1>
         <h2>This is h2 tag</h2>
         </div>
</div>

*/
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child",
      },
      [
        React.createElement("h1", {}, "Hello World"),
        React.createElement("h1", {}, "Hello World2"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "Hello World childe2"),
        React.createElement("h1", {}, "Hello World2 chiled2"),
      ]
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
