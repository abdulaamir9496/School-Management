import React, { useState } from 'react';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        contactNumber: '',
        email: '',
        classInterested: '',
        communicationMode: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required.';
        if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required.';
        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact number is required.';
        } else if (!/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Contact number must be 10 digits.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email format is invalid.';
        }
        if (!formData.classInterested.trim()) newErrors.classInterested = 'Class/Grade is required.';
        if (!formData.communicationMode.trim()) newErrors.communicationMode = 'Preferred communication mode is required.';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSubmitted(true); // Show success message
            setTimeout(() => {
                setIsSubmitted(false); // Reset to show the form again
                setFormData({
                    studentName: '',
                    parentName: '',
                    contactNumber: '',
                    email: '',
                    classInterested: '',
                    communicationMode: '',
                    message: '',
                });
            }, 3000); // Show success message for 3 seconds
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Your enquiry has been submitted successfully.</span>
                </div>
            ) : (
                <>
                    <h1 className="text-2xl font-bold mb-6">Student Enquiry Form</h1>
                    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                        {/* Student Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentName">
                                Student Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                placeholder="Enter student's name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
                        </div>

                        {/* Parent/Guardian Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parentName">
                                Parent/Guardian Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="parentName"
                                value={formData.parentName}
                                onChange={handleChange}
                                placeholder="Enter parent/guardian's name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
                        </div>

                        {/* Contact Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                                Contact Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="Enter contact number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Class/Grade Interested */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classInterested">
                                Class/Grade Interested <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="classInterested"
                                value={formData.classInterested}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select a class/grade</option>
                                <option value="Pre-Primary">Pre-Primary</option>
                                <option value="Class 1">Class 1</option>
                                <option value="Class 2">Class 2</option>
                                <option value="Class 3">Class 3</option>
                                <option value="Class 4">Class 4</option>
                                <option value="Class 5">Class 5</option>
                                <option value="Class 6">Class 6</option>
                                <option value="Class 7">Class 7</option>
                                <option value="Class 8">Class 8</option>
                                <option value="Class 9">Class 9</option>
                                <option value="Class 10">Class 10</option>
                            </select>
                            {errors.classInterested && <p className="text-red-500 text-xs mt-1">{errors.classInterested}</p>}
                        </div>

                        {/* Preferred Mode of Communication */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communicationMode">
                                Preferred Mode of Communication <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="communicationMode"
                                value={formData.communicationMode}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select a mode</option>
                                <option value="Phone">Phone</option>
                                <option value="Email">Email</option>
                                <option value="In-Person">In-Person</option>
                            </select>
                            {errors.communicationMode && <p className="text-red-500 text-xs mt-1">{errors.communicationMode}</p>}
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Enquiry Details/Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your enquiry details here..."
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default EnquiryForm;