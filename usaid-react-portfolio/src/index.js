import React from "react";
import ReactDOM from "react-dom";
import "./index.js";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact.js";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/resume",
    element: <Resume/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  

  

]);

const root =
 ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
