import React from "react";
import { createRoot } from "react-dom";


// Purpose: to render the App component to the DOM
//         to render the Pet component to the DOM
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// const App is a function that returns a React element
// React.createElement(type, props, children)
// type: string
// props: object
// children: array of React elements

const App = () => {
  // 1. create a div element
  // 2. add h1 element to the div
  // 3. add text to the h1 element
  // 4. return the div element

  return React.createElement(
    "div",
    {}, // example of props: {id: "something-important"}
    [
      React.createElement("h1", {}, "Adopt Me!"),

      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),

      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),

      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};

// get the root element from the DOM
const container = document.getElementById("root");

// create a root element (this is a new feature in React 18)
const root = createRoot(container);

// render the App component to the root element
root.render(React.createElement(App));
