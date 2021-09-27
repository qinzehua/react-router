const User = (props) => {
  return (
    <div>
      User
      <button onClick={() => props.history.goBack()}>返回</button>
      <button onClick={() => props.history.push("/profile")}>/profile</button>
    </div>
  );
};

export default User;
