import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Link,
} from "./react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";

import Protected from "./components/Protected";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

ReactDOM.render(
  <BrowserRouter>
    <NavBar title="返回首页" />
    <ul>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to="/user">用户管理</Link>
      </li>
      <li>
        <Link to="/profile">个人中心</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/user" component={User} />
      <Route path="/login" component={Login} />
      <Protected path="/profile" component={Profile} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
