import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async () => {
    const user = await client.signup(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" className="ms-5 mt-4">
      <h1>Signup</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <button
        onClick={signup}
        id="wd-signin-btn"
        className="btn btn-primary w-100"
      >
        Sign up
      </button>
      <Link
        id="wd-signin-link"
        to="/Kanbas/Account/Signin"
        className="d-block mt-2 text-primary"
      >
        Signin
      </Link>
    </div>
  );
}
