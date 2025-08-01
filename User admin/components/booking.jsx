import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import axios from "axios";

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, active, completed, cancelled
  const [searchTerm, setSearchTerm] = useState('');
  const UserId = localStorage.getItem("userId");
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;

  // Mock data - Replace with actual API call
  const fetchBookings = async () => {
    try {
      setLoading(true);
      // Replace with actual API endpoint
      // const response = await axios.get(`${app}bookings/${UserId}`);
      
      // Mock data for demonstration
      const mockBookings = [
        {
          id: 1,
          bookingRef: "BK12345678ABCD",
          vehicle: {
            name: "Toyota Camry 2023",
            type: "Sedan",
            image: "/api/placeholder/300/200"
          },
          dates: {
            startDate: "2024-12-01T10:00:00Z",
            endDate: "2024-12-05T10:00:00Z",
            duration: 4
          },
          status: "confirmed",
          totalAmount: 8500,
          pickupLocation: "Downtown Branch",
          dropoffLocation: "Airport Branch",
          createdAt: "2024-11-20T14:30:00Z"
        },
        {
          id: 2,
          bookingRef: "BK87654321EFGH",
          vehicle: {
            name: "Honda CR-V 2023",
            type: "SUV",
            image: "/api/placeholder/300/200"
          },
          dates: {
            startDate: "2024-11-15T09:00:00Z",
            endDate: "2024-11-20T09:00:00Z",
            duration: 5
          },
          status: "completed",
          totalAmount: 12500,
          pickupLocation: "City Center",
          dropoffLocation: "City Center",
          createdAt: "2024-11-10T11:20:00Z"
        },
        {
          id: 3,
          bookingRef: "BK11223344IJKL",
          vehicle: {
            name: "BMW X3 2023",
            type: "Luxury SUV",
            image: "/api/placeholder/300/200"
          },
          dates: {
            startDate: "2024-12-20T14:00:00Z",
            endDate: "2024-12-25T14:00:00Z",
            duration: 5
          },
          status: "upcoming",
          totalAmount: 18500,
          pickupLocation: "Premium Lounge",
          dropoffLocation: "Premium Lounge",
          createdAt: "2024-11-25T16:45:00Z"
        }
      ];

      setBookings(mockBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (UserId) {
      fetchBookings();
    } else {
      navigate("/login");
    }
  }, [UserId, navigate]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
      case 'upcoming':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'completed':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'cancelled':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status === filter || 
      (filter === 'active' && (booking.status === 'confirmed' || booking.status === 'upcoming'));
    
    const matchesSearch = booking.vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.bookingRef.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const handleCancelBooking = async (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        // API call to cancel booking
        // await axios.put(`${app}bookings/${bookingId}/cancel`);
        
        // Update local state
        setBookings(bookings.map(booking => 
          booking.id === bookingId 
            ? { ...booking, status: 'cancelled' }
            : booking
        ));
      } catch (error) {
        console.error("Error cancelling booking:", error);
        alert("Failed to cancel booking. Please try again.");
      }
    }
  };

  const canCancelBooking = (booking) => {
    const startDate = new Date(booking.dates.startDate);
    const now = new Date();
    const hoursDiff = (startDate - now) / (1000 * 60 * 60);
    return hoursDiff > 24 && (booking.status === 'confirmed' || booking.status === 'upcoming');
  };

  if (loading) {
    return (
      <>
        <UserNavbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
              <span className="text-gray-600 font-medium">Loading your bookings...</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
            <p className="text-gray-600">Manage and track all your vehicle reservations</p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All Bookings' },
                  { key: 'active', label: 'Active' },
                  { key: 'completed', label: 'Completed' },
                  { key: 'cancelled', label: 'Cancelled' }
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative lg:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by vehicle or booking reference..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Bookings List */}
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || filter !== 'all' 
                  ? "Try adjusting your search or filter criteria"
                  : "You haven't made any bookings yet. Start by browsing our available vehicles."
                }
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Browse Vehicles
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      {/* Booking Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {booking.vehicle.name}
                            </h3>
                            <p className="text-gray-600 mb-2">{booking.vehicle.type}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>Ref: {booking.bookingRef}</span>
                              <span>•</span>
                              <span>Booked on {new Date(booking.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full border text-sm font-medium flex items-center space-x-1 ${getStatusColor(booking.status)}`}>
                            {getStatusIcon(booking.status)}
                            <span className="capitalize">{booking.status}</span>
                          </div>
                        </div>

                        {/* Rental Details */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m12-10v10M7 9h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                              </svg>
                              <span className="text-gray-600">Pick-up:</span>
                              <span className="font-medium ml-1">
                                {new Date(booking.dates.startDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>
                            <div className="flex items-center text-sm">
                              <svg className="w-4 h-4 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m12-10v10M7 9h10a2 2 0 012 2v8a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                              </svg>
                              <span className="text-gray-600">Drop-off:</span>
                              <span className="font-medium ml-1">
                                {new Date(booking.dates.endDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-gray-600">From:</span>
                              <span className="font-medium ml-1">{booking.pickupLocation}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-gray-600">To:</span>
                              <span className="font-medium ml-1">{booking.dropoffLocation}</span>
                            </div>
                          </div>
                        </div>

                        {/* Duration and Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{booking.dates.duration} days</span>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">₹{booking.totalAmount}</p>
                            <p className="text-sm text-gray-500">Total Amount</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex flex-col sm:flex-row gap-3 justify-end">
                        <button
                          onClick={() => navigate(`/booking-details/${booking.id}`)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                          View Details
                        </button>
                        
                        {booking.status === 'completed' && (
                          <button className="px-4 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                            Download Invoice
                          </button>
                        )}
                        
                        {canCancelBooking(booking) && (
                          <button
                            onClick={() => handleCancelBooking(booking.id)}
                            className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-medium"
                          >
                            Cancel Booking
                          </button>
                        )}
                        
                        {(booking.status === 'confirmed' || booking.status === 'upcoming') && (
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            Modify Booking
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination could be added here if needed */}
        </div>
      </div>
    </>
  );
};

export default MyBookings;