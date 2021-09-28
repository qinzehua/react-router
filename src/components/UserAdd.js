import React from "react";
import { UserAPI } from "../util";

class UserAdd extends React.Component {
  userNameRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();

    let name = this.userNameRef.current.value;
    UserAPI.add({ id: +Date.now(), name: name });
    this.props.history.push("/user/list");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.userNameRef} />
        <button type="submit">提交</button>
      </form>
    );
  }
}

export default UserAdd;
