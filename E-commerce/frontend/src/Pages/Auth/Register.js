import React ,{useState} from 'react';
import Layout from '../../Components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../../styles/Authstyle.css'

const Register = () => {
  const[name,setname]=useState(''); 
  const[email,setemail]=useState(''); 
  const[password,setpassword]=useState(''); 
  const[phone,setphone]=useState(''); 
  const[address,setaddress]=useState(''); 
  const[answer,setanswer]=useState(''); 
  const navigate= useNavigate()

  // ==================Form Function======================
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('/api/v1/auth/register', {
        name,
        email,
        password,
        phone,
        address,
        answer,
       
      });
  
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('AxiosError:', error);
  
      // Log detailed error response
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
      }
  
      // Check for specific error response from the server
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to register. Please try again.');
      }
    }
  };
  
  
  return (
    <Layout title={'Register Ecommerce app'}>
      <div className='form-container'>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text"
             value={name} 
             onChange={(e)=>setname(e.target.value)}
              placeholder='Enter Your Name'
               className="form-control" 
               id="exampleInputName"
               required
                 /> 
          </div>

          <div className="mb-3">  
            <input type="email"
             value={email} 
              onChange={(e)=>setemail(e.target.value)}
               placeholder='Enter Your Email'
                className="form-control"
                 id="exampleInputEmail"
                required
                   />
          </div>
  
          <div className="mb-3">
        
            <input type="password"
             value={password}
               onChange={(e)=>setpassword(e.target.value)}
                placeholder='Enter Your Password'
                 className="form-control" 
                 id="exampleInputPassword"
                 required
                 />
          </div>
          <div className="mb-3">
          
            <input type="text"
             value={phone}
               onChange={(e)=>setphone(e.target.value)}
                placeholder='Enter Your Phone No'
                 className="form-control"
                  id="exampleInputEmail1"
                  required
                    />
        
          </div>
          <div className="mb-3">
            <input type="text"
             value={address} 
              onChange={(e)=>setaddress(e.target.value)}
               placeholder='Enter Your Address'
                className="form-control" 
                id="exampleInputAddress"
                required
                  />
        
          </div>
          <div className="mb-3">
            <input type="text"
             value={answer} 
              onChange={(e)=>setanswer(e.target.value)}
               placeholder='Enter Your Pet name'
                className="form-control" 
                id="exampleInputanswer"
                required
                  />
        
          </div>
         
         
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
