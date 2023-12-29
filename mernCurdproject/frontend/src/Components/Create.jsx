import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [error,seterror]=useState("")
  const navigate=useNavigate;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

  
      const response = await fetch('http://localhost:5000', {
        method: 'post',
        body: JSON.stringify(addUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const result = await response.json();
        seterror(result.error);
      } 
      
      if(response.ok){
        const result = await response.json();
        seterror('')
        setAge(0)
        setEmail('')
        setName('')
        navigate('/all')
      }
    }


  return (
    <div className="container my-2">
      {error&&
      <div className="alert alert-danger">
      {error}
    </div>}
      <h2 className="text-center">Enter the Data</h2>
      <form onSubmit={handleSubmit}>
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
  );
};

export default Create;
