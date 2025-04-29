import React, { useState } from 'react';

const SentSMSHistory = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [category, setCategory] = useState('all');
    const [searchText, setSearchText] = useState('');
    const [dataFetched, setDataFetched] = useState(false);
    const [loading, setLoading] = useState(false);

    const [smsHistory, setSmsHistory] = useState([]);

    const fakeFetchSMSHistory = () => {
        // Fake fetch with 2 sec delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        date: '2025-04-27',
                        recipient: 'John Smith',
                        message: 'Your fee payment is due for April 2025.',
                        status: 'Delivered',
                    },
                    {
                        id: 2,
                        date: '2025-04-25',
                        recipient: 'Jane Doe',
                        message: 'Attendance Alert: Absent Today.',
                        status: 'Delivered',
                    },
                ]);
            }, 2000);
        });
    };

    const handleSearch = async () => {
        if (!fromDate || !toDate) {
            alert('Please select both From Date and To Date!');
            return;
        }

        setLoading(true);
        setDataFetched(false);

        try {
            const data = await fakeFetchSMSHistory();
            setSmsHistory(data);
            setDataFetched(true);
        } catch (error) {
            alert('Failed to fetch SMS History.');
        } finally {
            setLoading(false);
        }
    };

    const handleExportCSV = () => {
        if (!dataFetched) {
            alert('No data to export. Please fetch first.');
            return;
        }
        alert('Exported to CSV!');
    };

    const handleExportPDF = () => {
        if (!dataFetched) {
            alert('No data to export. Please fetch first.');
            return;
        }
        alert('Exported to PDF!');
    };

    const filteredHistory = smsHistory.filter((sms) =>
        sms.recipient.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">SMS History</h1>

            {/* Filters */}
            <div className="bg-white-50 p-6 rounded-3xl mb-8 border border-blue-100">
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {/* Date Range */}
                    <input
                        type="date"
                        className="p-3 rounded-3xl border border-blue-300 focus:ring-2 focus:ring-blue-400"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <input
                        type="date"
                        className="p-3 rounded-3xl border border-blue-300 focus:ring-2 focus:ring-blue-400"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />

                    {/* Category Dropdown */}
                    <select
                        className="p-3 rounded-3xl border border-blue-300 focus:ring-2 focus:ring-blue-400"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="fee">Fee Reminder</option>
                        <option value="attendance">Attendance Alert</option>
                    </select>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-3xl font-semibold transition-all duration-300"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Loading */}
            {loading && (
                <div className="text-center text-blue-600 font-semibold mb-6">
                    Fetching messages...
                </div>
            )}

            {/* Export Buttons and Search Input */}
            {dataFetched && (
                <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                    <div className="flex gap-2">
                        <button
                            onClick={handleExportCSV}
                            className="bg-white border border-blue-400 text-blue-600 py-2 px-4 rounded-3xl font-semibold hover:bg-blue-50 transition-all"
                        >
                            🗎 Export CSV
                        </button>
                        <button
                            onClick={handleExportPDF}
                            className="bg-white border border-blue-400 text-blue-600 py-2 px-4 rounded-3xl font-semibold hover:bg-blue-50 transition-all"
                        >
                            🗎 Export PDF
                        </button>
                    </div>

                    {/* Search Text Input */}
                    <input
                        type="text"
                        placeholder="Search recipient..."
                        className="p-3 rounded-3xl border border-blue-300 focus:ring-2 focus:ring-blue-400"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            )}

            {/* SMS Table */}
            {dataFetched && (
                <div className="bg-white border border-blue-100 rounded-3xl shadow-md overflow-x-auto">
                    {filteredHistory.length > 0 ? (
                        <table className="w-full text-center">
                            <thead className="bg-blue-100">
                                <tr>
                                    <th className="py-4 px-6 text-blue-700">Date</th>
                                    <th className="py-4 px-6 text-blue-700">Recipient</th>
                                    <th className="py-4 px-6 text-blue-700">Message</th>
                                    <th className="py-4 px-6 text-blue-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredHistory.map((sms) => (
                                    <tr key={sms.id} className="border-t border-blue-100 hover:bg-blue-50 transition-all">
                                        <td className="py-4">{sms.date}</td>
                                        <td className="py-4">{sms.recipient}</td>
                                        <td className="py-4">
                                            {sms.message.length > 30 ? `${sms.message.slice(0, 30)}...` : sms.message}
                                        </td>
                                        <td className="py-4">
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                                {sms.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center text-gray-500 py-8">
                            No records found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SentSMSHistory;
