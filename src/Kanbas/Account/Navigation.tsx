import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const location = useLocation();

    // Helper function to determine if the link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <div id="wd-account-navigation" className="list-group rounded-0 fs-5">
            <Link 
                to="/Kanbas/Account/Signin" 
                className={`list-group-item border-0 ps-4 ${isActive('/Kanbas/Account/Signin') ? 'text-black border-start border-3 border-dark' : 'text-danger'}`}>
                Signin
            </Link>
            <Link 
                to="/Kanbas/Account/Signup" 
                className={`list-group-item border-0 ps-4 ${isActive('/Kanbas/Account/Signup') ? 'text-black border-start border-3 border-dark' : 'text-danger'}`}>
                Signup
            </Link>
            <Link 
                to="/Kanbas/Account/Profile" 
                className={`list-group-item border-0 ps-4 ${isActive('/Kanbas/Account/Profile') ? 'text-black border-start border-3 border-dark' : 'text-danger'}`}>
                Profile
            </Link>
        </div>
    );
}
