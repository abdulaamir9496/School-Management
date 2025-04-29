import React, { useState } from 'react';

const SendSingleSMS = () => {
    const [searchType, setSearchType] = useState('admission');
    const [searchQuery, setSearchQuery] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const maxCharacters = 160;

    const handleFindStudent = () => {
        if (!searchQuery.trim()) {
            alert('Please enter a search query.');
            return;
        }
        // You can add real search logic here later
        console.log(`Searching for: ${searchQuery} by ${searchType}`);
    };

    const handleSendSMS = () => {
        if (!searchQuery.trim() || !message.trim()) {
            alert('Please fill all fields before sending SMS.');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(`📨 Message Sent Successfully!\n\nTo: ${searchQuery}\nMessage: ${message}`);
            setSearchQuery('');
            setMessage('');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-white p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Send Single SMS</h1>

            {/* Search Section */}
            <div className="bg-white-150 p-6 rounded-2xl shadow mb-10">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by name or admission ID..."
                        className="flex-1 p-3 rounded-2xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    {/* Select Class */}
                    <select
                        className="p-3 rounded-2xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                    >
                        <option value="admission">Admission No</option>
                        <option value="student">Student Name</option>
                    </select>

                    {/* Find Button */}
                    <button
                        onClick={handleFindStudent}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300"
                    >
                        Find
                    </button>
                </div>
            </div>

            {/* Found Student Card */}
            {searchQuery && (
                <div className="flex justify-center mb-10">
                    <div className="bg-white border border-blue-200 p-6 rounded-2xl shadow-lg w-full md:w-2/3 text-center">
                        <p className="text-2xl font-semibold text-blue-800 mb-2">Rahul Kumar</p>
                        <p className="text-gray-700 text-xl font-bold">Admission ID: GS2025001</p>
                        <div className="flex justify-center gap-3 mt-4">
                            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Class X-A</span>
                            <span className="text-sm text-gray-600 px-3 py-1 rounded-full">Father name : Rajesh Kumar</span>
                            <span className="text-sm text-gray-600 px-3 py-1 rounded-full">Mobile Number : 8919069001</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Compose Message */}
            <div className="bg-white-150 p-6 rounded-2xl shadow">
                <label className="block text-xl text-blue-700 font-semibold mb-3">Compose Message</label>
                <textarea
                    rows="6"
                    placeholder="Type your message here..."
                    className="w-full p-4 rounded-2xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    value={message}
                    onChange={(e) => {
                        if (e.target.value.length <= maxCharacters) {
                            setMessage(e.target.value);
                        }
                    }}
                ></textarea>

                {/* Character Counter */}
                <div className="text-right text-sm text-blue-500 mt-2">{message.length}/{maxCharacters}</div>

                {/* Send SMS Button */}
                <button
                    onClick={handleSendSMS}
                    disabled={loading}
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center"
                >
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            ></path>
                        </svg>
                    ) : (
                        "Send SMS"
                    )}
                </button>
            </div>
        </div>
    );
};

export default SendSingleSMS;
