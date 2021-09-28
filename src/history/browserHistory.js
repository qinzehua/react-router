function createBrowserHistory() {
  const globalHistory = window.history;

  const listeners = [];
  let action;

  function listen(listener) {
    listeners.push(listener);
    return function () {
      let idx = listeners.indexOf(listener);
      listeners.splice(idx, 1);
    };
  }

  function go(n) {
    action = "POP";
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function setState(state) {
    Object.assign(history, state);
    listeners.forEach(function (listener) {
      listener(history.location);
    });
  }

  function push(pathname, state) {
    action = "PUSH";
    if (typeof pathname === "object") {
      state = pathname.state;
      pathname = pathname.pathname;
    }
    globalHistory.pushState(state, null, pathname);
    let location = { state, pathname };
    setState({ action, location });
  }

  const history = {
    action: "POP",
    go,
    goBack,
    goForward,
    push,
    listen,
    location: {
      pathname: window.location.pathname,
      state: window.history.state,
    },
  };

  window.onpopstate = function (event) {
    console.log("onpopstate");
    setState({
      action: "POP",
      location: {
        pathname: window.location.pathname,
        state: window.history.state,
      },
    });
  };

  return history;
}

export default createBrowserHistory;
