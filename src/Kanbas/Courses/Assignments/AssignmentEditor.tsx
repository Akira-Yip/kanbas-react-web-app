import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Import your database

// Define the shape of an assignment object
interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: number;
    group: string;
    gradeDisplay: string;
    submissionType: string;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
}

export default function AssignmentEditor() {
    const { cid, aid } = useParams<{ cid: string; aid: string }>(); // Extract route params
    const [assignment, setAssignment] = useState<Assignment | null>(null); // State to store assignment

    // Fetch the assignment data based on the ID from the URL
    useEffect(() => {
        const fetchedAssignment = db.assignments.find(
            (a) => a._id === aid && a.course === cid
        );
        if (fetchedAssignment) {
            setAssignment({
                ...fetchedAssignment,
                description: fetchedAssignment.description || "",
                points: fetchedAssignment.points || 100,
                group: "assignments",
                gradeDisplay: "percentage",
                submissionType: "online",
                dueDate: fetchedAssignment.dueDate || "2024-05-13T23:59",
                availableFrom: fetchedAssignment.availableFrom || "2024-05-06T00:00",
                availableUntil: fetchedAssignment.availableUntil || "",
            });
        }
    }, [aid, cid]);

    if (!assignment) return <div>Loading assignment...</div>; // Handle loading state

    return (
        <div id="wd-assignments-editor" className="container mt-4 p-4">
            <form>
                {/* Assignment Name */}
                <div className="mb-4">
                    <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
                    <input
                        id="wd-name"
                        className="form-control"
                        defaultValue={assignment.title}
                    />
                </div>

                {/* Description Frame */}
                <div className="mb-4">
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={6}
                        defaultValue={assignment.description}
                    />
                </div>

                {/* Points and Assignment Group */}
                <div className="row mb-4">
                    <div className="col-md-3 d-flex align-items-center">
                        <label htmlFor="wd-points" className="form-label fw-bold mb-0">Points</label>
                    </div>
                    <div className="col-md-9">
                        <input
                            id="wd-points"
                            type="number"
                            className="form-control"
                            value={assignment.points}
                            readOnly
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-3 d-flex align-items-center">
                        <label htmlFor="wd-group" className="form-label fw-bold mb-0">Assignment Group</label>
                    </div>
                    <div className="col-md-9">
                        <select id="wd-group" className="form-select">
                            <option value="assignments">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                {/* Display Grade as */}
                <div className="row mb-4">
                    <div className="col-md-3 d-flex align-items-center">
                        <label htmlFor="wd-grade-display" className="form-label fw-bold mb-0">Display Grade as</label>
                    </div>
                    <div className="col-md-9">
                        <select id="wd-grade-display" className="form-select">
                            <option value="percentage">Percentage</option>
                        </select>
                    </div>
                </div>

                {/* Submission Type Section */}
                <div className="row mb-4 align-items-start">
                    <div className="col-md-3">
                        <label htmlFor="wd-submission-type" className="form-label fw-bold mb-0">Submission Type</label>
                    </div>
                    <div className="col-md-9">
                        <div className="card p-3">
                            <select id="wd-submission-type" className="form-select mb-3">
                                <option value="online">Online</option>
                            </select>

                            <label className="form-label fw-bold">Online Entry Options</label>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="text-entry" />
                                <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="website-url" defaultChecked />
                                <label className="form-check-label" htmlFor="website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="media-recordings" />
                                <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="student-annotation" />
                                <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="file-uploads" />
                                <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assign Section */}
                <div className="row mb-4 align-items-start">
                    <div className="col-md-3">
                        <label htmlFor="wd-assign-to" className="form-label fw-bold mb-0">Assign</label>
                    </div>
                    <div className="col-md-9">
                        <div className="card p-3">
                            {/* Assign to */}
                            <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                            <div className="border p-2 mb-3">
                                <span className="badge bg-light text-dark me-1">Everyone <button type="button" className="btn-close btn-sm" aria-label="Remove"></button></span>
                            </div>

                            {/* Due Date */}
                            <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                            <input
                                id="wd-due-date"
                                type="datetime-local"
                                className="form-control mb-3"
                                defaultValue="2024-05-13T23:59"
                            />

                            {/* Available From and Until */}
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Available from</label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        defaultValue={assignment.availableFrom}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Until</label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        defaultValue={assignment.availableUntil}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-secondary me-3">Cancel</button>
                    <button type="submit" className="btn btn-danger">Save</button>
                </div>
            </form>
        </div>
    );
}