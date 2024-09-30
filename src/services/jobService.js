import axios from 'axios';

const API_URL = '/api/jobs/';

const getJobPostings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createJobPosting = async (jobData) => {
  const response = await axios.post(API_URL, jobData);
  return response.data;
};

export { getJobPostings, createJobPosting };
