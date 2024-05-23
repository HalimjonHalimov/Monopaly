import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MultiFormContextProvider from "./context/MultiFormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MultiFormContextProvider>
      <App />
    </MultiFormContextProvider>
  </React.StrictMode>
);
