import { useState } from "react";
import StudentRegistrationForm from "./StudentRegistrationForm";
import IDCardGenerator from "./IDCardGenerator";
import DisplayStudentInfo from "./DisplayStudentInfo";

const StudentMainPage = ({ setPage }) => {
    const [activeTab, setActiveTab] = useState("info");

    const renderComponent = () => {
        switch (activeTab) {
            case "info":
                return <DisplayStudentInfo />;
            case "idCard":
                return <IDCardGenerator />;
            default:
                return <StudentRegistrationForm />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col relative">
            {/* Header */}
            <div className="sticky top-0 bg-blue-800 text-white p-4 z-50">
                <h1 className="text-2xl font-bold text-center">Student Section</h1>
                <nav className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={() => setActiveTab("info")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "info"
                                ? "bg-blue-800 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Student Info
                    </button>
                    <button
                        onClick={() => setActiveTab("idCard")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "idCard"
                                ? "bg-blue-800 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        ID Card Generator
                    </button>

                    <button
                        onClick={() => setActiveTab("registration")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "registration"
                                ? "bg-blue-800 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        New Student Registration
                    </button>
                </nav>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto py-10">
                <div className="w-[60vw] mx-auto px-4">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        {renderComponent()}
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <button
                onClick={() => setPage("dashboard")}
                className="fixed bottom-4 left-4 bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-colors hover:bg-blue-700"
            >
                Back
            </button>
        </div>
    );
};

export default StudentMainPage;
