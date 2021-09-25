function createHashHistory() {
  let action = "PUSH";
  let listeners = [];
  let historyStack = [];
  let historyIndex = -1;
  let state;

  window.addEventListener("hashchange", () => {
    let pathname = window.location.hash.slice(1);
    Object.assign(history, { action, location: { pathname, state } });
    if (action === "PUSH") {
      historyStack[++historyIndex] = history.location;
    }
    listeners.forEach(function (listener) {
      listener({ pathname });
    });
  });

  function listen(listener) {
    listeners.push(listener);
    return function () {
      let idx = listeners.indexOf(listener);
      listeners.splice(idx, 1);
    };
  }

  function push(pathname, nextState) {
    action = "PUSH";
    state = nextState;
    window.location.hash = pathname;
  }

  function go(n) {
    action = "POP";
    historyIndex += n;
    let nextLocatoin = historyStack[historyIndex];
    state = nextLocatoin.state;
    window.location.hash = nextLocatoin.pathname;
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  const history = {
    action: "POP",
    go,
    goBack,
    goForward,
    push,
    listen,
    location: {
      pathname: "/",
      state: undefined,
    },
  };

  window.location.hash = window.location.hash
    ? window.location.hash.slice(1)
    : "/";
  return history;
}

export default createHashHistory;
