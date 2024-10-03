import React from 'react';
import { BsPlusLg, BsThreeDotsVertical, BsGripVertical, BsSearch } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import AssigmentControlButtons from './AssignmentsControlButton';
import { FaCaretDown } from "react-icons/fa";
import LessonControlButtons from './LessonControlButtons';

export default function Assignments() {
    return (
        <div id="wd-assignments" className="p-4">
            {/* Search and Add Buttons */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group w-75 me-3">
                    <span className="input-group-text bg-white border-end-0 p-2" style={{ borderRadius: '4px 0 0 4px' }}>
                        <BsSearch className="text-muted" />
                    </span>
                    <input
                        id="wd-search-assignments"
                        type="text"
                        placeholder="Search..."
                        className="form-control border-start-0"
                        style={{ paddingLeft: '0.5rem', borderRadius: '0 4px 4px 0' }}
                    />
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-secondary me-1" style={{ color: '#555555', borderRadius: '4px' }}>
                        + Group
                    </button>
                    <button className="btn" style={{ backgroundColor: '#d32f2f', color: '#fff', borderRadius: '4px' }}>
                        + Assignment
                    </button>
                </div>
            </div>

            {/* Assignments List */}
            <div>
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary text-black d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2 fs-3" />
                                <FaCaretDown />
                                Assignments
                            </div>
                            <AssigmentControlButtons />
                        </div>
                        <ul className="wd-lessons list-group rounded-0">
                            {/* Assignment Item A1 */}
                            <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-1">
                                        <BsGripVertical className="me-3 fs-4 text-muted" />
                                        <FaClipboardList className="text-success me-2 fs-4" />
                                        <a className="wd-assignment-link text-dark fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/456">
                                            A1 - ENV + HTML
                                        </a>
                                    </div>
                                    <div className="d-flex text-black small">
                                        <span style={{ color: '#b71c1c' }}>Multiple Modules</span>
                                        <span className="ms-3 text-black">| <strong>&nbsp;Not available until</strong> May 6 at 12:00am</span>
                                        <span className="ms-3 text-black">| <strong>&nbsp;Due</strong> May 13 at 11:59pm</span>
                                        <span className="ms-3 text-black">| 100 pts</span>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </li>

                            {/* Assignment Item A2 */}
                            <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-1">
                                        <BsGripVertical className="me-3 fs-4 text-muted" />
                                        <FaClipboardList className="text-success me-2 fs-4" />
                                        <a className="wd-assignment-link text-dark fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/456">
                                            A2 - CSS + BOOTSTRAP
                                        </a>
                                    </div>
                                    <div className="d-flex text-black small">
                                        <span style={{ color: '#b71c1c' }}>Multiple Modules</span>
                                        <span className="ms-3 text-black">| <strong>Not available until</strong> May 13 at 12:00am</span>
                                        <span className="ms-3 text-black">| <strong>Due</strong> May 20 at 11:59pm</span>
                                        <span className="ms-3 text-black">| 100 pts</span>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </li>

                            {/* Assignment Item A3 */}
                            <li className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-start">
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center mb-1">
                                        <BsGripVertical className="me-3 fs-4 text-muted" />
                                        <FaClipboardList className="text-success me-2 fs-4" />
                                        <a className="wd-assignment-link text-dark fw-bold text-decoration-none" href="#/Kanbas/Courses/1234/Assignments/789">
                                            A3 - JAVASCRIPT + REACT
                                        </a>
                                    </div>
                                    <div className="d-flex text-black small">
                                        <span style={{ color: '#b71c1c' }}>Multiple Modules</span>
                                        <span className="ms-3 text-black">| <strong>&nbsp;Not available until</strong> May 20 at 12:00am</span>
                                        <span className="ms-3 text-black">| <strong>&nbsp;Due</strong> May 27 at 11:59pm</span>
                                        <span className="ms-3 text-black">| 100 pts</span>
                                    </div>
                                </div>
                                <LessonControlButtons />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
