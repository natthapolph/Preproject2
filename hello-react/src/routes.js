// src/routes.js
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import NotFound from "./components/NotFound";

export default function exam() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
