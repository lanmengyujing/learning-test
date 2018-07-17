import React from "react";
import { render } from "react-dom";
import { Route, Link } from "react-router-dom";
import { browserHistory, Router } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Back from "./Back";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

const App = () => (
  <div style={styles}>
    <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Route>
    </Router>
  </div>
);

render(<App/>, document.getElementById("root"));