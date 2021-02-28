import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../actions/userActions";
import Header from "../components/Header";

const HomeScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authUser);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginUser(email, password));
  };

  useEffect(() => {
    if (userInfo === null) {
      history.push("/dashboard");
    }
  }, [userInfo, history]);
  return (
    <Fragment>
      <div className="grid-container">
        <Header />
        <div className="main-content">
          <ul className="list">
            <li className="show">
              Enjoy a lifetime support for your plant babies!
            </li>
            <li className="show">
              Be part of our community of plant parents where we could share
              meetups and social gatherings to meetup!
            </li>
            <li className="show">Get exclusive deals from Ekondo!</li>
          </ul>
        </div>
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
        <div className="footer">
          Designed by Rewired Differently for Ekondo &copy; 2021
        </div>
      </div>
    </Fragment>
  );
};
export default HomeScreen;
