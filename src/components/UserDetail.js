import React from "react";

class UserDetail extends React.Component {
  state = { user: {} };
  componentDidMount() {
    let user = this.props.location.state;
    if (user) {
      this.setState({ user });
    }
  }
  render() {
    let { user } = this.state;

    return (
      <div>
        <p>Id:{user.id}</p>
        <p>name:{user.name}</p>
      </div>
    );
  }
}

export default UserDetail;
