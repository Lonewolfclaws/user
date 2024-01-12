// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfilePage from './UserProfilePage';
import EditProfilePage from './EditProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
