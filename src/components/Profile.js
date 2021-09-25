const Profile = (props) => {
  return (
    <div>
      Profile<button onClick={() => props.history.goBack()}>返回</button>
      <button onClick={() => props.history.goForward()}>前进</button>
    </div>
  );
};

export default Profile;
