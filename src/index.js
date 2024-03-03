import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
const title = 

root.render(
  <React.StrictMode>
    <>
      <RouterProvider router={MainRouter}></RouterProvider>
    </>
  </React.StrictMode>
);

reportWebVitals();
