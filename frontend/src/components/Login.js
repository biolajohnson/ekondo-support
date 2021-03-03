import React, { useState } from "react";
import { LoginUser } from "../actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginUser(email, password));
  };
  return (
    <div className="side-content">
      <form onSubmit={handleLogin}>
        <h1>Sign in</h1>
        <div className="form-group">
          <input
            id="email"
            type="text"
            autoFocus={true}
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
          <div className="underline"></div>
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
          <div className="underline"></div>
        </div>

        <input className="button" type="submit" value="Sign in " />
        <div>
          Not a member?{" "}
          <a className="link" href="/login">
            {" "}
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
