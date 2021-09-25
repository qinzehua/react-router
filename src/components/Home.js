const Home = (props) => {
  return (
    <div>
      Home
      <button onClick={() => props.history.goBack()}>返回</button>
      <button onClick={() => props.history.push("/user")}>/user</button>
    </div>
  );
};

export default Home;
