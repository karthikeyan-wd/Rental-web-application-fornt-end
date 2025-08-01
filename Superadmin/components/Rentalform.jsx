import React, { useState } from "react";
import Input from "../../Uitilites/Input";

const Rentalform = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    username: "",
    contactNumber: "",
    Email: "",
    address: "",
    aadhaarNumber: "",
    shopName: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    gstNumber: "",
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
    if (data.aadhaarNumber === "") {
      NewError.aadhaarNumber = "Enter Your aadhaarNumber";
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

    setError(NewError);
    return Object.keys(NewError).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    } else {
      setImage(null);
    }
  };

  const handleDelete = () => {
    setImage(null);
  };

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setImages(imagePreviews);
  };

  const handlesumbit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.value !== "") {
      setError({ ...Error, [e.target.name]: "" });
    }
  };
  const handlevalidate = (e) => {
    e.preventDefault();
    if (tovalidate()) {
      alert("Success");
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="  shadow-lg rounded-md flex mt-5 justify-center">
          <div className="border-2 rounded-l-md bg-yellow-50">
            <h1 className=" text-center font-Caveat text-[25px] mt-2">
              Owner Details
            </h1>

            <form onSubmit={handlevalidate}>
              <div className="md:mb-3 lg:mb-3 mx-[-20px] md:mx-4 lg:mx-4 mt-2">
                <label
                  for="name"
                  className="block mb-2  text-sm font-medium text-gray-600 dark:text-white"
                >
                  <i className="fa-solid fa-user ml-2 "></i> Name
                </label>

                <Input
                  type={"text"}
                  name={"username"}
                  className={
                    "bg-white border block border-gray-300 text-gray-600 text-sm rounded-lg  w-[160px] md:w-[300px] lg:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  }
                  placeholder={"Enter your Name"}
                  onChange={handlesumbit}
                  value={data.username}
                />
                <p className="text-red-500 text-sm font-light">
                  {Error.username}
                </p>
              </div>
              <div className="mb-3 mx-4 mt-5 ">
                <label
                  for="contactNumber"
                  className="block mb-2  text-sm font-medium text-gray-600 dark:text-white"
                >
                  <i className="fa-solid fa-phone"></i> Contact Number
                </label>
                <Input
                  type={"number"}
                  name={"contactNumber"}
                  className={
                    "bg-white border block border-gray-300 text-gray-900 text-sm rounded-lg  w-[160px] md:w-[300px] lg:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  }
                  placeholder={"Enter your number"}
                  onChange={handlesumbit}
                  value={data.contactNumber}
                />
                <p className="text-red-500 text-sm font-light">
                  {Error.contactNumber}
                </p>
              </div>
              <div className="mb-3  mx-[-20px] md:mx-4 lg:mx-4 mt-5">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                >
                  <i className="fa-solid fa-envelope"></i> Email
                </label>
                <Input
                  type={"text"}
                  name={"Email"}
                  className={
                    "bg-white border block border-gray-300 text-gray-600 text-sm rounded-lg  w-[160px] md:w-[300px] lg:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  }
                  placeholder={"Enter your email"}
                  onChange={handlesumbit}
                  value={data.Email}
                />
                <p className="text-red-500 text-sm font-light">{Error.Email}</p>
              </div>
              <div className="mb-3  mx-4 mt-5 ">
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                >
                  <i className="fa-solid fa-location-dot"></i> Address
                </label>
                <Input
                  type={"text"}
                  name={"address"}
                  className={
                    "bg-white border block border-gray-300 text-gray-600 text-sm rounded-lg  w-[160px] md:w-[300px] lg:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  }
                  placeholder={"Enter your address"}
                  onChange={handlesumbit}
                  value={data.address}
                />
                <p className="text-red-500 text-sm font-light">
                  {Error.address}
                </p>
              </div>
              <div className="mb-3 mx-4 mt-5">
                <label
                  for="aadhaar"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                >
                  <i className="fa-solid fa-address-book"></i> Aadhaar card
                  number
                </label>
                <Input
                  type={"number"}
                  name={"aadhaarNumber"}
                  className={
                    "bg-white border block border-gray-300 text-gray-900 text-sm rounded-lg  w-[160px] md:w-[300px] lg:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  }
                  placeholder={"Enter your aathaar number"}
                  onChange={handlesumbit}
                  value={data.aadhaarNumber}
                />
                <p className="text-red-500 text-sm font-light">
                  {Error.aadhaarNumber}
                </p>
              </div>

              <input
                type="submit"
                className="bg-primary w-[250px] font-semibold text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 cursor-pointer ml-8 mt-4"
              />
            </form>

            <label
              htmlFor="photo"
              className="block mb-2  text-sm font-medium text-gray-600 dark:text-white mx-4 mt-4 ml-20"
            >
              <i className="fa-solid fa-camera"></i> Upload your image
            </label>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mx-3 ml-16 ">
              <div className="group relative">
                {!image ? (
                  <label htmlFor="file-upload">
                    <span className="flex justify-center items-center size-20 border-2 border-dotted border-gray-300 text-gray-400 cursor-pointer rounded-full hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-600 dark:hover:bg-neutral-700/50 bg-white mb-2">
                      <svg
                        className="shrink-0 size-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="10" r="3" />
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                      </svg>
                    </span>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="size-20">
                    <img
                      src={image}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                )}
              </div>

              <div className="  ">
                <div className="flex items-center  ">
                  <label htmlFor="file-upload">
                    <span className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded border border-transparent bg-primary text-white hover:bg-red-600 cursor-pointer  ">
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      Upload photo
                    </span>
                  </label>

                  {image && (
                    <button
                      onClick={handleDelete}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-gray-200 bg-white text-gray-500 shadow-2xs hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[850px] border-2 border-gray-200 bg-yellow-50 rounded-r-md ">
            <div className="  ">
              <h1 className="text-2xl text-center font-Caveat mt-4 border-b-2 ">
                {" "}
                Shop Details{" "}
              </h1>
            </div>

            <div className="">
              <div className="mb-3 mx-[-20px] md:mx-4 lg:mx-4 mt-5  ">
                <form></form>

                <label
                  for="shopName"
                  className="block mb-2 text-lg font-medium text-gray-600 dark:text-white ml-5"
                >
                  Shop Name
                </label>

                <Input
                  type={"text"}
                  name={"shopName"}
                  className="bg-white border ml-5 border-gray-300 text-gray-900 text-sm rounded-md block w-[160px] md:w-[300px] lg:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white"
                  placeholder={"Enter your shop name"}
                  onChange={handlesumbit}
                  value={data.shopName}
                />
                <p className="text-red-500 text-sm font-light">
                  {Error.shopName}
                </p>
              </div>
            </div>
            <div className="mb-3 mx-4 border-2 rounded-md bg-gray-50 mt-12 ml-10">
              <label
                for="shopAddress"
                className="block mb-2 mx-3 text-lg font-medium text-gray-600 dark:text-white mt-2 "
              >
                Street Address
              </label>

              <Input
                type={"text"}
                name={"streetAddress"}
                className="bg-white border ml-7 border-gray-300 text-gray-900 text-sm rounded-md block w-[600px]  p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder={"Enter your street address"}
                onChange={handlesumbit}
                value={data.streetAddress}
              />
              <p className="text-red-500 text-sm font-light">
                {Error.streetAddress}
              </p>

              <div className="mb-3 ml-3 mx-5 flex mt-6  items-center   gap-2 space-x-1">
                <label
                  for="city"
                  className="block mb-2 text-sm font-medium text-gray-600   dark:text-white"
                >
                  City:
                </label>

                <Input
                  type={"text"}
                  name={"city"}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-[120px] p-2.5 space-x-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={"city**"}
                  onChange={handlesumbit}
                  value={data.city}
                />

                <label
                  for="state"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                >
                  State:
                </label>

                <Input
                  type={"text"}
                  name={"state"}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg space-x-1 block w-[130px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={"state**"}
                  onChange={handlesumbit}
                  value={data.state}
                />
                <label
                  for="country"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                >
                  Country:
                </label>
                <Input
                  type={"text"}
                  name={"country"}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg space-x-1 block w-[130px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={"country**"}
                  onChange={handlesumbit}
                  value={data.country}
                />
                <label
                  for="zip code"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                >
                  Pin code:
                </label>
                <Input
                  type={"text"}
                  name={"pinCode"}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg space-x-1 block w-[130px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={"pin code**"}
                  onChange={handlesumbit}
                  value={data.pinCode}
                />
              </div>
              <div className="mb-3 ml-6  flex mt-1  items-center   gap-[110px] space-x-1 text-nowrap">
                <p className="text-red-500 text-sm font-light">{Error.city}</p>
                <p className="text-red-500 text-sm font-light">{Error.state}</p>
                <p className="text-red-500 text-sm font-light">
                  {Error.country}
                </p>
                <p className="text-red-500 text-sm font-light">
                  {Error.PinCode}
                </p>
              </div>
            </div>

            <div className="mb-3  mx-[-20px] md:mx-4 lg:mx-4 mt-9 ">
              <label
                for="GST number"
                className="block mb-2 text-lg font-medium text-gray-600 dark:text-white ml-5"
              >
                Shop GST Number
              </label>

              <Input
                type={"text"}
                name={"gstNumber"}
                className=" bg-white border ml-5 border-gray-300 text-gray-900 text-sm rounded-lg block w-[160px] md:w-[300px] lg:w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder={"pin code**"}
                onChange={handlesumbit}
                value={data.gstNumber}
              />
              <p className="text-red-500 text-sm font-light">
                {Error.gstNumber}
              </p>
            </div>

            <div className="mb-3 grid grid-cols-3 items-center gap-3  mt-9 mx-2">
              <div className="mt-4 ml-5">
                <label
                  className="block mb-2 text-lg font-medium ml-2 gap-2  text-gray-600 dark:text-white w-[500px] "
                  for=""
                >
                  Upload License Image
                </label>

                <input
                  type="file"
                  className="block w-full text-sm ml-4 text-gray-500 mt-5
        file:me-4 file:py-2 file:px-4
        file:rounded file:border-0
        file:text-sm file:font-semibold
        file:bg-primary file:text-white
        hover:file:bg-red-600
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "
                ></input>
              </div>

              <div>
                <label
                  className="block mb-2 text-lg font-medium ml-10  text-gray-600 dark:text-white w-[500px] mt-2"
                  for=""
                >
                  Upload Shop Image
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 ml-12 mt-5
          file:me-4 file:py-2 file:px-4
          file:rounded file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-white
          hover:file:bg-red-600
          file:disabled:opacity-50 file:disabled:pointer-events-none
          dark:text-neutral-500
          dark:file:bg-blue-500
          dark:hover:file:bg-blue-400"
                />
              </div>

              <div className="flex gap-2  mt-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`preview-${idx}`}
                    className="w-10 h-10 object-cover rounded shadow"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     

    </>
  );
};

export default Rentalform;