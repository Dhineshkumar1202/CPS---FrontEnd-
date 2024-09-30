import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApplicationDetail } from '../services/applicationService';

const ApplicationDetail = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplicationDetail = async () => {
      const data = await getApplicationDetail(id);
      setApplication(data);
    };
    fetchApplicationDetail();
  }, [id]);

  if (!application) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{application.jobTitle}</h1>
      <p><strong>Status:</strong> {application.status}</p>
      <p><strong>Company:</strong> {application.companyName}</p>
      <p><strong>Details:</strong> {application.details}</p>
    </div>
  );
};

export default ApplicationDetail;
