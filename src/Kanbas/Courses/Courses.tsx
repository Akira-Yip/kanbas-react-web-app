// src/Kanbas/Courses/Courses.tsx
import React, { useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Assignments from './Assignments/Assignments';
import AssignmentEditor from './Assignments/AssignmentEditor';

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer);

  useEffect(() => {
    if (currentUser.role === 'STUDENT') {
      const isEnrolled = enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === cid
      );
      if (!isEnrolled) {
        navigate('/Kanbas/Dashboard');
      }
    }
  }, [cid, currentUser, enrollments, navigate]);

  return (
    <div>
      <h1>Course: {cid}</h1>
      {/* Navigation within the course */}
      <nav>
        <Link to="Home">Home</Link> |{' '}
        <Link to="Assignments">Assignments</Link>
      </nav>
      <Routes>
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Assignments/new" element={<AssignmentEditor />} />
        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
      </Routes>
    </div>
  );
}
