import React from "react";
import "./index.css";
import FeaturedProperty from "./views/FeaturedProperty";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FeaturedPropertyPage from "./components/featured-property/FeaturedPropertyPage";
import Header from "./components/navigation/Header";
import BlogList from "./components/blog/BlogList";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <p>Hello</p>
          </Route>
          <Route exact path="/featured-properties">
            <FeaturedProperty />
          </Route>
          <Route path="/featured-properties/:id">
            <FeaturedPropertyPage />
          </Route>
          <Route exact path="/latest-news">
            <BlogList />
          </Route>
          <Route path="/latest-news/:id">
            {/* <FeaturedPropertyPage /> */}
          </Route>
          <Route>
            <NoMatchPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

export const NoMatchPage = () => {
  return (
    <div>
      <h1>404 Error | Page Not Found...</h1>
    </div>
  );
};
