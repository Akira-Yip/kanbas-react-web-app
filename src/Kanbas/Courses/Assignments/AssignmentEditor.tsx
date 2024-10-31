// // src/Kanbas/Courses/Assignments/AssignmentEditor.tsx
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addAssignment } from './reducer';
// import { useNavigate } from 'react-router-dom';

// export default function AssignmentEditor() {
//   const [assignment, setAssignment] = useState({
//     _id: '',
//     title: '',
//     description: '',
//     points: 0,
//     dueDate: '',
//     availableFrom: '',
//     availableUntil: '',
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSave = () => {
//     dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString() }));
//     navigate('/Kanbas/Courses/Assignments');
//   };

//   const handleCancel = () => {
//     navigate('/Kanbas/Courses/Assignments');
//   };

//   return (
//     <div>
//       <h1>New Assignment</h1>
//       {/* Input fields */}
//       <input
//         type="text"
//         placeholder="Name"
//         value={assignment.title}
//         onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
//       />
//       {/* Add other fields similarly */}
//       <button onClick={handleSave}>Save</button>
//       <button onClick={handleCancel}>Cancel</button>
//     </div>
//   );
// }

// src/Kanbas/Courses/Assignments/AssignmentEditor.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import { useNavigate, useParams } from 'react-router-dom';

export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingAssignment = useSelector((state: any) =>
    state.assignmentsReducer.find((a: any) => a._id === assignmentId)
  );

  const [assignment, setAssignment] = useState<any>({
    _id: '',
    title: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
    course: cid,
  });

  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString() }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div>
      <h1>{existingAssignment ? 'Edit Assignment' : 'New Assignment'}</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        ></textarea>
      </div>
      <div>
        <label>Points:</label>
        <input
          type="number"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="datetime-local"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
      </div>
      <div>
        <label>Available From:</label>
        <input
          type="datetime-local"
          value={assignment.availableFrom}
          onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
        />
      </div>
      <div>
        <label>Available Until:</label>
        <input
          type="datetime-local"
          value={assignment.availableUntil}
          onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}
