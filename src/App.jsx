import { useState } from "react";
import LandingPage from "./LandingPage";
import Register from "./pages/Auth/UserLoginRegistration";
import Login from "./pages/Auth/Login";
import DashboardHome from "./pages/Dashboard/DashboardHome";

function App() {
  const [page, setPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage('dashboard');
  };

  // Function to handle successful registration
  const handleRegistration = () => {
    // Redirect to login after registration
    setPage('login');
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('landing');
  };

  // Conditional rendering for header based on login status
  const renderHeader = () => {
    if (isLoggedIn) {
      return (
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Gyanam School</h1>
          <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
            <button onClick={() => setPage('dashboard')} className="hover:text-blue-900 transition">Dashboard</button>
            <button onClick={() => setPage('fees')} className="hover:text-blue-900 transition">Fees Management</button>
            <button className="hover:text-blue-900 transition">Students</button>
            <button className="hover:text-blue-900 transition">Reports</button>
          </nav>
          <div className="hidden md:flex gap-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Logout
            </button>
          </div>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      );
    } else {
      return (
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Gyanam School</h1>
          <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-900 transition">Features</a>
            <a href="#" className="hover:text-blue-900 transition">About Us</a>
            <a href="#" className="hover:text-blue-900 transition">Contact</a>
          </nav>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => setPage('login')}
              className="px-4 py-2 text-blue-900 hover:text-blue-700 transition font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => setPage('register')}
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium"
            >
              Get Started
            </button>
          </div>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      );
    }
  };

  // Conditional rendering for content based on selected page
  const renderContent = () => {
    switch (page) {
      case 'landing':
        return <LandingPage setPage={setPage} />;
      case 'register':
        return <Register onRegistrationComplete={handleRegistration} />;
      case 'login':
        return <Login onLoginSuccess={handleLogin} />;
      case 'dashboard':
        return <DashboardHome setPage={setPage} />;
      case 'fees':
        return (
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Fees Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={() => setPage('feesPayment')}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md"
              >
                Record Fee Payment
              </button>
              <button 
                onClick={() => setPage('feesBalance')}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md"
              >
                Fee Balance Report
              </button>
              <button 
                onClick={() => setPage('feesDefaulters')}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md"
              >
                Fee Defaulters
              </button>
              <button 
                onClick={() => setPage('feesPaymentReport')}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md"
              >
                Payment Reports
              </button>
            </div>
          </div>
        );
      case 'feesPayment':
        return <FeesPaymentForm setPage={setPage} />;
      case 'feesBalance':
        return <FeeBalanceReport setPage={setPage} />;
      case 'feesDefaulters':
        return <FeesDefaulters setPage={setPage} />;
      case 'feesPaymentReport':
        return <FeePaymentReport setPage={setPage} />;
      default:
        return <LandingPage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="w-full bg-white shadow-sm">
        {renderHeader()}
      </header>

      <main className="container mx-auto flex-1 px-4 py-8 flex justify-center items-center">
        {renderContent()}
      </main>

      <footer className="w-full bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gyanam School</h3>
              <p className="text-gray-400">
                Simple, powerful Gyanam management software for modern educational institutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Gyanam School. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;