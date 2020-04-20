import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PropertyProvider } from "./context/PropertyContext";
import { TagsProvider } from "./context/TagsContext";

ReactDOM.render(
  <React.StrictMode>
    <TagsProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </TagsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
