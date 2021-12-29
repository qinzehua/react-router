import { Route, Redirect } from "../react-router-dom";

const Protected = (props) => {
  let { path, component: LoginComponent } = props;

  return (
    <Route
      path={path}
      render={(routeProps) => {
        return localStorage.getItem("login") ? (
          <LoginComponent {...routeProps} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: path } }} />
        );
      }}
    />
  );
};
export default Protected;
