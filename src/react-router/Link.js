import React from "react";
import RouterContext from "./RouterContext";

function Link(props) {
  return (
    <RouterContext.Consumer>
      {(value) => {
        return (
          <a
            {...props}
            onClick={(e) => {
              e.preventDefault();
              value.history.push(props.to);
            }}
          >
            {props.children}
          </a>
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Link;
