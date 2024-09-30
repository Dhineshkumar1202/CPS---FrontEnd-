import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';

const AdminDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <DashboardLayout title="Admin Dashboard">
      <Card
        title="Manage Students"
        content="View and manage registered students."
        footer={<Button text="View Students" onClick={() => setModalOpen(true)} />}
      />
      <Card
        title="Manage Companies"
        content="View and manage partnered companies."
        footer={<Button text="View Companies" onClick={() => setModalOpen(true)} />}
      />
      <Card
        title="Job Postings"
        content="View and manage job postings."
        footer={<Button text="View Jobs" onClick={() => setModalOpen(true)} />}
      />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Admin Actions">
        <p>Modal content for managing users, companies, or jobs.</p>
      </Modal>
    </DashboardLayout>
  );
};

export default AdminDashboard;
