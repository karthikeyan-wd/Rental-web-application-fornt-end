import React from "react";
import img1 from '../../assets/Help&support/loc.jpg';
import img2 from '../../assets/Help&support/profile.jpg';
import img3 from '../../assets/Help&support/phonecall.jpg';
import cap from '../../assets/Help&support/cap.png';

const Help = () => {
  return (
    <div className="max-w-full mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Help & Support</h1>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <span className="bg-red-500 w-2 h-8 mr-3 rounded-md"></span>
              Contact Us
            </h2>
            
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
                  placeholder="Enter your full name" 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
                  placeholder="example@email.com" 
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your message</label>
                <textarea 
                  className="w-full border border-gray-300 p-3 rounded-lg h-32 focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div>
                <span className="text-gray-700 font-medium">Verification</span>
                <div className="mt-2 border border-gray-200 rounded-lg p-3 bg-white shadow-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <input className="h-5 w-5 mr-3" type="checkbox" id="robot-check" />
                    <label htmlFor="robot-check" className="text-gray-600">I'm not a robot</label>
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="w-8 h-8 mb-1" src={cap} alt="reCAPTCHA" />
                    <div className="text-xs text-gray-400">
                      <span>reCAPTCHA</span>
                      <div>
                        <a className="hover:text-red-500 transition" href="#">Privacy</a>
                        <span> - </span>
                        <a className="hover:text-red-500 transition" href="#">Terms</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="mt-4 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                Send message
              </button>
            </form>
          </div>
          
          <div className="bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
              <span className="bg-red-500 w-2 h-8 mr-3 rounded-md"></span>
              Get in Touch
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-md mr-5">
                  <img className="rounded-full w-12 h-12 object-cover" src={img1} alt="Location" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">54, 1st floor, 2nd cross st,</p>
                  <p className="text-gray-600">Ellaipillaichavady, Puducherry, 605005</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-md mr-5">
                  <img className="rounded-full w-12 h-12 object-cover" src={img2} alt="Profile" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Company Information</h3>
                  <p className="text-gray-600">Vehicle Rentals</p>
                  <p className="text-gray-600">Tax ID: RO42244256</p>
                  <p className="text-gray-600">Reg. No.: J35/377/2020</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-md mr-5">
                  <img className="rounded-full w-12 h-12 object-cover" src={img3} alt="Phone" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Number</h3>
                  <p className="text-gray-600 mb-4">+91 1234567899</p>
                  <button className="px-5 py-2.5 border-2 border-red-500 text-red-500 font-medium rounded-lg hover:text-white hover:bg-red-500 transition duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;