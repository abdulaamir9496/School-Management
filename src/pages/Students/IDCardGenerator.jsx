import React, { useState } from "react";

function IDCardGenerator() {
    const [student, setStudent] = useState({
        name: "",
        fatherName: "",
        studentClass: "",
        gender: "",
        dob: "",
        address: "",
        phone: "",
        photo: null,
        logo: null,
    });

    const [showPreview, setShowPreview] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "photo" || name === "logo") {
            setStudent({ ...student, [name]: URL.createObjectURL(files[0]) });
        } else {
            setStudent({ ...student, [name]: value });
        }
    };

    const togglePreview = () => {
        setShowPreview(!showPreview);
    };

    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
            <div className={`grid md:grid-cols-2 gap-8 ${!showPreview ? 'md:grid-cols-1' : ''}`}>
                {/* Form Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-6 text-blue-700">Student Details</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Student Name"
                            value={student.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="fatherName"
                            placeholder="Father Name"
                            value={student.fatherName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="studentClass"
                            placeholder="Class"
                            value={student.studentClass}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            name="gender"
                            value={student.gender}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${student.gender === "" ? "text-gray-400" : "text-gray-700"}`}
                        >
                            <option value="" disabled hidden>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input
                            type="date"
                            name="dob"
                            value={student.dob}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="address"
                            placeholder="Address"
                            value={student.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={student.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label className="block">
                            <span className="text-gray-700">Student Photo</span>
                            <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">School Logo</span>
                            <input
                                type="file"
                                name="logo"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </label>
                    </div>
                </div>

                {/* Preview Section (Toggle) */}
                {showPreview && (
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-300">
                        {student.logo && (
                            <img src={student.logo} alt="Logo" className="w-24 h-24 object-contain mb-4" />
                        )}
                        <div className="w-32 h-40 bg-gray-200 flex items-center justify-center overflow-hidden rounded border border-gray-400">
                            {student.photo ? (
                                <img src={student.photo} alt="Student" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-500">Photo</span>
                            )}
                        </div>
                        <div className="mt-4 text-center space-y-1">
                            <p><span className="font-semibold">Name:</span> {student.name}</p>
                            <p><span className="font-semibold">Father:</span> {student.fatherName}</p>
                            <p><span className="font-semibold">Class:</span> {student.studentClass}</p>
                            <p><span className="font-semibold">Gender:</span> {student.gender}</p>
                            <p><span className="font-semibold">DOB:</span> {student.dob}</p>
                            <p><span className="font-semibold">Address:</span> {student.address}</p>
                            <p><span className="font-semibold">Phone:</span> {student.phone}</p>
                        </div>
                        <div className="mt-4 text-sm text-gray-700 text-center">
                            #20-4-159, Syed Ali Chabutra, Shah Ali Banda Road, Hyderabad-65.<br />
                            Contact: 8686463718, 8008553468
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center gap-4 mt-8">
                <button
                    className="bg-blue-100 text-blue-700 px-6 py-2 rounded hover:bg-blue-200"
                    onClick={togglePreview}
                >
                    {showPreview ? "Hide Preview" : "Show Preview"}
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Print
                </button>
            </div>
        </div>
    );
}

export default IDCardGenerator;
