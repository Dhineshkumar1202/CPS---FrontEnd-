// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [applications, setApplications] = useState([]);
    const [interviews, setInterviews] = useState([]);
    const [recentJobs, setRecentJobs] = useState([]);
    
   
    useEffect(() => {
        
        fetchApplications();
        fetchInterviews();
        fetchRecentJobs();
    }, []);
    
    const fetchApplications = () => {
        
        const mockApplications = [
            { id: 1, jobTitle: 'Software Engineer', status: 'Shortlisted' },
            { id: 2, jobTitle: 'Data Analyst', status: 'Reviewed' },
        ];
        setApplications(mockApplications);
    };

    const fetchInterviews = () => {
        
        const mockInterviews = [
            { id: 1, company: 'Tech Corp', date: '2024-10-01', time: '10:00 AM' },
        ];
        setInterviews(mockInterviews);
    };

    const fetchRecentJobs = () => {
        
        const mockJobs = [
            { id: 1, title: 'Frontend Developer', company: 'Web Solutions', link: '/jobs/1' },
            { id: 2, title: 'Backend Developer', company: 'Tech Innovations', link: '/jobs/2' },
        ];
        setRecentJobs(mockJobs);
    };

    return (
        <div className="dashboard">
            <h1>Welcome to Your Dashboard</h1>
            <section>
                <h2>Your Applications</h2>
                <ul>
                    {applications.map(app => (
                        <li key={app.id}>
                            {app.jobTitle} - Status: {app.status}
                        </li>
                    ))}
                </ul>
                <Link to="/applications">View All Applications</Link>
            </section>
            <section>
                <h2>Your Upcoming Interviews</h2>
                <ul>
                    {interviews.map(interview => (
                        <li key={interview.id}>
                            {interview.company} on {interview.date} at {interview.time}
                        </li>
                    ))}
                </ul>
                <Link to="/interviews">View All Interviews</Link>
            </section>
            <section>
                <h2>Recent Job Postings</h2>
                <ul>
                    {recentJobs.map(job => (
                        <li key={job.id}>
                            <Link to={job.link}>{job.title}</Link> - Company: {job.company}
                        </li>
                    ))}
                </ul>
                <Link to="/jobs">View All Jobs</Link>
            </section>
        </div>
        
    );
    
};

export default Dashboard;
