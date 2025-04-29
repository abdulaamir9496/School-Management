import React, { useState } from "react";

const SendDefaulterAbsentSMS = () => {
    const [activeTab, setActiveTab] = useState("Fee Defaulters");
    const [selectedClass, setSelectedClass] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [message, setMessage] = useState("");
    const [showList, setShowList] = useState(false);
    const [error, setError] = useState("");

    const classOptions = [
        "PP1", "PP2", "Class 1", "Class 2", "Class 3",
        "Class 4", "Class 5", "Class 6", "Class 7",
        "Class 8", "Class 9", "Class 10"
    ];

    const feeDefaulters = [
        { name: "John Doe", class: "Class 5", phone: "+91 98765 43210", pendingAmount: "₹5,000" },
        { name: "Alice Smith", class: "Class 6", phone: "+91 87654 32109", pendingAmount: "₹3,200" },
    ];

    const absentStudents = [
        { name: "Jane Doe", class: "Class 2", phone: "+91 91234 56789", date: "27-Apr-2025" },
        { name: "Michael Brown", class: "PP1", phone: "+91 99887 66554", date: "27-Apr-2025" },
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowList(false);
        setSelectedClass("");
        setSearchTerm("");
        setMessage("");
        setError("");
    };

    const handleFind = () => {
        if (!selectedClass && !searchTerm.trim()) {
            setError("Please enter class or search term.");
            setShowList(false);
            return;
        }
        setError("");
        setShowList(true);
    };

    const handleSendSMS = () => {
        alert("SMS Sent Successfully!");
        setMessage("");
    };

    const allStudents = activeTab === "Fee Defaulters" ? feeDefaulters : absentStudents;

    // Filtering logic based on Class or Search
    const filteredStudents = allStudents.filter((student) => {
        const matchesClass = selectedClass ? student.class === selectedClass : true;
        const matchesName = searchTerm
            ? student.name.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        return matchesClass && matchesName;
    });

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-blue-700">Send Notifications</h1>
                <p className="text-gray-500">Academic Year 2024-2025</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    onClick={() => handleTabChange("Fee Defaulters")}
                    className={`px-4 py-2 font-semibold ${activeTab === "Fee Defaulters"
                            ? "text-blue-700 border-b-2 border-blue-700"
                            : "text-gray-400"
                        }`}
                >
                    Fee Defaulters
                </button>
                <button
                    onClick={() => handleTabChange("Absent Students")}
                    className={`px-4 py-2 font-semibold ${activeTab === "Absent Students"
                            ? "text-blue-700 border-b-2 border-blue-700"
                            : "text-gray-400"
                        }`}
                >
                    Absent Students
                </button>
            </div>

            {/* Search Filters */}
            <div className="bg-white p-6 rounded-xl shadow mb-6">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                    {/* Class Dropdown */}
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg w-full md:w-1/3"
                    >
                        <option value="">Select Class</option>
                        {classOptions.map((cls) => (
                            <option key={cls} value={cls}>
                                {cls}
                            </option>
                        ))}
                    </select>

                    {/* Search Input */}
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter student name..."
                        className="border border-gray-300 p-2 rounded-lg w-full md:w-1/3"
                    />

                    {/* Find Button */}
                    <button
                        onClick={handleFind}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full md:w-auto"
                    >
                        Find
                    </button>
                </div>

                {/* Error message */}
                {error && (
                    <div className="text-red-500 text-sm mt-2">
                        {error}
                    </div>
                )}
            </div>

            {/* Student List */}
            {showList && (
                <div className="bg-white p-6 rounded-xl shadow mb-6">
                    {filteredStudents.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-700">
                                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                                    <tr>
                                        <th className="px-4 py-2">Student Name</th>
                                        <th className="px-4 py-2">Class</th>
                                        <th className="px-4 py-2">Phone</th>
                                        {activeTab === "Fee Defaulters" ? (
                                            <th className="px-4 py-2">Pending Amount</th>
                                        ) : (
                                            <th className="px-4 py-2">Absent Date</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredStudents.map((student, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="px-4 py-3">{student.name}</td>
                                            <td className="px-4 py-3">{student.class}</td>
                                            <td className="px-4 py-3">{student.phone}</td>
                                            {activeTab === "Fee Defaulters" ? (
                                                <td className="px-4 py-3">{student.pendingAmount}</td>
                                            ) : (
                                                <td className="px-4 py-3">{student.date}</td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-gray-500 text-center py-6">
                            No students found.
                        </div>
                    )}
                </div>
            )}

            {/* SMS Message Section */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="font-semibold text-gray-700 mb-2">SMS Message</h2>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    placeholder={`Type your ${activeTab === "Fee Defaulters" ? "Fee Reminder" : "Absentee"} SMS here...`}
                />
                <div className="text-sm text-gray-400 mt-1">
                    {160 - message.length} characters remaining
                </div>
                <button
                    onClick={handleSendSMS}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                    <span>Send SMS</span>
                </button>
            </div>
        </div>
    );
};

export default SendDefaulterAbsentSMS;