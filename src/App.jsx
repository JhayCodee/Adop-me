import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
// Purpose: to render the App component to the DOM

// const App is a function that returns a React element
// React.createElement(type, props, children)
// type: string
// props: object
// children: array of React elements

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// get the root element from the DOM
const container = document.getElementById("root");

// create a root element (this is a new feature in React 18)
const root = createRoot(container);

// render the App component to the root element
root.render(<App />);
