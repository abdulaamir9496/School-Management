import React, { useState } from "react";

const classOptions = [
  "Pre-Primary", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"
];

export default function FeesPaymentForm() {
  const [searchBy, setSearchBy] = useState("admission");
  const [studentType, setStudentType] = useState("current");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [printOld, setPrintOld] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [studentFound, setStudentFound] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [receiptNo, setReceiptNo] = useState("");
  const [studentName, setStudentName] = useState("");

  const resetAll = () => {
    setPrintOld(false);
    setShowReceipt(false);
    setStudentFound(false);
    setSearchInput("");
    setReceiptNo("");
    setStudentType("current");
    setSearchBy("admission");
    setSelectedYear("2024");
    setStudentName("");
  };

  const handleFind = () => {
    if (searchInput.trim() === "") {
      alert("Please enter a valid search input.");
      return;
    }
    setStudentFound(true);
    if (printOld) setShowReceipt(true);
  };

  const handlePrint = () => {
    alert("Receipt sent to printer successfully!");
    resetAll();
  };

  const isOldStudentMode = studentType === "old";
  const isCurrentMode = studentType === "current";
  const showFeeSection = studentFound && studentType === "current";
  const showOldStudentPayment = studentFound && studentType === "old";

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-4xl mx-auto">
      {/* Header + Print Old Receipt */}
      <div className="flex justify-between mb-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Fee Payment</h2>
        <div className="flex gap-2">
          {printOld && (
            <button
              className="py-2 px-4 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 border"
              onClick={resetAll}
            >
              ← Back to Payment
            </button>
          )}
          <button
            className={`py-2 px-4 rounded-xl text-sm font-semibold border ${printOld ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
              }`}
            onClick={() => {
              setPrintOld(true);
              setStudentType("old");
              setShowReceipt(false);
              setStudentFound(false);
              setSearchInput("");
              setReceiptNo("");
            }}
          >
            Print Old Receipt
          </button>
        </div>
      </div>


      {/* Student Type Toggle */}
      {!printOld && (
        <div className="flex justify-end gap-4 items-center text-sm mb-4">
          <label>
            <input
              type="radio"
              name="studentType"
              checked={studentType === "current"}
              onChange={() => {
                setStudentType("current");
                setShowReceipt(false);
                setPrintOld(false);
                setStudentFound(false);
              }}
            /> Current Students
          </label>
          <label>
            <input
              type="radio"
              name="studentType"
              checked={studentType === "old"}
              onChange={() => {
                setStudentType("old");
                setShowReceipt(false);
                setPrintOld(false);
                setStudentFound(false);
              }}
            /> Old Students
          </label>
        </div>
      )}

      {/* Search Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Search By</label>
          <div className="flex items-center gap-4 text-sm">
            <label>
              <input
                type="radio"
                name="searchBy"
                value="admission"
                checked={searchBy === "admission"}
                onChange={() => setSearchBy("admission")}
              /> Admission No
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="student"
                checked={searchBy === "student"}
                onChange={() => setSearchBy("student")}
              /> Student Name
            </label>
          </div>
        </div>

        <input
          className="border rounded-lg p-2 text-base"
          placeholder={searchBy === "admission" ? "Enter Admission No..." : "Enter Student Name..."}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        {!printOld && isCurrentMode && (
          <select className="border rounded-lg p-2 text-base">
            <option>Select Class</option>
            {classOptions.map((cls, idx) => (
              <option key={idx}>{cls}</option>
            ))}
          </select>
        )}

        {/* Receipt No only in admission mode */}
        {!printOld && searchBy === "admission" && (
          <input
            className="border rounded-lg p-2 text-base"
            placeholder="Receipt No"
            value={receiptNo}
            onChange={(e) => setReceiptNo(e.target.value)}
          />
        )}
      </div>

      {/* Year Selector for Old Students */}
      {isOldStudentMode && !printOld && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Year</label>
          <select
            className="border rounded-lg p-2 w-full"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>
      )}

      {/* Find Button */}
      <div className="mb-4">
        <button
          onClick={handleFind}
          className="bg-blue-600 text-white py-2 px-6 rounded-xl"
        >
          Find
        </button>
      </div>

      {/* Student Found Message & Fee Form */}
      {showFeeSection || showOldStudentPayment ? (
        <>
          <div className="mb-4 text-lg font-medium text-green-600">
            Student Found: {studentName}
          </div>

          <div className="bg-white border border-blue-200 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Fee Type</label>
              <select className="border rounded-lg p-2 w-full">
                <option>Tuition Fee</option>
                <option>Admission Fee</option>
                <option>Lab Fee</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Payment Date</label>
              <input type="date" className="border rounded-lg p-2 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Amount</label>
              <input type="text" className="border rounded-lg p-2 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Payment Method</label>
              <select className="border rounded-lg p-2 w-full">
                <option>Cash</option>
                <option>Online</option>
                <option>Cheque</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Reference Number</label>
              <input type="text" className="border rounded-lg p-2 w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Remarks</label>
              <textarea className="border rounded-lg p-2 w-full" rows="2" />
            </div>

            <div className="col-span-2 flex justify-end gap-4 mt-2">
              <button className="bg-gray-200 text-black py-2 px-6 rounded-xl">Cancel</button>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-xl">Process Payment</button>
            </div>
          </div>
        </>
      ) : null}

      {/* Receipt Display (Only Print Mode) */}
      {printOld && showReceipt && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl mt-4 text-base">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Receipt</h3>
          <p><strong>Name:</strong> {studentName}</p>
          <p><strong>Admission No:</strong> A12345</p>
          <p><strong>Father's Name:</strong> Rajesh Sharma</p>
          <p><strong>Amount Paid:</strong> ₹5200</p>
          <p><strong>Date of Payment:</strong> 24/04/2025</p>
          <p><strong>Method:</strong> Cash</p>
          <p><strong>Received By:</strong> Admin Staff</p>
          <button
            className="mt-4 bg-green-600 text-white py-2 px-6 rounded-xl"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      )}
    </div>
  );
}
