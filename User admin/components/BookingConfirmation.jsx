import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import axios from "axios";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const UserId = localStorage.getItem("userId");
  const bookingData = state?.bookingData || JSON.parse(localStorage.getItem("bookingData") || "{}");
  
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;

  const fetchUserData = async (id) => {
    try {
      const response = await axios.get(`${app}userGet/${id}`);
      const data = response.data;
      setUserData(data[0] || {});
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (UserId) {
      fetchUserData(UserId);
    } else {
      setLoading(false);
    }
  }, []);
useEffect(() => {
  if (!loading && bookingData.vehicle) {
    axios.post(`${app}send-confirmation`, {
      userId: UserId,
      bookingData,
      bookingRef
    }).catch((err) => console.error("Failed to send confirmation email:", err));
  }
}, [loading]);
  // Generate booking reference number
  const generateBookingRef = () => {
    return `BK${Date.now().toString().slice(-8)}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
  };

  const bookingRef = generateBookingRef();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
            <span className="text-gray-600 font-medium">Loading your booking details...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!bookingData.vehicle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-sm border text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Booking Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find your booking information. Please try again or contact support.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const { vehicle, dates, pricing, selectedAddOns, addOnDetails } = bookingData;

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Booking Confirmed</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your vehicle reservation has been successfully confirmed. We've sent a confirmation email with all the details.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {/* Header with Booking Reference */}
            <div className="bg-slate-900 text-white p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Booking Confirmation</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-300">Reference:</span>
                    <span className="font-mono font-bold text-lg bg-slate-800 px-3 py-1 rounded">
                      {bookingRef}
                    </span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-slate-300 text-sm mb-1">Confirmation Date</p>
                  <p className="font-semibold text-lg">{new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-10">
              {/* Customer Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Customer Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                      <p className="text-gray-900 font-semibold">{userData.name || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                      <p className="text-gray-900 font-semibold">{userData.email || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                      <p className="text-gray-900 font-semibold">{userData.phoneNo || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Vehicle & Rental Details
                </h3>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Vehicle</label>
                        <p className="text-xl font-bold text-gray-900">{vehicle.vehicle_name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Rental Duration</label>
                        <p className="text-lg font-semibold text-gray-900">{dates.duration} day(s)</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Pick-up Date & Time</label>
                        <p className="text-lg font-semibold text-gray-900">
                          {new Date(dates.startDate).toLocaleDateString('en-US', { 
                            weekday: 'long',
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Drop-off Date & Time</label>
                        <p className="text-lg font-semibold text-gray-900">
                          {new Date(dates.endDate).toLocaleDateString('en-US', { 
                            weekday: 'long',
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Summary */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Pricing Summary
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Base Rental Cost</span>
                      <span className="text-xl font-semibold text-gray-900">₹{pricing.basePrice}</span>
                    </div>
                    
                    {/* Add-ons */}
                    {selectedAddOns?.insurance && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Insurance Coverage</span>
                        <span className="text-lg font-semibold text-gray-900">₹{addOnDetails.insurance}</span>
                      </div>
                    )}
                    {selectedAddOns?.additionalDriver && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Additional Driver</span>
                        <span className="text-lg font-semibold text-gray-900">₹{addOnDetails.additionalDriver}</span>
                      </div>
                    )}
                    {selectedAddOns?.childSeat && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Child Safety Seat</span>
                        <span className="text-lg font-semibold text-gray-900">₹{addOnDetails.childSeat}</span>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Subtotal</span>
                        <span className="text-lg font-semibold text-gray-900">₹{pricing.subTotal}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Taxes & Fees</span>
                        <span className="text-lg font-semibold text-gray-900">₹{pricing.tax}</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                        <span className="text-xl font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-green-600">₹{pricing.totalPayable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-amber-800 mb-3">Important Reminders</h4>
                    <ul className="text-amber-800 space-y-2 font-medium">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Please bring a valid driving license and government-issued photo ID at pickup
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Arrive 15 minutes early for vehicle inspection and documentation
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Contact us at least 2 hours in advance for any changes to your booking
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Please keep this confirmation accessible during your rental period
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.print()}
                    className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print Confirmation
                  </button>
                 
                  <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Support Information */}
          <div className="text-center mt-10 p-6 bg-white rounded-lg shadow-sm border">
            <h4 className="font-semibold text-gray-900 mb-2">Need Assistance?</h4>
            <p className="text-gray-600 mb-4">Our customer support team is here to help you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+1234567890" 
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (234) 567-890
              </a>
              <span className="hidden sm:block text-gray-300">|</span>
              <a 
                href="mailto:support@company.com" 
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@company.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingConfirmation;