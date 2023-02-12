import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import "react-datepicker/dist/react-datepicker.css";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
