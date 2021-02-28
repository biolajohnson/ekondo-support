import React from "react";

const FormContainer = ({ title }) => {
  return (
    <div>
      <form>
        <h1>{title}</h1>
        <div className="form-group">
          <input id="email" type="text" autofocus required />
          <label>Email</label>
          <div className="underline"></div>
        </div>
        <div className="form-group">
          <input id="password" type="password" required />
          <label>Password</label>
          <div className="underline"></div>
        </div>

        <input className="button" type="submit" value="Sign in " />
        <div>
          {title === "Sign in"
            ? "Not a member ?"
            : "Already part of the family ?"}
          <a className="link" href="/login">
            {" "}
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
