
import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';

const ApplicationForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    onSubmit(data); 
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
      <div>
        <label htmlFor="jobId" className="block text-sm font-medium">Job ID</label>
        <input
          id="jobId"
          type="text"
          {...register('jobId', { required: 'Job ID is required' })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.jobId && <span className="text-red-600">{errors.jobId.message}</span>}
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium">Status</label>
        <select
          id="status"
          {...register('status', { required: 'Status is required' })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        {errors.status && <span className="text-red-600">{errors.status.message}</span>}
      </div>

      <Button text="Submit" type="submit" />
    </form>
  );
};

export default ApplicationForm;
