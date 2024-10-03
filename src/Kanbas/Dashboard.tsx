import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/Aqua.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5500 Foundation of Software Engineering
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5500.21057.202510
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">
                                        Fall 2024 Semester Full Term
                                    </small></p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/Lavender.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5002 Discrete Structures
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5002.3623.202330
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">
                                        Spring 2023 Semester Full Term
                                    </small></p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/Creme.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5004 Object-oriented Design
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5004.36236.202330
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">
                                        Spring 2023 Semester Full Term
                                    </small></p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/Green.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5008 Data Str. Algo & App in CmpSys
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5008.52490.202350
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">
                                        Summer Full 2023 Semester
                                    </small></p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5678/Home">
                                <img src="/images/Aqua.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5600 Computer Systems
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5600.20291.20293
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">
                                        Fall 2023 Semester Full Term
                                    </small></p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/9101/Home">
                                <img src="/images/Lavender.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5800 Algorithms
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5800.17600.21224
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">
                                        Fall 2023 Semester Full Term
                                    </small></p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card rounded-3 overflow-hidden h-100">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1122/Home">
                                <img src="/images/Creme.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS5610 Web Development
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5610.20259.202510
                                    </p>
                                    <p className="card-text"><small className="text-body-secondary">
                                        Fall 2024 Semester Full Term
                                    </small></p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div></div>
    );
}