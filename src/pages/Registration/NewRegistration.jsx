import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StudentRegistrationForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

    const formik = useFormik({
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            dob: '',
            gender: '',
            bloodGroup: '',
            grade: '',
            section: '',
            academicYear: '',
            rollNumber: '',
            parentName: '',
            relationship: '',
            phone: '',
            email: '',
            address: '',
            studentPhoto: null,
            birthCertificate: null,
            previousMarksheet: null,
            transferCertificate: null,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            dob: Yup.string().required('Date of birth is required'),
            gender: Yup.string().required('Gender is required'),
            bloodGroup: Yup.string().required('Blood group is required'),
            grade: Yup.string().required('Grade is required'),
            section: Yup.string().required('Section is required'),
            academicYear: Yup.string().required('Academic year is required'),
            rollNumber: Yup.string().required('Roll number is required'),
            parentName: Yup.string().required('Parent/Guardian name is required'),
            relationship: Yup.string().required('Relationship is required'),
            phone: Yup.string()
                .required('Phone number is required')
                .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            address: Yup.string().required('Address is required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            setIsSubmitted(true); // Show success message
            setTimeout(() => {
                setIsSubmitted(false); // Reset success message
                formik.resetForm(); // Reset form fields
            }, 3000); // Show success message for 3 seconds
        },
    });

    const inputClass = "border rounded px-3 py-2 w-full";

    return (
        <div className="max-w-6xl mx-auto p-6">
            {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> New student added successfully.</span>
                </div>
            ) : (
                <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded shadow space-y-6">
                    <h2 className="text-xl font-bold">Student Registration Form</h2>

                    {/* Personal Info */}
                    <div>
                        <h3 className="font-semibold mb-2">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="First name *"
                                    {...formik.getFieldProps('firstName')}
                                    className={inputClass}
                                />
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.firstName}</p>
                                )}
                            </div>
                            <input
                                type="text"
                                placeholder="Middle name"
                                {...formik.getFieldProps('middleName')}
                                className={inputClass}
                            />
                            <div>
                                <input
                                    type="text"
                                    placeholder="Last name *"
                                    {...formik.getFieldProps('lastName')}
                                    className={inputClass}
                                />
                                {formik.touched.lastName && formik.errors.lastName && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.lastName}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="date"
                                    {...formik.getFieldProps('dob')}
                                    className={inputClass}
                                />
                                {formik.touched.dob && formik.errors.dob && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.dob}</p>
                                )}
                            </div>
                            <div>
                                <select {...formik.getFieldProps('gender')} className={inputClass}>
                                    <option value="">Select gender *</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                {formik.touched.gender && formik.errors.gender && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>
                                )}
                            </div>
                            <div>
                                <select {...formik.getFieldProps('bloodGroup')} className={inputClass}>
                                    <option value="">Select blood group *</option>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>O+</option>
                                    <option>AB+</option>
                                </select>
                                {formik.touched.bloodGroup && formik.errors.bloodGroup && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.bloodGroup}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Academic Info */}
                    <div>
                        <h3 className="font-semibold mb-2">Academic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <select {...formik.getFieldProps('grade')} className={inputClass}>
                                    <option value="">Select grade *</option>
                                    <option>1st Class</option>
                                    <option>2nd Class</option>
                                    <option>3rd Class</option>
                                    <option>4th Class</option>
                                    <option>5th Class</option>
                                    <option>6th Class</option>
                                    <option>7th Class</option>
                                    <option>8th Class</option>
                                    <option>9th Class</option>
                                    <option>10th Class</option>
                                    <option>Inter First Year</option>
                                    <option>Inter Second Year</option>
                                </select>
                                {formik.touched.grade && formik.errors.grade && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.grade}</p>
                                )}
                            </div>
                            <div>
                                <select {...formik.getFieldProps('section')} className={inputClass}>
                                    <option value="">Select section *</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>
                                {formik.touched.section && formik.errors.section && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.section}</p>
                                )}
                            </div>
                            <div>
                                <select {...formik.getFieldProps('academicYear')} className={inputClass}>
                                    <option value="">Select academic year *</option>
                                    <option>2024-2025</option>
                                    <option>2025-2026</option>
                                </select>
                                {formik.touched.academicYear && formik.errors.academicYear && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.academicYear}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter roll number *"
                                    {...formik.getFieldProps('rollNumber')}
                                    className={inputClass}
                                />
                                {formik.touched.rollNumber && formik.errors.rollNumber && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.rollNumber}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold mb-2">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter parent/guardian name *"
                                    {...formik.getFieldProps('parentName')}
                                    className={inputClass}
                                />
                                {formik.touched.parentName && formik.errors.parentName && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.parentName}</p>
                                )}
                            </div>
                            <div>
                                <select {...formik.getFieldProps('relationship')} className={inputClass}>
                                    <option value="">Select relationship *</option>
                                    <option>Father</option>
                                    <option>Mother</option>
                                    <option>Guardian</option>
                                </select>
                                {formik.touched.relationship && formik.errors.relationship && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.relationship}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter phone number *"
                                    {...formik.getFieldProps('phone')}
                                    className={inputClass}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter email address *"
                                    {...formik.getFieldProps('email')}
                                    className={inputClass}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                                )}
                            </div>
                        </div>
                        <textarea
                            placeholder="Enter complete address *"
                            {...formik.getFieldProps('address')}
                            className={`${inputClass} mt-4`}
                            rows="3"
                        />
                        {formik.touched.address && formik.errors.address && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
                        )}
                    </div>

                    {/* Documents */}
                    <div>
                        <h3 className="font-semibold mb-2">Documents & Photos</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label>Student Photo</label>
                                <input
                                    type="file"
                                    onChange={(e) => formik.setFieldValue('studentPhoto', e.currentTarget.files[0])}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label>Birth Certificate</label>
                                <input
                                    type="file"
                                    onChange={(e) => formik.setFieldValue('birthCertificate', e.currentTarget.files[0])}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label>Previous Marksheet</label>
                                <input
                                    type="file"
                                    onChange={(e) => formik.setFieldValue('previousMarksheet', e.currentTarget.files[0])}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label>Transfer Certificate</label>
                                <input
                                    type="file"
                                    onChange={(e) => formik.setFieldValue('transferCertificate', e.currentTarget.files[0])}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="reset"
                            onClick={formik.handleReset}
                            className="border px-4 py-2 rounded-md"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            Register Student
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default StudentRegistrationForm;