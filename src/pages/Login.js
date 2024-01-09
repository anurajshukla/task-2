import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const predefinedPassword = 'SmartServTest@123';

  const handleLogin = () => {
    if (password === predefinedPassword) {
      setLoggedIn(true);
      setAuthenticated(true);
      navigate("/account");
    } else {
      alert('Invalid password. Make sure it contains an uppercase letter, a number, and @ as a special character.');
    }
  };

  const handleMailClick = () => {
    const emailAddress = 'support@smartserv.io';
    const subject = 'Forgot Password';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    // 
  }, []);

  return (
    <div>
      <section className="h-fit bg-gray-200 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-1 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img src={logo} alt='logo' />
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <input
                    type="email"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button onClick={handleLogin} className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                <p className="text-sm font-light text-gray-400 dark:text-gray-400">
                  <a onClick={handleMailClick} className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Forgot your password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
