import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../src/Assets/css/main.css'
import Login from '../Login/index'


const routing = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default routing