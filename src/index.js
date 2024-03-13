import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { AppContextProvider } from "./component/ContextAPI/ContextAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
      <AppContextProvider>
        <RouterProvider router={MainRouter}></RouterProvider>
      </AppContextProvider>
  </React.StrictMode>
);

reportWebVitals();
