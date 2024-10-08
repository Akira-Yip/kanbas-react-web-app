import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaFlask, FaInbox, FaRegCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
    const location = useLocation();

    // Helper function to determine if the link is active
    // const isActive = (path: string) => location.pathname === path;
    const isActive = (path: string) => location.pathname.startsWith(path);

    return (
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.svg" alt="NEU Logo" width="75px" /></a>
            <Link to="/Kanbas/Account" id="wd-account-link"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Account') ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <FaRegCircleUser className={`fs-1 ${isActive('/Kanbas/Account') ? 'text-danger' : 'text-white'}`} /><br />
                Account
            </Link>

            
            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Dashboard') ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </Link>
            <Link to="/Kanbas/Courses" id="wd-course-link"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Courses') ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </Link>
            <Link to="/Kanbas/Calendar" id="wd-calendar-link"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Calendar') ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </Link>
            <Link to="/Kanbas/Inbox" id="wd-inbox-link"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Inbox') ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox
            </Link>
            <Link to="/Labs" id="wd-labs-link"
                className={`list-group-item text-center border-0 ${isActive('/Kanbas/Labs') ? 'bg-white text-danger' : 'bg-black text-white'}`}>
                <AiOutlineSetting className="fs-1 text-danger" /><br />
                Labs
            </Link>
        </div>
    );
}
