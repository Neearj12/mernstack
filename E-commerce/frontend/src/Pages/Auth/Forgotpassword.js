import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Authstyle.css';
// ... (previous code)

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/v1/auth/forgot-password', { email, answer, newPassword: newpassword, });

      if (res.data.success) {
        toast.success(res.data.message);

        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to reset password. Please try again.');
    }
  };

  return (
    <Layout title={'Forgot-password Ecommerce'}>
      <div className='form-container'>
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
              className='form-control'
              id='exampleInputEmail'
              required
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder='Enter Your Pet name'
              className='form-control'
              id='exampleInputanswer'
              required
            />
          </div>

          <div className='mb-3'>
            <input
              type='password'
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder='Enter New Password'
              className='form-control'
              id='exampleInputPassword'
              required
            />
          </div>

          {error && <div className='text-danger mb-3'>{error}</div>}

          <button type='submit' className='btn btn-primary'>
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Forgotpassword;
