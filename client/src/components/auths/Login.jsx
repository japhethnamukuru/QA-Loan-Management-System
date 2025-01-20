import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  // Check token on component load to handle session persistence
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true); // Already logged in, set authentication to true
      navigate('/home'); // Navigate to home or desired page
    }
  }, [setAuth, navigate]);

  // Handle input changes
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // Login success toast
  const loginSuccessful = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }),
      {
        pending: 'Logging in...',
        success: 'Logged in Successfully!',
        error: 'Error!',
      },
      {
        autoClose: 1000,
      }
    );
  };

  const { username, password } = inputs;

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };

      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        // Save token to localStorage
        localStorage.setItem('token', parseRes.token);
        loginSuccessful();
        setTimeout(() => {
          setAuth(true);
          navigate('/home'); // Redirect to the home page after login
        }, 3000);
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col h-auto w-[620px] border rounded-md shadow-md mx-auto my-52 justify-center flex-wrap border-t-4 border-t-red-500">
      <ToastContainer />
      <div>
        <div className="flex justify-between items-center px-8 pt-6 pb-2">
          <div>
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>
          </div>
          <div className="ml-8">
            <ArrowBackIosNew />
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white px-8 pt-6 pb-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-5">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
