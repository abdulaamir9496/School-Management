import { useState } from "react";
import SendSingleSMS from "./SendSingleSMS";
import SendGroupSMS from "./SendGroupSMS";
import SendDefaulterAbsentSMS from "./SendDefaulterAbsentSMS";
import SentSMSHistory from "./SentSMSHistory";

const Communication = ({ setPage }) => {
    const [activeTab, setActiveTab] = useState("singleSMS");

    const renderComponent = () => {
        switch (activeTab) {
            case "singleSMS":
                return <SendSingleSMS />;
            case "groupSMS":
                return <SendGroupSMS />;
            case "defaulterAbsentSMS":
                return <SendDefaulterAbsentSMS />;
            case "smsHistory":
                return <SentSMSHistory />;
            default:
                return <SendSingleSMS />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col relative">
            {/* Sticky Header - Matching Dashboard Blue */}
            <div className="sticky top-0 bg-blue-800 text-white p-4 z-50">
                <h1 className="text-2xl font-bold text-center">SMS Management</h1>
                <nav className="flex justify-around mt-4">
                    <button
                        onClick={() => setActiveTab("singleSMS")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "singleSMS"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Send Single SMS
                    </button>
                    <button
                        onClick={() => setActiveTab("groupSMS")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "groupSMS"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Send Group SMS
                    </button>
                    <button
                        onClick={() => setActiveTab("defaulterAbsentSMS")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "defaulterAbsentSMS"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Send Defaulter/Absent SMS
                    </button>
                    <button
                        onClick={() => setActiveTab("smsHistory")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "smsHistory"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        SMS History
                    </button>
                </nav>
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-1 overflow-y-auto py-10">
                <div className="w-[60vw] mx-auto px-4">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        {renderComponent()}
                    </div>
                </div>
            </div>

            {/* Fixed Back Button at Bottom Left */}
            <button
                onClick={() => setPage("dashboard")}
                className="fixed bottom-4 left-4 bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-colors hover:bg-blue-700"
            >
                Back
            </button>
        </div>
    );
};

export default Communication;
