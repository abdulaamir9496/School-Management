import { useState } from "react";
import FeesPayment from "./FeesPayment";
import FeesBalanceReport from "./FeesBalanceReport";
import FeesDefaulters from "./FeesDefaulters";
import FeesPaymentReport from "./FeesPaymentReport";

const FeesMainPage = ({ setPage }) => {
    const [activeTab, setActiveTab] = useState("payment");

    // Render the active component based on the selected tab
    const renderComponent = () => {
        switch (activeTab) {
            case "payment":
                return <FeesPayment />;
            case "balanceReport":
                return <FeesBalanceReport />;
            case "defaulters":
                return <FeesDefaulters />;
            case "paymentReport":
                return <FeesPaymentReport />;
            default:
                return <FeesPayment />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col relative">
            {/* Header */}
            <div className="sticky top-0 bg-blue-800 text-white p-4 z-50">
                <h1 className="text-2xl font-bold text-center">Fees Management</h1>
                <nav className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={() => setActiveTab("payment")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "payment"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Fee Payment
                    </button>
                    <button
                        onClick={() => setActiveTab("balanceReport")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "balanceReport"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Fee Balance Report
                    </button>
                    <button
                        onClick={() => setActiveTab("defaulters")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "defaulters"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Fee Defaulters
                    </button>
                    <button
                        onClick={() => setActiveTab("paymentReport")}
                        className={`px-6 py-3 rounded-lg font-semibold transition transform duration-200 hover:scale-105 focus:outline-none ${activeTab === "paymentReport"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-blue-100 text-blue-900 border border-blue-900 hover:bg-blue-200"
                            }`}
                    >
                        Fee Payment Reports
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

export default FeesMainPage;