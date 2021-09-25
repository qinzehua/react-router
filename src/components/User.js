const User = (props) => {
  return (
    <div>
      User
      <button onClick={() => props.history.goBack()}>返回</button>
      <button onClick={() => props.history.goForward()}>前进</button>
    </div>
  );
};

export default User;
