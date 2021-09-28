import React from "react";

class LifeCycle extends React.Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }

  componentWillUnmount() {
    this.props.onUnmount && this.props.onUnmount();
  }

  render() {
    return null;
  }
}

export default LifeCycle;
