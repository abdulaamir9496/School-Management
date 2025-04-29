// src/components/certificates/BonafideForm.jsx
import React, { useState } from 'react';
const BonafideForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    admissionNo: '',
    class: '',
    section: '',
    academicYear: '',
    reason: '',
    issueDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      fullName: '',
      admissionNo: '',
      class: '',
      section: '',
      academicYear: '',
      reason: '',
      issueDate: '',
    });
  };

  return (
    <div className="p-6 md:p-10">
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-1">Bonafide Certificate Form</h2>
        <p className="text-sm text-gray-500 mb-6">Fill out the required details to generate a certificate</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Student Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
          <Input label="Admission Number" name="admissionNo" value={formData.admissionNo} onChange={handleChange} />

          <Select label="Class" name="class" value={formData.class} onChange={handleChange} options={Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)} />
          <Select label="Section" name="section" value={formData.section} onChange={handleChange} options={['A', 'B', 'C']} />

          <Input label="Academic Year" name="academicYear" value={formData.academicYear} onChange={handleChange} placeholder="2024-2025" />
          <Input label="Issue Date" name="issueDate" value={formData.issueDate} onChange={handleChange} type="date" />

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Reason for Certificate</label>
            <textarea name="reason" value={formData.reason} onChange={handleChange} rows={3} className="w-full px-4 py-2 border rounded-lg shadow-sm" required></textarea>
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-4">
            <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Generate Certificate</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input {...props} className="w-full px-4 py-2 border rounded-lg shadow-sm" required />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select {...props} className="w-full px-4 py-2 border rounded-lg shadow-sm" required>
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default BonafideForm;