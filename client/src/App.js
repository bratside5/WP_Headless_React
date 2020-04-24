import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import LandingPage from "./views/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeaturedPropertyPage from "./components/featured-property/FeaturedPropertyPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <p>Hello</p>
        </Route>
        <Route exact path="/featured-properties">
          <LandingPage />
        </Route>
        <Route path="/featured-properties/:id">
          <FeaturedPropertyPage />
        </Route>
      </Router>
    </>
  );
};

export default App;
