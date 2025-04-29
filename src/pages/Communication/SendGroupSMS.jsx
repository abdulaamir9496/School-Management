import React, { useState } from 'react';

const dummyData = {
    "Teachers": ["Mr. John", "Ms. Emily", "Mrs. Smith"],
    "PP1": ["Ava Johnson", "Mia Brown", "Ethan Davis"],
    "PP2": ["Liam Wilson", "Sophia Moore"],
    "Class 1": ["Oliver Taylor", "Isabella Anderson", "Lucas Thomas"],
    "Class 2": ["Amelia Jackson", "Mason White", "Ella Harris", "James Martin", "Harper Thompson"],
    "Class 3": ["Benjamin Garcia", "Charlotte Martinez"],
    "Class 4": ["Elijah Robinson", "Abigail Clark", "Henry Rodriguez"],
    "Class 5": ["Sebastian Lewis", "Emily Lee", "Michael Walker"],
    "Class 6": ["Daniel Hall", "Sofia Allen", "Matthew Young"],
    "Class 7": ["Jackson Hernandez", "Victoria King"],
    "Class 8": ["Avery Wright", "Carter Lopez"],
    "Class 9": ["David Hill", "Grace Scott"],
    "Class 10": ["Jayden Green", "Lily Adams"],
};

const categories = [
    "All Recipients",
    "Teachers",
    "PP1",
    "PP2",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
];

const SendGroupSMS = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [studentsList, setStudentsList] = useState({});
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [message, setMessage] = useState("");
    const [smsHistory, setSmsHistory] = useState([]);

    const handleSearch = () => {
        if (selectedCategory && (dummyData[selectedCategory] || selectedCategory === "All Recipients")) {
            if (selectedCategory === "All Recipients") {
                setStudentsList(dummyData);
            } else {
                setStudentsList({ [selectedCategory]: dummyData[selectedCategory] });
            }
            setSelectedStudents([]);
        } else {
            alert("Please select a valid group to search.");
        }
    };

    const handleStudentSelect = (student) => {
        if (selectedStudents.includes(student)) {
            setSelectedStudents(selectedStudents.filter((s) => s !== student));
        } else {
            setSelectedStudents([...selectedStudents, student]);
        }
    };

    const handleSelectAllInGroup = (group) => {
        const groupStudents = dummyData[group];
        const isAllSelected = groupStudents.every((student) =>
            selectedStudents.includes(student)
        );

        if (isAllSelected) {
            setSelectedStudents(selectedStudents.filter((student) => !groupStudents.includes(student)));
        } else {
            const newSelections = groupStudents.filter((student) => !selectedStudents.includes(student));
            setSelectedStudents([...selectedStudents, ...newSelections]);
        }
    };

    const handleSend = () => {
        if (selectedStudents.length === 0 || !message.trim()) {
            alert("Please select at least one student and type a message.");
            return;
        }

        const newEntry = {
            id: smsHistory.length + 1,
            message: message,
            recipients: selectedStudents.length,
            time: new Date().toLocaleString(),
        };

        setSmsHistory([newEntry, ...smsHistory]);

        alert(`Message sent to ${selectedStudents.length} recipients!`);

        setSelectedCategory("");
        setStudentsList({});
        setSelectedStudents([]);
        setMessage("");
    };

    const handleClear = () => {
        setSelectedCategory("");
        setStudentsList({});
        setSelectedStudents([]);
        setMessage("");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Send Group SMS</h1>

            <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
                {/* Select Recipients */}
                <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border p-2 rounded-lg w-full md:w-1/2"
                    >
                        <option value="">Select Recipients</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        Search
                    </button>
                </div>

                {/* Students List */}
                {Object.keys(studentsList).length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Select Recipients:</h2>

                        {Object.entries(studentsList).map(([group, students]) => (
                            <div key={group} className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-bold">{group}</h3>
                                    <button
                                        onClick={() => handleSelectAllInGroup(group)}
                                        className="text-blue-600 underline"
                                    >
                                        {students.every((student) => selectedStudents.includes(student))
                                            ? "Deselect All"
                                            : "Select All"}
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {students.map((student, index) => (
                                        <label key={index} className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedStudents.includes(student)}
                                                onChange={() => handleStudentSelect(student)}
                                            />
                                            {student}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Compose Message */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Compose Message</h2>
                    <textarea
                        rows="5"
                        className="w-full border p-3 rounded-lg mb-4"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength={160}
                    ></textarea>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={handleSend}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Send Message
                        </button>
                        <button
                            onClick={handleClear}
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            {/* SMS History */}
            <div className="bg-white p-6 rounded-2xl shadow-md mt-8">
                <h2 className="text-xl font-semibold mb-4">SMS History</h2>

                {smsHistory.length === 0 ? (
                    <p className="text-gray-600">No messages sent yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 border">#</th>
                                    <th className="p-2 border">Message</th>
                                    <th className="p-2 border">Recipients</th>
                                    <th className="p-2 border">Time Sent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {smsHistory.map((entry) => (
                                    <tr key={entry.id}>
                                        <td className="p-2 border">{entry.id}</td>
                                        <td className="p-2 border">{entry.message}</td>
                                        <td className="p-2 border">{entry.recipients}</td>
                                        <td className="p-2 border">{entry.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SendGroupSMS;

