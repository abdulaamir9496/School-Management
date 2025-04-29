import React, { useState } from 'react';

const classes = ['Nursery', 'PP1', 'PP2', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const sections = ['A', 'B', 'C'];

const DisplayStudentInfo = () => {
    const [selectedClass, setSelectedClass] = useState('Nursery');
    const [selectedSection, setSelectedSection] = useState('A');
    const [students, setStudents] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const handleSearch = () => {
        // This would be replaced by a call to your backend
        setStudents([]); // Keeping it empty for now 
        setShowTable(true);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Student Information</h2>


            {/* Class Tabs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                {classes.map((cls) => (
                    <button
                        key={cls}
                        onClick={() => setSelectedClass(cls)}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: selectedClass === cls ? '#2563eb' : '#f3f4f6',
                            color: selectedClass === cls ? 'white' : 'black',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    >
                        {cls}
                    </button>
                ))}
            </div>

            {/* Section Tabs with Search Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {sections.map((sec) => (
                        <button
                            key={sec}
                            onClick={() => setSelectedSection(sec)}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: selectedSection === sec ? '#2563eb' : '#f3f4f6',
                                color: selectedSection === sec ? 'white' : 'black',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                        >
                            Section {sec}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleSearch}
                    style={{ padding: '6px 16px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    Search Students
                </button>
            </div>

            {/* Student Table */}
            {showTable && (
                <>
                    <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
                                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Admission No</th>
                                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Class</th>
                                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Section</th>
                                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Roll No</th>
                                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Student Name</th>
                                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Father Name</th>
                                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Mother Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.admissionNo}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.class}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.section}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.rollNo}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.studentName}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.fatherName}</td>
                                    <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.motherName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Student Stats - display only when table is shown */}
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '30px' }}>
                        <div>Total Students: <input type="text" style={{ width: '50px' }} /></div>
                        <div>Boys: <input type="text" style={{ width: '50px' }} /></div>
                        <div>Girls: <input type="text" style={{ width: '50px' }} /></div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DisplayStudentInfo;