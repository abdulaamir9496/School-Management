import React, { useState } from 'react';

const FeesBalanceReport = () => {
  const [searchBy, setSearchBy] = useState('admission');
  const [searchTerm, setSearchTerm] = useState('');
  const [academicYear, setAcademicYear] = useState('2024-2025');
  const [selectedClass, setSelectedClass] = useState('');
  const [studentType, setStudentType] = useState('current');

  const classOptions = ['PP1', 'PP2', ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)];

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleExport = (type) => {
    alert(`${type} file is downloading...`);
  };

  const filteredData = [
    { id: '2025001', name: 'John Smith', class: 'Class 1', total: 50000, paid: 45000 },
    { id: '2025002', name: 'Sarah Johnson', class: 'Class 2', total: 50000, paid: 25000 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Fee Balance Report</h2>
        <select
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          {['2023-2024', '2024-2025', '2025-2026'].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="font-medium mr-2">Search By:</label>
            <label className="mr-2">
              <input
                type="radio"
                value="admission"
                checked={searchBy === 'admission'}
                onChange={() => {
                  setSearchBy('admission');
                  setSearchTerm('');
                }}
              /> Admission No
            </label>
            <label>
              <input
                type="radio"
                value="name"
                checked={searchBy === 'name'}
                onChange={() => {
                  setSearchBy('name');
                  setSearchTerm('');
                }}
              /> Name
            </label>
          </div>

          <select
            className="border rounded px-3 py-1 text-sm"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Classes</option>
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Enter search term..."
            className="border rounded px-3 py-1 flex-1 min-w-[200px]"
            value={searchTerm}
            onChange={handleSearchChange}
            disabled={searchBy === 'admission' ? false : searchBy === 'name' ? false : true}
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
            Find
          </button>

          <div className="ml-auto">
            <label className="mr-2 font-medium">Student Type:</label>
            <label className="mr-2">
              <input
                type="radio"
                value="current"
                checked={studentType === 'current'}
                onChange={() => setStudentType('current')}
              /> Current
            </label>
            <label>
              <input
                type="radio"
                value="old"
                checked={studentType === 'old'}
                onChange={() => setStudentType('old')}
              /> Old
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Fee Balance Report</h3>
          <div className="space-x-2">
            <button onClick={() => handleExport('Excel')} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm">
              Export Excel
            </button>
            <button onClick={() => handleExport('PDF')} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm">
              Export PDF
            </button>
          </div>
        </div>

        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-2 px-3 border">Admission No</th>
              <th className="py-2 px-3 border">Student Name</th>
              <th className="py-2 px-3 border">Class</th>
              <th className="py-2 px-3 border text-black-600">Total Fees</th>
              <th className="py-2 px-3 border text-black-600">Paid Amount</th>
              <th className="py-2 px-3 border text-black-600">Balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-50">
                <td className="px-3 py-2 border">{student.id}</td>
                <td className="px-3 py-2 border">{student.name}</td>
                <td className="px-3 py-2 border">{student.class}</td>
                <td className="px-3 py-2 border text-black-600">{student.total.toLocaleString()}</td>
                <td className="px-3 py-2 border text-black-600">{student.paid.toLocaleString()}</td>
                <td className="px-3 py-2 border text-black-600">{(student.total - student.paid).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesBalanceReport;
