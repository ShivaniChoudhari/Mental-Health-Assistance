import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateForum = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the forum (e.g., API call)
    console.log('New Forum Created:', { title, description });
    navigate('/forums'); // Redirect back to forums page
  }; //hi

  return (
    <div className="create-forum container mt-4">
      <h2 className="text-center mb-4">Create a New Forum</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title">Forum Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Forum Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Create Forum</button>
      </form>
    </div>
  );
};

export default CreateForum;



// when db is connected 

//Replace the placeholder console.log() in the handleSubmit function with an API call to create the forum.

// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const forumData = { title, description, created_by: 1 }; // Assuming user ID is 1 for now
  
//     try {
//       const response = await fetch('http://localhost:5000/api/forums', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(forumData),
//       });
  
//       if (response.ok) {
//         console.log('Forum created successfully');
//         navigate('/forums');
//       } else {
//         console.error('Failed to create forum');
//       }
//     } catch (error) {
//       console.error('Error creating forum:', error);
//     }
//   };
  