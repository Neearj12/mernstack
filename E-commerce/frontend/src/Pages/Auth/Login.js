import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/Authstyle.css';
import { useAuth } from '../../context/Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useAuth();
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('/api/v1/auth/login', { email, password });

      if (res.data.success) {
        toast.success(res.data.message);

        setTimeout(() => {
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });

          localStorage.setItem('auth', JSON.stringify(res.data));
          navigate(location.state || '/');
        }, 1000);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title={'Login Ecommerce page'}>
      <div className='form-container'>
        <h1>Login Form</h1>
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
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'
              className='form-control'
              id='exampleInputPassword'
              required
            />
          </div>

          {error && <div className='text-danger mb-3'>{error}</div>}

          <div className="mb-3">
          <button type='button' className='btn btn-primary' onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </button>
          </div>

          <button type='submit' className='btn btn-primary'>
         Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
