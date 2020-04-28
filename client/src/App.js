import React from "react";
import "./index.css";
import FeaturedProperty from "./views/FeaturedProperty";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FeaturedPropertyPage from "./components/featured-property/FeaturedPropertyPage";
import BlogList from "./components/blog/BlogList";
import BlogPage from "./components/blog/BlogPage";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/navigation/Header";
import Profile from "./views/Profile";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import { AuthProvider } from "./providers";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <h1>Home Page</h1>
            </Route>
            <PrivateRoute exact path="/profile-dashboard" component={Profile} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
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
              <BlogPage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
