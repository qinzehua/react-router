import React from "react";
import RouterContext from "./RouterContext";

class Route extends React.Component {
  static contextType = RouterContext;

  render() {
    const { history, location } = this.context;
    const { path, component: RouteComponent } = this.props;
    const match = location.pathname === path;
    let routeProps = { history, location, match };
    let renderElement = null;
    if (match) {
      renderElement = <RouteComponent {...routeProps} />;
    }

    return renderElement;
  }
}

export default Route;
