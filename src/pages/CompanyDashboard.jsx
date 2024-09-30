import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';

const CompanyDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <DashboardLayout title="Company Dashboard">
      <Card
        title="Post a Job"
        content="Create and manage job postings."
        footer={<Button text="Create Job" onClick={() => setModalOpen(true)} />}
      />
      <Card
        title="View Applications"
        content="Review applications from students."
        footer={<Button text="View Applications" onClick={() => setModalOpen(true)} />}
      />
      <Card
        title="Schedule Interviews"
        content="Schedule interviews with candidates."
        footer={<Button text="Schedule Interview" onClick={() => setModalOpen(true)} />}
      />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Job Posting Form">
        <p>Form to create a job posting or schedule an interview.</p>
      </Modal>
    </DashboardLayout>
  );
};

export default CompanyDashboard;
