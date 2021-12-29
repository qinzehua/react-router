import React from "react";
import LifeCycle from "./LifeCycle.js";
import RouterContext from "./RouterContext.js";

function Redirect({ to }) {
  return (
    <RouterContext.Consumer>
      {(value) => {
        return (
          <LifeCycle
            onMount={() => {
              value.history.push(to);
            }}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Redirect;
