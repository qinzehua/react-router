import React from "react";
import RouterContext from "./RouterContext.js";
import matchPath from "./matchPath.js";

class Switch extends React.Component {
  static contextType = RouterContext;

  render() {
    const { location } = this.context;
    let element, match;

    React.Children.forEach(this.props.children, (child) => {
      if (!match && React.isValidElement(child)) {
        element = child;
        match = matchPath(location.pathname, child.props);
      }
    });

    return match ? element : null;
  }
}

export default Switch;
