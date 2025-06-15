import React from "react";
import ReactDOM from "react-dom/client";

import {Header} from './components/Header/Header.js'
import Body from './components/main/Body.js';


export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// babel converts JSX to JS
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML

// React Components are reusable pieces of UI that can be composed together to build complex user interfaces.
// A React component is a JavaScript function or class that returns a React element.
// jsx prevents xss attacks by escaping any user input that is rendered in the UI.
// one i can export default AppLayout;
// another i can export AppLayout as a named export
// import { AppLayout } from './AppLayout.js'; NAMED EXPORT
// import AppLayout from './AppLayout.js'; DEFAULT EXPORT

// hooks are functions that let you use state and other React features in functional components.
// useState is a hook that lets you add state to functional components.
// usestate state value changes it re-renders the component

// react use reconcilation algorithm to update the UI efficiently.=>react fiber
// it compares the new virtual DOM with the old virtual DOM and updates only the changed parts of the real DOM.
// viratual dom is a lightweight copy of the real DOM that React uses to optimize updates.=>obj=>compare the two nodes
// react uses a diffing algorithm to compare the new virtual DOM with the old virtual DOM and update only the changed parts of the real DOM.
