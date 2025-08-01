import React, { useState } from "react";

function Rentalform() {
  return (
    <>
      <div className="flex items-center justify-center my-4">
        <div className="mx-4">
          <h2 className="  text-[20px] text-center text-primary">APPROVAL FORM</h2>

            <form className="grid grid-cols-2 p-2 mt-5 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] bg-[rgb(243,243,243)]">
              <div className="mb-3 mx-4">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border block border-gray-300 text-gray-900 text-sm rounded-lg  w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="mb-3 mx-4">
                <label
                  for="contactNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contact Number
                </label>
                <input
                  type="number"
                  id="contactNumber"
                  className="bg-gray-50 border block border-gray-300 text-gray-900 text-sm rounded-lg  w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your Number"
                  required
                />
              </div>
              <div className="mb-3  mx-4">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-3  mx-4">
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div className="mb-3 mx-4">
                <label
                  for="shopName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shop Name
                </label>
                <input
                  type="text"
                  id="shopName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your shop name"
                  required
                />
              </div>
              <div className="mb-3 mx-4">
                <label
                  for="shopAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shop Address
                </label>
                <input
                  type="text"
                  id="shopAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your shop address"
                  required
                />
              </div>
              <div className="mb-3  mx-4">
                <label
                  for="GSTnumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shop GST Number
                </label>
                <input
                  type="number"
                  id="GSTnumber"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Entet GST Number"
                  required
                />
              </div>
              <div className="mb-3 mx-4">
                <label
                  for="shopLocation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shop Location
                </label>
                <input
                  type="password"
                  id="shopLocation"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="shop location"
                  required
                />
              </div>
              <div className="mb-3 mx-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="user_avatar"
                >
                  Upload License image
                </label>
                <input
                  className="block w-[300px] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                />
                <div
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="user_avatar_help"
                ></div>
              </div>

              <div className="mb-3 ">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="user_avatar"
                >
                  Upload Shop image
                </label>
                <input
                  className="block w-[300px] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                />
                <div
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="user_avatar_help"
                ></div>
              </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Rentalform;
