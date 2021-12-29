import React from "react";
import { UserAPI } from "../util";
import { Prompt } from "../react-router-dom";

class UserAdd extends React.Component {
  userNameRef = React.createRef();
  state = { isBlocking: false };
  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.userNameRef.current.value;
    UserAPI.add({ id: +Date.now(), name: name });
    this.props.history.push("/user/list");
  };

  handleChange = (event) => {
    this.setState({
      isBlocking: this.userNameRef.current.value.length > 0,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={this.state.isBlocking}
          message={(location) => `请问要到${location.pathname}去吗`}
        />
        <input ref={this.userNameRef} onChange={this.handleChange} />
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default UserAdd;
