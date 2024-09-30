import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login'; 
import Register from './pages/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/company-dashboard" element={<CompanyDashboard />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} /> 
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
