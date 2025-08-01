// Quick suggestion pillsimport React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Search, Sparkles, MessageCircle, Send, MapPin, Calendar, Clock, X, Heart } from "lucide-react";
import { useRef, useState } from "react";
import Seat from "../../assets/Cards/Vector.png";
import Auto from "../../assets/Cards/Gear.png";
import Fuel from "../../assets/Cards/Fuel.png";
import Hearts from "../../@UI/Heart";
import { useNavigate } from "react-router-dom";

const AIVehicleSearch = () => {
  // Replace this with your actual backend URL
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi


  const [query, setQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState("");
  const textareaRef = useRef(null);

  // Generate suggestions based on query
  // const generateSuggestions = (value) => {
  //   if (!value || value.length < 3) return [];

  //   const allSuggestions = [
  //     "I need a car for airport pickup tomorrow at 8 AM",
  //     "Looking for a bike rental for weekend trip to beach",
  //     "Need a van for family vacation next week",
  //     "Luxury car rental for business meeting downtown",
  //     "Daily scooter rental for office commute",
  //     "Budget car rental for college student",
  //     "SUV rental for mountain trip with friends",
  //     "Electric bike for eco-friendly city tour"
  //   ];

  //   return allSuggestions.filter(suggestion => 
  //     suggestion.toLowerCase().includes(value.toLowerCase())
  //   ).slice(0, 3);
  // }; 
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(generateSuggestions(value));
    setError(""); // Clear any previous errors

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  };


  const Book = (id) => {
    if (id != "") {
      navigate(`/Booking/${id}`);
    }


  }

  // Handle search with backend API call
  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setSuggestions([]);
    setError("");
    setSearchResults(null);

    try {
      const response = await axios({
        method: "POST",
        url: `${app}text-to-sql`,
        data: { query: query },
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.data) {
        setQuery("")
        const result = response.data.data;
        setSearchResults(result);
        console.log("Search Results:", result);
      }




    } catch (error) {
      console.error("Search error:", error);
      setError("Failed to process your search. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchResults(null);
  };

  const handleBook = (vehicleId) => {
    console.log("Booking vehicle:", vehicleId);
    // Add your booking logic here
  };
  const quickSuggestions = [
    "Cars less then 3000",
    "Bike for weekend",
    "Van for family trip",

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-8 max-w-6xl">

        <div className="grid lg:grid-cols-1 gap-8 items-start">

          {/* AI Search */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-red-100">

            {/* AI Search Header */}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-red-500" size={24} />
              <h3 className="text-xl font-bold text-gray-800">Tell us what you need</h3>
            </div>

            <p className="text-gray-600 mb-6 text-sm">
              Describe your rental needs in natural language - our AI will understand and find perfect matches!
            </p>

            {/* Main Search Input */}
            <div className="relative mb-4">
              <textarea
                ref={textareaRef}
                value={query}
                onChange={handleInputChange}
                placeholder="Try: 'Show a all Cars, Bikes Less then 3000'"
                className="w-full p-4 pr-16 text-base border-2 border-red-200 rounded-2xl focus:border-red-400 focus:outline-none resize-none overflow-hidden min-h-[100px] transition-all duration-200 placeholder-gray-400"
                rows="1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />

              <div className="absolute right-2 top-2">
                <button
                  onClick={handleSearch}
                  disabled={!query.trim() || isLoading}
                  className="p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                  title="Search"
                >
                  {isLoading ? (
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}



            {/* AI Processing Status */}
            {isLoading && (
              <div className="mb-4 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl">
                <Sparkles className="animate-spin" size={16} />
                <span className="text-sm font-medium">AI is understanding your request...</span>
              </div>
            )}

            {/* Search Results - Simple Display */}
            {searchResults && !showResults && (
              <div className="relative mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                {/* ❌ Close Button */}
                <button
                  onClick={() => setShowResults(null)} // or false if you want to hide results
                  className="absolute top-2 right-2 text-green-700 hover:text-red-500 text-lg font-bold"
                  aria-label="Close"
                >
                  &times;
                </button>

                <h4 className="text-sm font-medium text-green-800 mb-2">Search Results:</h4>
                <p className="text-sm text-green-700">Found {searchResults.length} results</p>
                <button
                  onClick={() => setShowResults(true)}
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  View Results
                </button>
              </div>
            )}

            {/* AI Suggestions */}
            {suggestions.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-3 flex items-center gap-2">
                  <MessageCircle size={16} />
                  Smart Suggestions
                </h4>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => { setQuery(suggestion); setSuggestions([]); }}
                      className="w-full text-left p-3 bg-red-50 hover:bg-red-100 rounded-xl text-gray-700 transition-all duration-200 border border-red-100 text-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Suggestion Pills */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-600 mb-3">Quick Options</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 rounded-full text-sm transition-all duration-200 border hover:border-red-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Overlay Modal */}
        {showResults && searchResults && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">

            <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col">

              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-red-500" size={24} />
                  <h2 className="text-2xl font-bold text-gray-800">Search Results</h2>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {searchResults.length} vehicles found
                  </span>
                </div>
                <button
                  onClick={closeResults}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}

            <div className="overflow-y-auto px-6 pt-4" style={{ maxHeight: "calc(90vh - 80px)" }}>
              <div className="grid gap-4 justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-main mt-[-13px]">
                {
                  searchResults.map((items, id) => (
                    <div key={id} className=" rounded-2xl shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] m-3 ">
                      <div className=" relative  ml-4 mr-4">
                        <div className=" absolute top-[5px] right-[5px]  flex w-8 h-7 justify-center items-center rounded-md bg-white overflow-hidden ">

                          <Hearts />
                        </div>
                        <div className="w-full h-full mt-4 md:w-[470px] md:h-[270px] lg:w-[470px] lg:h-[230px] max-w-full overflow-hidden  md:mt-3 lg:mt-3">

                          <img
                            className="rounded-xl w-full h-full object-cover "
                            loading="lazy"
                            src={`${app}uploads/${items.Vehicle_img_name}`}

                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-center">
                          <div className=" border border-[#FF4545]  bg-[#FF4545] w-[170px] mt-2"></div>
                        </div>

                        <div className="grid grid-cols-2 items-center ml-6 mt-3">
                          <span className="text-[20px]  font-bold text-black">
                            {items.name}
                          </span>
                          <div className=" flex ml-[40px]">
                            <svg
                              className="w-4 h-4 text-[#FF0000] ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#FF0000] ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#FF0000] ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-[#FF0000] ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-[88px_95px_95px] justify-center gap-4 mx-2 font-normal lg:gap-6  text-gray-700 dark:text-gray-400">
                        <div className="grid grid-cols-2 justify-center  items-end">
                          <div className="mt-2 mx-2">
                            <img src={Seat} alt="" width="30px" height="30px" />
                          </div>
                          <div className="mt-3 mx-1">
                            <span>{items.seats}</span>
                          </div>
                        </div>

                        <div className=" grid grid-cols-[26px_1fr] justify-center items-end">
                          <div className="mt-3  ">
                            <img src={Auto} width="26px" height="26px" />
                          </div>
                          <div className="mt-3 mx-2">
                            <span className="text-nowrap">{items.transmission}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-[36px_1fr] justify-center">
                          <div className="mt-[8px]">
                            <img src={Fuel} width="28px" height="28px" />
                          </div>
                          <div className="mt-[10px]">
                            <span>{items.fuel_type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="px-4  relative">
                        <hr className="h-px my-4 bg-[#F5EEDC] border-2 border-[#F5EEDC] dark:bg-gray-700 " />
                      </div>

                      <div className="flex  justify-between   lg:justify-between xl:justify-between  mt-5 mx-4 mb-5 shadow-red-900">
                        <div className="mb-3 flex gap-1 justify-start text-gray-700 dark:text-gray-400">
                          <div className="mt-1 text-[23px] ">
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                          </div>
                          <span className="text-[25px] font-black">{items.dynamicPrice}</span>
                          <span className="text-[20px] text-nowrap mt-1">
                            / Per Day
                          </span>
                        </div>

                        <div className="text-end items-center  ">
                          <button
                            type="button"
                            onClick={() => Book(items.id)}
                            className="text-white bg-[#FF0000]  font-main rounded-full text-sm text-center  mb-2 hover:bg-[#b23737] w-24 h-[35px] "
                          >
                            Book
                          </button>
                        </div>

                      </div>
                      <div className="flex justify-between lg:justify-between xl:justify-between mt-5 mx-4 mb-5 shadow-red-900">{items.pricingMessage}
                      </div>

                    </div>
                  ))}
                <div className="pt-2 md:w-[100px] md:ml-[85px] lg:ml-[750px] flex justify-center   ">
                  <button
                    type="button"
                    className="  md:hidden lg:hidden rounded-full border-2 border-gray-700  w-24 h-9 hover:bg-[#FF0000]"
                  >
                    View All
                  </button>


                </div>
              </div>

</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIVehicleSearch;