import React from "react";
import RouterContext from "./RouterContext";
import mathcPath from "./matchPath";

class Route extends React.Component {
  static contextType = RouterContext;

  render() {
    const { history, location } = this.context;
    const { component: RouteComponent, render } = this.props;
    const match = mathcPath(location.pathname, this.props);
    let routeProps = { history, location };
    let renderElement = null;
    if (match) {
      routeProps.match = match;
      if (render) {
         renderElement = render(routeProps);
      } else {
        renderElement = <RouteComponent {...routeProps} />;
      }
    }

    return renderElement;
  }
}

export default Route;
