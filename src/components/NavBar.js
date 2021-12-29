import React from "react";
import { withRouter } from "../react-router";
const NavBar = (props) => {
  return <div onClick={() => props.history.push("/")}>{props.title}</div>;
};

export default withRouter(NavBar);
