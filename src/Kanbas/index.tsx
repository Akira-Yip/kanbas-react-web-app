import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            {/* <h6>Kira Ye SEC01</h6>
            <a href="https://github.com/Akira-Yip/kanbas-react-web-app/tree/a1">Visit the a1 branch of Kanbas React Web App on GitHub</a>
            <p>
            </p>
            <a href="https://a1--playful-cascaron-dcee19.netlify.app/#/Labs/Lab1">Visit the Labs here</a>
            <p>
            </p> */}


            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">

                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>

            </div>
        </div>
    );
}

