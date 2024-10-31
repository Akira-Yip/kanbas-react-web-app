// // import { Link } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import * as db from "./Database";

// // export default function Dashboard({
// //   courses,
// //   course,
// //   setCourse,
// //   addNewCourse,
// //   deleteCourse,
// //   updateCourse,
// // }: {
// //   courses: any[];
// //   course: any;
// //   setCourse: (course: any) => void;
// //   addNewCourse: () => void;
// //   deleteCourse: (courseId: string) => void;
// //   updateCourse: () => void;
// // }) {
// //   const { currentUser } = useSelector((state: any) => state.accountReducer);
// //   const { enrollments } = db;
// //   return (
// //     <div id="wd-dashboard">
// //       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
// //       <h5>
// //         New Course
// //         <button
// //           className="btn btn-primary float-end"
// //           id="wd-add-new-course-click"
// //           onClick={addNewCourse}
// //         >
// //           Add
// //         </button>
// //         <button
// //           className="btn btn-warning float-end me-2"
// //           onClick={updateCourse}
// //           id="wd-update-course-click"
// //         >
// //           Update
// //         </button>
// //       </h5>
// //       <br />
// //       <input
// //         value={course.name}
// //         className="form-control mb-2"
// //         onChange={(e) => setCourse({ ...course, name: e.target.value })}
// //       />
// //       <textarea
// //         value={course.description}
// //         className="form-control"
// //         onChange={(e) => setCourse({ ...course, description: e.target.value })}
// //       />
// //       <hr />
// //       <h2 id="wd-dashboard-published">
// //         Published Courses ({courses.length})
// //       </h2>{" "}
// //       <hr />
// //       <div id="wd-dashboard-courses" className="row">
// //         <div className="row row-cols-1 row-cols-md-5 g-4">
// //           {courses
// //             .filter((course) =>
// //               enrollments.some(
// //                 (enrollment) =>
// //                   enrollment.user === currentUser._id &&
// //                   enrollment.course === course._id
// //               )
// //             )
// //             .map((course) => (
// //               <div
// //                 key={courseItem._id}
// //                 className="wd-dashboard-course col"
// //                 style={{ width: "300px" }}
// //               >
// //                 <div className="card rounded-3 overflow-hidden">
// //                   <Link
// //                     to={`/Kanbas/Courses/${courseItem._id}/Home`}
// //                     className="wd-dashboard-course-link text-decoration-none text-dark"
// //                   >
// //                     <img
// //                       src={courseItem.image}
// //                       alt={courseItem.name}
// //                       width="100%"
// //                       height={160}
// //                     />
// //                     <div className="card-body">
// //                       <h5 className="wd-dashboard-course-title card-title">
// //                         {courseItem.name}
// //                       </h5>
// //                       <p
// //                         className="wd-dashboard-course-title card-text overflow-y-hidden"
// //                         style={{ maxHeight: 100 }}
// //                       >
// //                         {courseItem.description}
// //                       </p>
// //                       <button className="btn btn-primary">Go</button>
// //                     </div>
// //                   </Link>
// //                   <div className="card-footer">
// //                     <button
// //                       onClick={() => deleteCourse(courseItem._id)}
// //                       className="btn btn-danger float-end"
// //                       id="wd-delete-course-click"
// //                     >
// //                       Delete
// //                     </button>
// //                     <button
// //                       id="wd-edit-course-click"
// //                       onClick={() => setCourse(courseItem)}
// //                       className="btn btn-warning me-2 float-end"
// //                     >
// //                       Edit
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import * as db from "./Database"; // import Database from "./Database"; // Correct default import
// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = db;
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h5>
//         New Course
//         <button
//           className="btn btn-primary float-end"
//           id="wd-add-new-course-click"
//           onClick={addNewCourse}
//         >
//           {" "}
//           Add{" "}
//         </button>
//         <button
//           className="btn btn-warning float-end me-2"
//           onClick={updateCourse}
//           id="wd-update-course-click"
//         >
//           Update
//         </button>
//       </h5>
//       <br />
//       <input
//         defaultValue={course.name}
//         className="form-control mb-2"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//       />
//       <textarea
//         defaultValue={course.description}
//         className="form-control"
//         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//       />
//       <hr />
//       <h2 id="wd-dashboard-published">
//         Published Courses ({courses.length})
//       </h2>{" "}
//       <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses
//             .filter((course) =>
//               enrollments.some(
//                 (enrollment) =>
//                   enrollment.user === currentUser._id &&
//                   enrollment.course === course._id
//               )
//             )
//             .map((course) => (
//               <div
//                 className="wd-dashboard-course col"
//                 style={{ width: "300px" }}
//               >
//                 <div className="card rounded-3 overflow-hidden">
//                   <Link
//                     to={`/Kanbas/Courses/${course._id}/Home`}
//                     className="wd-dashboard-course-link text-decoration-none text-dark"
//                   >
//                     <img
//                       src={course.image}
//                       alt={course.name}
//                       width="100%"
//                       height={160}
//                     />
//                     <div className="card-body">
//                       <h5 className="wd-dashboard-course-title card-title">
//                         {course.name}{" "}
//                       </h5>
//                       <p
//                         className="wd-dashboard-course-title card-text overflow-y-hidden"
//                         style={{ maxHeight: 100 }}
//                       >
//                         {course.description}{" "}
//                       </p>
//                       <button className="btn btn-primary"> Go </button>
//                       <button
//                         onClick={(event) => {
//                           event.preventDefault();
//                           deleteCourse(course._id);
//                         }}
//                         className="btn btn-danger float-end"
//                         id="wd-delete-course-click"
//                       >
//                         Delete
//                       </button>
//                       <button
//                         id="wd-edit-course-click"
//                         onClick={(event) => {
//                           event.preventDefault();
//                           setCourse(course);
//                         }}
//                         className="btn btn-warning me-2 float-end"
//                       >
//                         Edit
//                       </button>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// In Dashboard.tsx
// src/Kanbas/Dashboard.tsx
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { enrollCourse, unenrollCourse } from './Enrollments/reducer';

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleToggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };

  let displayedCourses = courses;

  if (currentUser.role === 'STUDENT' && !showAllCourses) {
    // Show only courses the student is enrolled in
    displayedCourses = courses.filter((course: any) =>
      enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === course._id
      )
    );
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role === 'FACULTY' && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}
      {currentUser.role === 'STUDENT' && (
        <button
          className="btn btn-primary float-end"
          onClick={handleToggleEnrollments}
        >
          Enrollments
        </button>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course: any) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id && enrollment.course === course._id
            );
            return (
              <div
                key={course._id}
                className="wd-dashboard-course col"
                style={{ width: '300px' }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src={course.image}
                      alt={course.name}
                      width="100%"
                      height={160}
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                    </div>
                  </Link>
                  {currentUser.role === 'FACULTY' && (
                    <>
                      <button className="btn btn-primary"> Go </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </>
                  )}
                  {currentUser.role === 'STUDENT' && (
                    <button
                      onClick={() => {
                        if (isEnrolled) {
                          dispatch(
                            unenrollCourse({
                              userId: currentUser._id,
                              courseId: course._id,
                            })
                          );
                        } else {
                          dispatch(
                            enrollCourse({
                              userId: currentUser._id,
                              courseId: course._id,
                            })
                          );
                        }
                      }}
                      className={`btn ${isEnrolled ? 'btn-danger' : 'btn-success'}`}
                    >
                      {isEnrolled ? 'Unenroll' : 'Enroll'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
