import React, { useState } from "react";

export default function FeesDefaulters() {
  const [searchBy, setSearchBy] = useState("admission");
  const [searchText, setSearchText] = useState("");
  const [studentType, setStudentType] = useState("current");
  const [classSelected, setClassSelected] = useState("All Classes");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const defaulters = [
    { name: "John Doe", class: "Class 5", amountDue: "500", lastPayment: "2025-03-15" },
    { name: "Jane Smith", class: "Class 3", amountDue: "750", lastPayment: "2025-02-28" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">Fee Defaulters List</h2>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-2xl mb-12 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Search By */}
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-gray-700">Search By</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input
                  type="radio"
                  value="admission"
                  checked={searchBy === "admission"}
                  onChange={() => setSearchBy("admission")}
                  className="accent-blue-600"
                />
                Admission No
              </label>
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input
                  type="radio"
                  value="student"
                  checked={searchBy === "student"}
                  onChange={() => setSearchBy("student")}
                  className="accent-blue-600"
                />
                Student Name
              </label>
            </div>
            <input
              type="text"
              placeholder={searchBy === "admission" ? "Enter Admission No" : "Enter Student Name"}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date Range */}
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-gray-700">Date Range</label>
            <div className="flex flex-col gap-4">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Class Selection */}
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-gray-700">Class</label>
            <select
              value={classSelected}
              onChange={(e) => setClassSelected(e.target.value)}
              className="border rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All Classes">All Classes</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={`Class ${i + 1}`}>
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Student Type */}
          <div className="flex flex-col gap-4">
            <label className="text-lg font-semibold text-gray-700">Student Type</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input
                  type="radio"
                  value="current"
                  checked={studentType === "current"}
                  onChange={() => setStudentType("current")}
                  className="accent-blue-600"
                />
                Current
              </label>
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input
                  type="radio"
                  value="old"
                  checked={studentType === "old"}
                  onChange={() => setStudentType("old")}
                  className="accent-blue-600"
                />
                Old
              </label>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-start mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg">
            Find
          </button>
        </div>
      </div>

      {/* Defaulters List */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
        <div className="flex justify-between items-center p-6 bg-blue-50">
          <h3 className="font-semibold text-gray-800 text-xl">Defaulters List</h3>
          <div className="flex gap-4">
            <button
              onClick={() => alert("Exporting to Excel...")}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-base"
            >
              Export Excel
            </button>
            <button
              onClick={() => alert("Printing...")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-base"
            >
              Print
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-base">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Student Name</th>
                <th className="py-4 px-6 text-left font-semibold">Class</th>
                <th className="py-4 px-6 text-left font-semibold">Amount Due</th>
                <th className="py-4 px-6 text-left font-semibold">Last Payment</th>
              </tr>
            </thead>
            <tbody>
              {defaulters.map((d, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-4 px-6">{d.name}</td>
                  <td className="py-4 px-6">{d.class}</td>
                  <td className="py-4 px-6">{d.amountDue}</td>
                  <td className="py-4 px-6">{d.lastPayment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
