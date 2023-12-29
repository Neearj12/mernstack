import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Get single User data
  const { id } = useParams();
  const getSingleUser = async () => {

      const response = await fetch(`http://localhost:5000/${id}`);
      const result = await response.json();
      if (!response.ok) {
        console.error(result.error);
        setError(result.error);
      } 
      if(response.ok) {
        setError('');
        setName(result.name);
        setEmail(result.email);
        setAge(result.age)
      }
  };

  // Send updated data to user
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };

    try {
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (!response.ok) {
        console.error(result.error);
        setError(result.error);
      } else {
        navigate('/all');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, [id]);

  return (
    <div>
      <div className="container my-2">
        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}
        <h2 className="text-center">Edit the Data</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
            <label className="form-label">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
            <label className="form-label">Age</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
