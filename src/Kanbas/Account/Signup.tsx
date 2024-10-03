import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
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
            <input
                id="wd-verify-password"
                placeholder="verify password"
                type="password"
                className="form-control mb-2"
            />
            <Link
                id="wd-signup-btn"
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100 mb-2"
            >
                Signup
            </Link>
            <Link id="wd-signin-link" to="/Kanbas/Account/Signin" className="d-block mt-2 text-primary">
                Signin
            </Link>
        </div>
    );
}
