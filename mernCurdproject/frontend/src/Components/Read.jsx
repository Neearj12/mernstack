import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState('');

//Get data from server

  async function getData() {
    try {
      const response = await fetch('http://localhost:5000');
      const result = await response.json();

      if (!response.ok) {
        console.error(result.error);
        seterror(result.error);
      } else {
        setdata(result);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      seterror('Error fetching data');
    }
  }


  // Delete operation
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    if (!response.ok) {
      seterror(result.error);
    } else {
      seterror('Deleted Successfully');
      setTimeout(() => {
        seterror('');
        getData();
      }, 1000);
    }
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className='container my-2'>
      {error && (
        <div className='alert alert-danger'>
          {error}
        </div>
      )}
      <h2 className='text-center'>Show All Data</h2>
      <div className='row'>
        {data.map((ele) => (
          <div key={ele._id} className='col'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{ele.name}</h5>
                <p className='card-text'>{ele.age}</p>
                <p className='card-text'>{ele.email}</p>
                <a href='#' className='card-link' onClick={() => handleDelete(ele._id)}>
                  Delete
                </a>
                <Link to={`/${ele._id}`} className='card-link'>
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;

