import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteAssignment } from './reducer';

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from URL
  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.filter((a: any) => a.course === cid)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (assignmentId: string) => {
    if (window.confirm('Are you sure you want to remove the assignment?')) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div>
      <h1>Assignments</h1>
      <button onClick={() => navigate('new')}>+ Assignment</button>
      <ul>
        {assignments.map((assignment: any) => (
          <li key={assignment._id}>
            <Link to={`${assignment._id}`}>{assignment.title}</Link>
            <button onClick={() => handleDelete(assignment._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
