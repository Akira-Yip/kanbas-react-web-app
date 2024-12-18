import { useParams, Link, useNavigate } from "react-router-dom";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaClipboardList, FaCaretDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentsControlButton";
import LessonControlButtons from "./LessonControlButtons";
import * as db from "../../Database"; // Import your database
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";
import { setAssignments } from "./reducer";
import { useEffect } from "react";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams(); // Extract course ID from URL
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch assignments from database when cid changes
  useEffect(() => {
    const loadAssignments = async () => {
      if (cid) {
        const data = await assignmentsClient.findAssignmentsForCourse(cid);
        // Dispatch the assignments into the store
        dispatch(setAssignments(data));
      }
    };
    loadAssignments();
  }, [cid, dispatch]);
  // Handle delete assignment
  const handleDeleteAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    // Update the local store to remove the deleted assignment
    dispatch(
      setAssignments(assignments.filter((a: any) => a._id !== assignmentId))
    );
  };

  return (
    <div id="wd-assignments" className="p-4">
      {/* Search and Add Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-75 me-3">
          <span
            className="input-group-text bg-white border-end-0 p-2"
            style={{ borderRadius: "4px 0 0 4px" }}
          >
            <BsSearch className="text-muted" />
          </span>
          <input
            id="wd-search-assignments"
            type="text"
            placeholder="Search..."
            className="form-control border-start-0"
            style={{ paddingLeft: "0.5rem", borderRadius: "0 4px 4px 0" }}
          />
        </div>
        <div className="d-flex">
          <button
            className="btn btn-outline-secondary me-1"
            style={{ color: "#555555", borderRadius: "4px" }}
          >
            + Group
          </button>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments/New`}
            className="btn"
            style={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            + Assignment
          </Link>
        </div>
      </div>

      {/* Assignments List */}
      <div>
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary text-black d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                <FaCaretDown className="me-2" />
                Assignments
              </div>
              <AssignmentControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {assignments.length > 0 ? (
                assignments.map((assignment: any) => (
                  <li
                    key={assignment._id}
                    className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-start"
                  >
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-1">
                        <BsGripVertical className="me-3 fs-4 text-muted" />
                        <FaClipboardList className="text-success me-2 fs-4" />
                        <Link
                          className="wd-assignment-link text-dark fw-bold text-decoration-none"
                          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          {assignment.title}
                        </Link>
                      </div>
                      <div className="d-flex text-black small">
                        <span style={{ color: "#b71c1c" }}>
                          Multiple Modules
                        </span>
                        <span className="ms-3 text-black">
                          | <strong>Not available until</strong>{" "}
                          {new Date(assignment.availableFrom).toLocaleString()}
                        </span>
                        <span className="ms-3 text-black">
                          | <strong>Due</strong>{" "}
                          {new Date(assignment.dueDate).toLocaleString()}
                        </span>
                        <span className="ms-3 text-black">
                          | {assignment.points} pts
                        </span>
                      </div>
                    </div>
                    <LessonControlButtons />
                    {/* Delete button */}
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => handleDeleteAssignment(assignment._id)}
                    >
                      Delete
                    </button>
                  </li>
                ))
              ) : (
                <li className="list-group-item text-center">
                  No assignments found for this course.
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}