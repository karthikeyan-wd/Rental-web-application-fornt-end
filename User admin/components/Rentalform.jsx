import React, { useState } from "react";
import Input from "../../Uitilites/Input";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { ImFilePicture } from "react-icons/im";
import UserNavbar from "./UserNavbar";

const Rentalform = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const Navigate =useNavigate()
  const [image, setImage] = useState(null);
 const [data, setData] = useState({
  username: "",
  contactNumber: "",
  Email: "",
  address: "",
  aadhaarNumber: "",
  OwnerImage: "",
  LicenseImage: "",
  ShopImage: "",
  shopName: "",
  streetAddress: "",
  city: "",
  state: "",
  country: "",
  pinCode: "",
  gstNumber: "",
  Area:""
});


  const [Error, setError] = useState({});

  const tovalidate = () => {
    let NewError = {};
    if (data.username === "") {
      NewError.username = "Enter Your name";
    }
    if (data.contactNumber === "") {
      NewError.contactNumber = "Enter Your phone number";
    }
    if (data.Email === "") {
      NewError.Email = "Enter Your email";
    }
    if (data.address === "") {
      NewError.address = "Enter Your address";
    }

    if (data.aadhaarNumber === "" || data.aadhaarNumber == 12) {
      NewError.aadhaarNumber = "Check your  aadhaarNumber Number";
    }
    if (data.shopName === "") {
      NewError.shopName = "Enter Your shop name";
    }
    if (data.streetAddress === "") {
      NewError.streetAddress = "Enter shop street name";
    }
    if (data.city === "") {
      NewError.city = "Enter shop city";
    }
    if (data.state === "") {
      NewError.state = "Enter  shop state";
    }
    if (data.country === "") {
      NewError.country = "Enter shop country ";
    }
    if (data.pinCode === "") {
      NewError.pinCode = "Enter shop pin code";
    }
    if (data.gstNumber === "") {
      NewError.gstNumber = "Enter Your shop gstNumber";
    }
    if (data.Area === "") {
      NewError.gstNumber = "Enter Your Shop Area";
    }


    setError(NewError);
    return Object.keys(NewError).length === 0;
  };



  
  console.log(data,"POST DATA")

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...Error, [e.target.name]: "" });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tovalidate()) return;


  
    try {
      const response = await axios({
          method: "POST",
          url: `${app}rentalform`,
          data: data,
          headers: { "Content-Type": "application/json" },    
        });
        console.log(response)
      if (response.data === "OK") {
        alert("Success!");
        Navigate("/")
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <>
    
    <UserNavbar/>
    <div className="max-w-6xl mx-auto  px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-12 gap-0">

          <div className="md:col-span-4 bg-slate-50 p-6 border-r">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Owner Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  <i className="fa-solid fa-user mr-2"></i> Name
                </label>
                <Input
                  type="text"
                  name="username"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  value={data.username}
                />
                {Error.username && (
                  <p className="text-red-500 text-sm mt-1">{Error.username}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contactNumber"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  <i className="fa-solid fa-phone mr-2"></i> Contact Number
                </label>
                <Input
                  type="number"
                  name="contactNumber"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your number"
                  onChange={handleChange}
                  value={data.contactNumber}
                />
                {Error.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">{Error.contactNumber}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  <i className="fa-solid fa-envelope mr-2"></i> Email
                </label>
                <Input
                  type="email"
                  name="Email"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={data.Email}
                />
                {Error.Email && (
                  <p className="text-red-500 text-sm mt-1">{Error.Email}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  <i className="fa-solid fa-location-dot mr-2"></i> Address
                </label>
                <Input
                  type={"text"}
                  name={"address"}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your address"
                  onChange={handleChange}
                  value={data.address}
                />
                {Error.address && (
                  <p className="text-red-500 text-sm mt-1">{Error.address}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="aadhaar"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  <i className="fa-solid fa-address-book mr-2"></i> Aadhaar Card Number
                </label>
                <Input
                  type={"number"}
                  
                  name={"aadhaarNumber"}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your Aadhaar number"
                  onChange={handleChange}
                  value={data.aadhaarNumber}
                />
                {Error.aadhaarNumber && (
                  <p className="text-red-500 text-sm mt-1">{Error.aadhaarNumber}</p>
                )}
              </div>

             <div className="mt-6">
                 <div>
                    <label htmlFor="File" className="block text-sm font-medium text-gray-700 mb-1">
                      Owner Image
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ImFilePicture  className="text-gray-500"/>
                      </div>
                      <Input
                        type={"file"}
                        id="File"
                        name={"OwnerImage"}
                        value={data.OwnerImage}
                        onChange={handleChange}        
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border 
                        rounded-md text-sm`}
                      />
                    </div>
                   
                  </div>
                  

                 

              </div>               
            </form>
          </div>




          <div className="md:col-span-8 p-6 ">
            <div className="flex justify-between">

              <div>
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 border-b pb-3">Shop Details</h2>
              </div>
              <div>
                <Link to="/">
                  <button className="p-2 rounded-full hover:bg-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>


            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="space-y-6">
                <div className="mb-4">
                  <label
                    htmlFor="shopName"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Shop Name
                  </label>
                  <Input
                    type="text"
                    name="shopName"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your shop name"
                    onChange={handleChange}
                    value={data.shopName}
                  />
                  {Error.shopName && (
                    <p className="text-red-500 text-sm mt-1">{Error.shopName}</p>
                  )}
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Shop Address</h3>

                  <div className="mb-4">
                    <label
                      htmlFor="streetAddress"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Street Address  
                    </label>
                    <Input
                      type="text"
                      name="streetAddress"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your street address"
                      onChange={handleChange}
                      value={data.streetAddress}
                    />
                    {Error.streetAddress && (
                      <p className="text-red-500 text-sm mt-1">{Error.streetAddress}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="Area"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                    Area
                    </label>
                    <Input
                      type="text"
                      name="Area"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your Area"
                      onChange={handleChange}
                      value={data.Area}
                    />
                    {Error.streetAddress && (
                      <p className="text-red-500 text-sm mt-1">{Error.Area}</p>
                    )}
                  </div>
                  

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <Input
                        type="text"
                        name="city"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="City"
                        onChange={handleChange}
                        value={data.city}
                      />
                      {Error.city && (
                        <p className="text-red-500 text-sm mt-1">{Error.city}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="state"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <Input
                        type="text"
                        name="state"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="State"
                        onChange={handleChange}
                        value={data.state}
                      />
                      {Error.state && (
                        <p className="text-red-500 text-sm mt-1">{Error.state}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <Input
                        type={"text"}
                        name={"country"}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Country"
                        onChange={handleChange}
                        value={data.country}
                      />
                      {Error.country && (
                        <p className="text-red-500 text-sm mt-1">{Error.country}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="pinCode"
                        className="block mb-2 text-sm font-medium text-gray-700"
                      >
                        Pin Code
                      </label>
                      <Input
                        type="text"
                        name="pinCode"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Pin code"
                        onChange={handleChange}
                        value={data.pinCode}
                      />
                      {Error.pinCode && (
                        <p className="text-red-500 text-sm mt-1">{Error.pinCode}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="gstNumber"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Shop GST Number
                  </label>
                  <Input
                    type="text"
                    name="gstNumber"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter GST Number"
                    onChange={handleChange}
                    value={data.gstNumber}
                  />
                  {Error.gstNumber && (
                    <p className="text-red-500 text-sm mt-1">{Error.gstNumber}</p>
                  )}
                </div>
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="File" className="block text-sm font-medium text-gray-700 mb-1">
                      License Image
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ImFilePicture  className="text-gray-500"/>
                      </div>
                      <Input
                        type={"file"}
                        id="File"
                        name={"LicenseImage"}
                        value={data.LicenseImage}
                        onChange={handleChange}        
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border 
                        rounded-md text-sm`}
                      />
                    </div>
                   
                  </div>
                  <div>
                    <label htmlFor="File" className="block text-sm font-medium text-gray-700 mb-1">
                      Shop Image
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ImFilePicture  className="text-gray-500"/>
                      </div>
                      <Input
                        type={"file"}
                        id="File"
                        name={"ShopImage"}
                        value={data.ShopImage}
                        onChange={handleChange}        
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border 
                        rounded-md text-sm`}
                      />
                    </div>
                   
                  </div>
                  {/* <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700"
                    htmlFor="license-upload"
                  >
                    Upload License Image
                  </label>
                  <Input
                    id={"license-upload"}
                    name={"LicenseImage"}

                    type={"file"}
                    value={data.LicenseImage}
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-primary file:text-white
                    hover:file:bg-blue-700
                    file:cursor-pointer"
                  />
                </div> */}

                  {/* <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700"
                    htmlFor="shop-images"
                  >
                    Upload Shop Images
                  </label>
                  <input
                    id={"shop-images"}
                    type={"file"}
                    name={"ShopImage"}
                    value={data.ShopImage}

                   
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-primary file:text-white
                    hover:file:bg-blue-700
                    file:cursor-pointer"
                  />
                  
                  {images.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`preview-${idx}`}
                          className="w-16 h-16 object-cover rounded shadow-sm"
                        />
                      ))}
                    </div>
                  )}
                </div> */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Rentalform;