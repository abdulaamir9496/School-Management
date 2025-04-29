// src/components/certificates/BonafideTracker.jsx
import React from 'react';

const BonafideTracker = () => {
  const certificates = [
    {
      id: '#001',
      name: 'John Smith',
      admissionNo: 'ADM2025001',
      classSection: 'Grade 10-A',
      issueDate: '2025-04-24',
      status: 'Generated',
    },
  ];

  return (
    <div className="p-6 md:p-10">
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-1">Bonafide Certificate Tracker</h2>
        <p className="text-sm text-gray-500 mb-6">Manage and track all generated certificates</p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search by student name or admission number"
            className="w-full sm:w-[350px] px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Filter</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-gray-600 bg-gray-100">
              <tr>
                <th className="px-4 py-2">Serial No.</th>
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Admission No.</th>
                <th className="px-4 py-2">Class & Section</th>
                <th className="px-4 py-2">Issue Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-3">{cert.id}</td>
                  <td className="px-4 py-3">{cert.name}</td>
                  <td className="px-4 py-3">{cert.admissionNo}</td>
                  <td className="px-4 py-3">{cert.classSection}</td>
                  <td className="px-4 py-3">{cert.issueDate}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>Showing 1 to 10 of 50 entries</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 border rounded">Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-2 py-1 border rounded">2</button>
            <button className="px-2 py-1 border rounded">3</button>
            <button className="px-2 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonafideTracker;
