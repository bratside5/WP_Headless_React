import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tailwindcss/dist/base.css";
import App from "./App";
import { PropertyProvider } from "./context/PropertyContext";
import { BlogProvider } from "./context/BlogContext";

ReactDOM.render(
  <React.StrictMode>
    <BlogProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </BlogProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
