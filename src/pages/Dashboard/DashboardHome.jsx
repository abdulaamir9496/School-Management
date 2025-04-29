import React, { useState } from 'react';
import NewRegistration from '../Registration/NewRegistration';
import EnquiryForm from '../Enquiry/EnquiryForm';
import BonafideMainPage from '../Certificates/BonafideMainPage';
import StudentMainPage from '../Students/StudentMainPage';
import Communication from '../Communication/Communication';
import FeesMainPage from '../Fees/FeesMainPage';


// Import icons (you would need to install a library like react-icons or heroicons)
// This is just a placeholder for the actual imports you'd need
const Icons = {
    Dashboard: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"></path></svg>,
    Enquiry: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>,
    Registration: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zm0 2a6 6 0 016 6H2a6 6 0 016-6z"></path></svg>,
    Student: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>,
    // Display: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>,
    Fees: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>,
    Certificate: () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>,
};

const DashboardHome = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currentTab, setCurrentTab] = useState('dashboard');

    // Main navigation items
    const navItems = [
        { id: 'dashboard', name: 'Gyanam School Dashboard', icon: Icons.Dashboard },
        { id: 'enquiry', name: 'Enquiry Form', icon: Icons.Enquiry },
        { id: 'registration', name: 'New Registration', icon: Icons.Registration },
        { id: 'student', name: 'Student Info', icon: Icons.Student },
        // { id: 'display', name: 'Display Info', icon: Icons.Display },
        { id: 'fees', name: 'Fees Info', icon: Icons.Fees },
        { id: 'bonafide', name: 'Certificates', icon: Icons.Certificate },
        { id: 'communication', name: 'Communication', icon: Icons.Enquiry },
    ];

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Handle navigation click
    const handleNavClick = (tabId) => {
        setCurrentTab(tabId);
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar Toggle Button for Mobile */}
            <button
                className="lg:hidden fixed z-20 top-4 left-4 p-2 rounded-md bg-blue-600 text-white shadow-lg"
                onClick={toggleSidebar}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed lg:static z-10 transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 bg-gradient-to-b from-blue-700 to-blue-900 text-white w-64 min-h-full overflow-y-auto`}
                style={{ willChange: 'transform' }}
            >
                {/* School Brand/Logo */}
                <div className="flex items-center justify-between p-4 border-b border-blue-800">
                    <h2 className="text-2xl font-bold">School Dashboard</h2>
                    <button
                        className="lg:hidden text-white"
                        onClick={toggleSidebar}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id} className="mb-2">
                                <button
                                    className={`flex items-center w-full text-left p-3 rounded-lg transition-colors duration-200 ${currentTab === item.id ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800 hover:text-white'}`}
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    <span className="mr-3"><item.icon /></span>
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto">
                {/* Header */}
                <header className="bg-white shadow-md p-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {navItems.find(item => item.id === currentTab)?.name || 'Dashboard'}
                        </h1>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-gray-800">
                                <img src="/path/to/admin-image.jpg" alt="Admin" className="w-8 h-8 rounded-full" />
                                <span className="ml-2">Admin</span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className='p-6'>
                    {currentTab === 'enquiry' && <EnquiryForm />}
                    {currentTab === 'registration' && <NewRegistration />}
                    {currentTab === 'student' && <StudentMainPage />} {/* Fix: Corrected tab ID */}
                    {currentTab === 'bonafide' && <BonafideMainPage />}
                    {currentTab === 'communication' && <Communication />}
                    {currentTab === 'fees' && <FeesMainPage />}
                </div>

                {/* Dashboard Content */}
                <main className="p-6">
                    {currentTab === 'dashboard' && (
                        <>
                            {/* Stats Overview */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Total Students</p>
                                            <p className="text-2xl font-semibold text-gray-800">2,547</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Fee Collection</p>
                                            <p className="text-2xl font-semibold text-gray-800">₹4.2M</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 mr-4">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Pending Fees</p>
                                            <p className="text-2xl font-semibold text-gray-800">₹850K</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center">
                                        <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Alerts</p>
                                            <p className="text-2xl font-semibold text-gray-800">24</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activities & Charts */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
                                        <button className="text-blue-600 hover:text-blue-800">View All</button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <div className="mr-4 bg-green-500 text-white rounded-full p-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-5a1 1 0 00-1 1v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6a1 1 0 00-1-1z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-medium">New student registration</p>
                                                <p className="text-sm text-gray-500">2 minutes ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <div className="mr-4 bg-blue-500 text-white rounded-full p-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-medium">Fee payment received</p>
                                                <p className="text-sm text-gray-500">5 minutes ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <div className="mr-4 bg-purple-500 text-white rounded-full p-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-medium">Certificate generated</p>
                                                <p className="text-sm text-gray-500">1 hour ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <div className="mr-4 bg-yellow-500 text-white rounded-full p-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-medium">Fee defaulter notification sent</p>
                                                <p className="text-sm text-gray-500">2 hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Events</h3>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-blue-500 pl-3">
                                            <p className="font-medium">Teachers Meeting</p>
                                            <p className="text-sm text-gray-500">Today, 2:00 PM</p>
                                        </div>
                                        <div className="border-l-4 border-green-500 pl-3">
                                            <p className="font-medium">Parent-Teacher Conference</p>
                                            <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                                        </div>
                                        <div className="border-l-4 border-purple-500 pl-3">
                                            <p className="font-medium">Annual Sports Day</p>
                                            <p className="text-sm text-gray-500">May 5, 8:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </main>

                {/* Footer */}
                <footer className="bg-white p-4 border-t border-gray-200 mt-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">© 2025 Gyanam School Management System. All rights reserved.</p>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <a href="/privacy-policy" className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
                            <a href="/privacy-policy" className="text-gray-500 hover:text-gray-700">Terms of Service</a>
                            <a href="/privacy-policy" className="text-gray-500 hover:text-gray-700">Contact Support</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default DashboardHome;   