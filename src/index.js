import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} />
      <Route path="/profile" component={Profile} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
