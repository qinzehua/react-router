import React from "react";
import RouterContext from "./RouterContext";
import LifeCycle from "./LifeCycle";

function Prompt({ when, message }) {
  return (
    <RouterContext.Consumer>
      {(value) => {
        if (!when) return;
        const blcok = value.history.blcok;

        return (
          <LifeCycle
            onMount={(self) => (self.release = blcok(message))}
            onUnmount={(self) => self.release()}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Prompt;
