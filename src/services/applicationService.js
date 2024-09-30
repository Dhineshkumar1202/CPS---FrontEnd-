import axios from 'axios';

const API_URL = 'http://localhost:5000/api/applications'; 

export const fetchApplications = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true }); 
  } catch (error) {
    console.error('Error fetching applications:', error);
    throw error; 
  }
};

export const createApplication = async (applicationData) => {
  try {
    const response = await axios.post(API_URL + '/apply', applicationData, { withCredentials: true });
    return response.data; 
  } catch (error) {
    console.error('Error creating application:', error);
    throw error; 
  }
};

export const deleteApplication = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-application/${id}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error deleting application:', error);
    throw error; 
  }
};


