import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDashboard from './pages/StudentDashboard'
import CompanyDashboard from './pages/CompanyDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return <>
<BrowserRouter>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/company-dashboard" element={<CompanyDashboard />}></Route>
        <Route path="/student-dashboard" element={<StudentDashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </>
}

export default App