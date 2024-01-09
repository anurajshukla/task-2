import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Account from './pages/Account';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login setAuthenticated={setAuthenticated} />} />
        <Route
          path="/account"
          element={authenticated ? <Account /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
