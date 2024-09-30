import React, { useEffect, useState } from 'react';
import { getJobPostings } from '../services/jobService';

const JobPostings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobPostings();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Job Postings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id} className="border p-2 my-2 rounded-md">
            <h2 className="font-semibold">{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Description:</strong> {job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPostings;
