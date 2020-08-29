import React, { useState, useContext } from "react";
import AuthService from "./../services/AuthService";
import Message from "./../component/Message";
import { AuthContext } from "./../context/AuthContext";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: [e.target.value] });
    //console.log({ user });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      console.log(isAuthenticated, user, message);
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/todos");
        console.log("isAuthenticated");
      } else {
        setMessage(message);

      }
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          name="username"
          required
        />
        <input
          type="password"
          className="form-control"
          onChange={onChange}
          name="password"
          required
        />
        <button type="submit" className="btn btn-lg btn-success">
          Login
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};
export default Login;
