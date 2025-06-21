import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from './components/Header/Header.js';
import Body from './components/main/Body.js';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/main/About.js";
import { Hotel } from "./components/main/Hotel.js";
import { Provider } from "react-redux"; //its like a bridge between react and redux
import {configureStore} from "@reduxjs/toolkit"; //used to create a store
import appStore from "./utlis/appStore.js";

const Contact = lazy(() => import("./components/main/Contact.js"));

export const AppLayout = () => (
  <Provider store={appStore}>
     <div className="app">
    <Header />
    <Outlet />
  </div>
  </Provider>
  
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Suspense fallback={<h1>loading...</h1>}><Contact /></Suspense> },
      { path: "/Hotel/:resId", element: <Hotel /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// higher order component takes a component and returns a new component
// controlled component is a component that takes its value from props and updates its value using props
// uncontrolled component is a component that takes its value from state and updates its value using state

//props drilling is a technique in React where you pass data from a parent component to a child component through props, allowing the child component to access and use the data. This is useful for sharing data between components in a hierarchical structure, but can lead to complex prop chains if not managed properly.
// react context api is a way to share data between components without having to pass props down through every level of the component tree. It allows you to create a global state that can be accessed by any component in the application, making it easier to manage and share data across different parts of the app. This helps avoid prop drilling and makes the code cleaner and more maintainable.