import { useParams, Link, useNavigate } from "react-router-dom";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { FaClipboardList, FaCaretDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentsControlButton";
import LessonControlButtons from "./LessonControlButtons";
import * as db from "../../Database"; // Import your database
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams(); // Extract course ID from URL
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as assignmentsClient from "./client";

// export default function Assignments() {
//   const { cid } = useParams();
//   const [assignments, setAssignments] = useState<any[]>([]);
//   const [newAssignment, setNewAssignment] = useState<any>({
//     title: "",
//     description: "",
//   });

//   const fetchAssignments = async () => {
//     const data = await assignmentsClient.findAssignmentsForCourse(cid!);
//     setAssignments(data);
//   };

//   const handleCreateAssignment = async () => {
//     const createdAssignment = await assignmentsClient.createAssignment(
//       cid!,
//       newAssignment
//     );
//     setAssignments([...assignments, createdAssignment]);
//     setNewAssignment({ title: "", description: "" });
//   };

//   const handleUpdateAssignment = async (assignmentId: string, updates: any) => {
//     await assignmentsClient.updateAssignment(assignmentId, updates);
//     fetchAssignments();
//   };

//   const handleDeleteAssignment = async (assignmentId: string) => {
//     await assignmentsClient.deleteAssignment(assignmentId);
//     setAssignments(assignments.filter((a) => a._id !== assignmentId));
//   };

//   useEffect(() => {
//     fetchAssignments();
//   }, [cid]);

//   return (
//     <div>
//       <h2>Assignments</h2>
//       <ul>
//         {assignments.map((assignment) => (
//           <li key={assignment._id}>
//             <h3>{assignment.title}</h3>
//             <p>{assignment.description}</p>
//             <button onClick={() => handleDeleteAssignment(assignment._id)}>
//               Delete
//             </button>
//             {/* Add edit functionality as needed */}
//           </li>
//         ))}
//       </ul>
//       <h3>Create New Assignment</h3>
//       <input
//         type="text"
//         placeholder="Title"
//         value={newAssignment.title}
//         onChange={(e) =>
//           setNewAssignment({ ...newAssignment, title: e.target.value })
//         }
//       />
//       <textarea
//         placeholder="Description"
//         value={newAssignment.description}
//         onChange={(e) =>
//           setNewAssignment({ ...newAssignment, description: e.target.value })
//         }
//       />
//       <button onClick={handleCreateAssignment}>Create Assignment</button>
//     </div>
//   );
// }

// src/Kanbas/Courses/Assignments/index.tsx

// src/Kanbas/Courses/Assignments/index.tsx

// import React, { useEffect } from 'react';
// import { useParams, Link, Routes, Route } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { fetchAssignmentsForCourse } from './reducer';
// import AssignmentEditor from './AssignmentEditor';

// const Assignments = () => {
//   const { cid } = useParams();
//   const dispatch = useAppDispatch();
//   const assignments = useAppSelector((state) => state.assignmentsReducer);

//   useEffect(() => {
//     if (cid) {
//       dispatch(fetchAssignmentsForCourse(cid));
//     }
//   }, [cid, dispatch]);

//   return (
//     <div>
//       <h2>Assignments</h2>
//       <Link to="new" className="btn btn-primary mb-3">
//         Create New Assignment
//       </Link>
//       <ul className="list-group">
//         {assignments.map((assignment: any) => (
//           <li key={assignment._id} className="list-group-item">
//             <h5>{assignment.title}</h5>
//             <p>{assignment.description}</p>
//             <Link to={`${assignment._id}/edit`} className="btn btn-warning me-2">
//               Edit
//             </Link>
//             {/* Add other buttons like Delete if needed */}
//           </li>
//         ))}
//       </ul>

//       <Routes>
//         <Route path="new" element={<AssignmentEditor />} />
//         <Route path=":assignmentId/edit" element={<AssignmentEditor />} />
//       </Routes>
//     </div>
//   );
// };

// export default Assignments;

