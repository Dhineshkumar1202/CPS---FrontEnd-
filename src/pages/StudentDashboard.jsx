import React, { useEffect, useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import ApplicationForm from '../components/ApplicationForm';
import { fetchApplications, createApplication } from '../services/applicationService'; 

const StudentDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadApplications = async () => {
      setLoading(true);
      try {
        const data = await fetchApplications();
        setApplications(data);
      } catch (error) {
        console.error("Failed to load applications", error);
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  const handleCreateApplication = async (data) => {
    try {
      const newApplication = await createApplication(data); 
      setApplications((prev) => [...prev, newApplication]); 
      setModalOpen(false); 
    } catch (error) {
      console.error("Failed to create application", error);
    }
  };

  return (
    <DashboardLayout title="Student Dashboard">
      {loading ? (
        <div className="text-lg font-semibold text-center">Loading applications...</div>
      ) : (
        <>
          <Card
            title="Job Postings"
            content="View available job postings."
            footer={<Button text="View Jobs" onClick={() => setModalOpen(true)} className="mt-4" />}
          />
          <Card
            title="Your Applications"
            content="Track and manage your job applications."
            footer={<Button text="View Applications" onClick={() => setModalOpen(true)} className="mt-4" />}
          />
          <Card
            title="Interview Schedule"
            content="Check your upcoming interviews."
            footer={<Button text="View Interviews" onClick={() => setModalOpen(true)} className="mt-4" />}
          />

          {/* Modal for creating applications */}
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Create Application">
            <ApplicationForm onSubmit={handleCreateApplication} />
          </Modal>
        </>
      )}
    </DashboardLayout>
  );
};

export default StudentDashboard;
