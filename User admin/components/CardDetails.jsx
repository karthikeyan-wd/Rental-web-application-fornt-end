import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CardDetailsdb } from "../../Db/CardDetails";
import seats from "../../assets/card_details/Vector.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enIN } from "date-fns/locale";
import LatestVehicle from "./LatestVehicle";
import Footer from "./Footer";
import UserNavbar from "./UserNavbar";
import { MdOutlineEventSeat } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TiStopwatch } from "react-icons/ti";
import { MdOutlineSpeed } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";
import Loader from "../../@UI/loader";

const CardDetails = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;
  const navigate = useNavigate();

  const [CardDetailsdata, setCardDetaildata] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [ImageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      BookingDetails(id);
    }
  }, [id]);

  const BookingDetails = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`${app}BookingDetails/${id}`);
      console.log(response.data.CardData);
      
      setCardDetaildata(response.data.CardData || {});
      setImageData(response.data.ImgData || []);
    } catch (error) {
      console.error("Error fetching booking details:", error);
    } finally {
      setLoading(false);
    }
  };

  // State for add-ons
  const [addOns, setAddOns] = useState({
    insurance: false,
    additionalDriver: false,
    childSeat: false
  });

  // Add-on prices
  const addOnPrices = {
    insurance: 500,
    additionalDriver: 300,
    childSeat: 200
  };

  const taxAmount = 100;

  // Handle checkbox changes
  const handleAddOnChange = (addOnType) => {
    setAddOns(prev => ({
      ...prev,
      [addOnType]: !prev[addOnType]
    }));
  };

  // Calculate totals
  const calculateAddOnTotal = () => {
    let total = 0;
    if (addOns.insurance) total += addOnPrices.insurance;
    if (addOns.additionalDriver) total += addOnPrices.additionalDriver;
    if (addOns.childSeat) total += addOnPrices.childSeat;
    return total;
  };

  const basePrice = CardDetailsdata.dynamicprice || CardDetailsdata.dynamicPrice || 0;
  const subTotal = basePrice + calculateAddOnTotal();
  const totalPayable = subTotal + taxAmount;

  // Handle booking confirmation
  const handleBookNow = () => {
    const bookingData = {
      vehicleId: id,
      vehicle: CardDetailsdata,
      selectedAddOns: addOns,
      dates: {
        startDate: startDate,
        endDate: endDate,
        duration: Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 1
      },
      pricing: {
        basePrice: basePrice,
        addOnTotal: calculateAddOnTotal(),
        subTotal: subTotal,
        tax: taxAmount,
        totalPayable: totalPayable
      },
      addOnDetails: {
        insurance: addOns.insurance ? addOnPrices.insurance : 0,
        additionalDriver: addOns.additionalDriver ? addOnPrices.additionalDriver : 0,
        childSeat: addOns.childSeat ? addOnPrices.childSeat : 0
      }
    };

    console.log("Booking Data:", bookingData);
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    navigate('/booking-confirmation', { state: { bookingData } });
  };

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {CardDetailsdata && Object.keys(CardDetailsdata).length > 0 && (
          <>
            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {CardDetailsdata.vehicle_name || 'Vehicle Details'}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <span className="text-2xl font-bold text-blue-600">₹{basePrice}</span>
                    <span className="ml-2">per day</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all duration-200 font-medium">
                    <i className="fa-solid fa-share-nodes mr-2"></i>
                    Share
                  </button>
                  <button className="flex items-center px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-red-500 hover:text-red-500 transition-all duration-200 font-medium">
                    <i className="fa-regular fa-heart mr-2"></i>
                    Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <img
                    className="rounded-xl object-cover w-full h-96 lg:h-[400px]"
                    src={`${app}uploads/${CardDetailsdata.image_name}`}
                    alt={CardDetailsdata.vehicle_name || 'Vehicle'}
                  />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {ImageData.slice(0, 4).map((items, i) => (
                    <div key={i} className="aspect-square lg:aspect-auto">
                      <img
                        className="rounded-xl object-cover w-full h-full lg:h-24"
                        src={`${app}uploads/${items}`}
                        alt={`Vehicle ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Left Column - Vehicle Details */}
              <div className="xl:col-span-2 space-y-8">
                {/* Vehicle Features */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Vehicle Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex items-center justify-center p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                      <MdOutlineEventSeat className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="font-medium text-gray-700">{CardDetailsdata.seats || 'N/A'} Seats</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                      <GiSpeedometer className="w-6 h-6 text-green-600 mr-2" />
                      <span className="font-medium text-gray-700">{CardDetailsdata.mileage || 'N/A'} Kmpl</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition-shadow">
                      <GiSchoolBag className="w-6 h-6 text-purple-600 mr-2" />
                      <span className="font-medium text-gray-700">{CardDetailsdata.bags || 'N/A'} Bags</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-orange-50 rounded-xl border border-orange-100 hover:shadow-md transition-shadow">
                      <BsFuelPump className="w-6 h-6 text-orange-600 mr-2" />
                      <span className="font-medium text-gray-700">{CardDetailsdata.fuelType || 'Petrol'}</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow">
                      <TbAutomaticGearbox className="w-6 h-6 text-indigo-600 mr-2" />
                      <span className="font-medium text-gray-700">{CardDetailsdata.system || 'Auto'}</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-red-50 rounded-xl border border-red-100 hover:shadow-md transition-shadow">
                      <TiStopwatch className="w-6 h-6 text-red-600 mr-2" />
                      <span className="font-medium text-gray-700">Speed</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-teal-50 rounded-xl border border-teal-100 hover:shadow-md transition-shadow">
                      <MdOutlineSpeed className="w-6 h-6 text-teal-600 mr-2" />
                      <span className="font-medium text-gray-700">{CardDetailsdata.travelled_distance || 0} Km</span>
                    </div>
                  </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                      <button
                        onClick={() => setActiveTab('description')}
                        className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                          activeTab === 'description'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Description
                      </button>
                      <button
                        onClick={() => setActiveTab('specification')}
                        className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                          activeTab === 'specification'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Specifications
                      </button>
                      <button
                        onClick={() => setActiveTab('reviews')}
                        className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                          activeTab === 'reviews'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Reviews
                      </button>
                    </nav>
                  </div>

                  <div className="prose max-w-none">
                    {activeTab === 'description' && (
                      <p className="text-gray-700 leading-relaxed text-base">
                        {CardDetailsdata.Description || 'No description available'}
                      </p>
                    )}
                    {activeTab === 'specification' && (
                      <div className="text-gray-700">
                        <h4 className="font-semibold mb-3">Technical Specifications</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="font-medium">Engine Type:</span> {CardDetailsdata.fuelType || 'Petrol'}
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="font-medium">Transmission:</span> {CardDetailsdata.system || 'Automatic'}
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="font-medium">Mileage:</span> {CardDetailsdata.mileage || 'N/A'} Kmpl
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="font-medium">Seating:</span> {CardDetailsdata.seats || 'N/A'} Passengers
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'reviews' && (
                      <div className="text-gray-700">
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-yellow-500">4.5</span>
                            <div className="flex ml-2">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-gray-600">(24 reviews)</span>
                          </div>
                        </div>
                        <p>Customer reviews and ratings will be displayed here.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Card */}
              <div className="xl:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 sticky top-8">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
                    <h3 className="text-xl font-bold">Book This Vehicle</h3>
                    <p className="text-blue-100 mt-1">Reserve now for the best rates</p>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Date Selection */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Pick-Up Date & Time</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          dateFormat="dd/MM/yyyy h:mm aa"
                          locale={enIN}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Drop-Off Date & Time</label>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          showTimeSelect
                          dateFormat="dd/MM/yyyy h:mm aa"
                          locale={enIN}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          minDate={startDate}
                        />
                      </div>
                    </div>

                    {/* Add-ons */}
                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Extra Add-ons</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <input
                              id="insurance-checkbox"
                              type="checkbox"
                              checked={addOns.insurance}
                              onChange={() => handleAddOnChange('insurance')}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="insurance-checkbox" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                              Insurance Coverage
                            </label>
                          </div>
                          <span className="text-sm font-semibold text-gray-600">+₹{addOnPrices.insurance}</span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <input
                              id="driver-checkbox"
                              type="checkbox"
                              checked={addOns.additionalDriver}
                              onChange={() => handleAddOnChange('additionalDriver')}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="driver-checkbox" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                              Additional Driver
                            </label>
                          </div>
                          <span className="text-sm font-semibold text-gray-600">+₹{addOnPrices.additionalDriver}</span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center">
                            <input
                              id="child-seat-checkbox"
                              type="checkbox"
                              checked={addOns.childSeat}
                              onChange={() => handleAddOnChange('childSeat')}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="child-seat-checkbox" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                              Child Seat
                            </label>
                          </div>
                          <span className="text-sm font-semibold text-gray-600">+₹{addOnPrices.childSeat}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Summary */}
                    <div className="border-t pt-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-gray-700">
                          <span>Base Price</span>
                          <span className="font-medium">₹{basePrice}</span>
                        </div>

                        {calculateAddOnTotal() > 0 && (
                          <div className="flex justify-between text-gray-700">
                            <span>Add-ons</span>
                            <span className="font-medium">₹{calculateAddOnTotal()}</span>
                          </div>
                        )}

                        <div className="flex justify-between text-gray-700">
                          <span>Sub Total</span>
                          <span className="font-medium">₹{subTotal}</span>
                        </div>

                        <div className="flex justify-between text-gray-700">
                          <span>Tax</span>
                          <span className="font-medium">₹{taxAmount}</span>
                        </div>

                        <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t">
                          <span>Total Payable</span>
                          <span>₹{totalPayable}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleBookNow}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl mt-6 transition-all duration-200 transform hover:scale-105 shadow-lg"
                      >
                        Book Now - ₹{totalPayable}
                      </button>
                    </div>

                    {/* Selected Add-ons Summary */}
                    {(addOns.insurance || addOns.additionalDriver || addOns.childSeat) && (
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h5 className="text-sm font-semibold text-blue-800 mb-2">Selected Add-ons:</h5>
                        <ul className="text-xs text-blue-700 space-y-1">
                          {addOns.insurance && <li>• Insurance Coverage (+₹{addOnPrices.insurance})</li>}
                          {addOns.additionalDriver && <li>• Additional Driver (+₹{addOnPrices.additionalDriver})</li>}
                          {addOns.childSeat && <li>• Child Seat (+₹{addOnPrices.childSeat})</li>}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-16">
        <LatestVehicle />
      </div>
      
      <Footer />
    </div>
  );
};

export default CardDetails;