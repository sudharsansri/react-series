import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from './components/Header/Header.js';
import Body from './components/main/Body.js';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/main/About.js";
import { Hotel } from "./components/main/Hotel.js";

const Contact = lazy(() => import("./components/main/Contact.js"));

export const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
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