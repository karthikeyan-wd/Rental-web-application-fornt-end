import React, { useState, useEffect } from "react";
import gif from "../../assets/Signup/Mobile_login.gif";
import { Link, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import { PiAddressBookBold } from "react-icons/pi";
import { LiaCitySolid } from "react-icons/lia";
import { TbBuildingEstate } from "react-icons/tb";
import { ImFilePicture } from "react-icons/im";
import Input from "../../Uitilites/Input";
import axios from "axios";
const Register = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    Address: "",
    City: "",
    State: "",
    File: "",

    // terms: false
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Username is required !";
    } else if (formData.name.length < 3) {
      newErrors.name = "Username must be at least 3 characters !";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required !";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number !";
    } else if (errors.mobile == "This Mobile Number Already Taken") {
      newErrors.mobile = "This Mobile Number Already TAken";
    }
    

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required !";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address !";
    } else if (errors.email === "This email address is already taken!") {
      newErrors.email = "This email address is already taken !";
    }

    if (!formData.password) {
      newErrors.password = "Password is required !";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters !";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number !";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password !";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match !";
    }

    if (!formData.Address) {
      newErrors.Address = "You must enter the Address !";
    }
    if (!formData.City) {
      newErrors.City = "Enter your city !";
    }
    if (!formData.State) {
      newErrors.State = "Enter your State !";
    }
    if (!formData.Pincode) {
      newErrors.Pincode = "Enteer your Pincode !";
    }
    if (!formData.File) {
      newErrors.File = "upload your picture !";
    }

    return newErrors;
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // const data = new FormData();
        // Object.entries(formData).forEach(([key, value]) => {
        //   data.append(key, value);
        // });
        // console.log(data)
        const response = await axios({
          method: "POST",
          url: `${app}user`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response);

        if (response.data === "Already Taken") {
          setErrors({ email: "This email address is already taken!" });
          return;
        } else if (response.data === `Mobile Number Already Taken`) {
          setErrors({ mobile: "This Mobile Number Already Taken!" });
        }
        else if (response.data == "Registration succesfully"){
          setTimeout(() => {
            alert("Registration successful!");
            navigate("/login");
  
            console.log(formData);
  
            setIsSubmitting(false);
  
            setFormData({
              name: "",
              mobile: "",
              email: "",
              password: "",
              confirmPassword: "",
              Address: "",
              City: "",
              State: "",
              Pincode: "",
              File: "",
             });
          }, 1000);


        }
       
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <>
      <div>
        <UserNavbar />
      </div>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="container max-w-5xl bg-white rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-5">
              <div className="max-w-sm mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                      Sign Up
                    </h1>
                  </div>
                  <button className=" w-8 h-8 flex items-center justify-center">
                    <span className="font-bold text-4xl text-gray-700">×</span>
                  </button>
                </div>

                <hr className="mb-4 border-gray-200 border" />

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <Input
                        type={"text"}
                        id="name"
                        name={"name"}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={"Enter your username"}
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.username ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.username && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.username}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <Input
                        type={"number"}
                        id="mobile"
                        name={"mobile"}
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder={"Enter your mobile number"}
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.mobile ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <Input
                        type={"email"}
                        id="email"
                        name={"email"}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <Input
                        type={"password"}
                        id="password"
                        name={"password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.password && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <Input
                        type={"password"}
                        id="confirmPassword"
                        name={"confirmPassword"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.confirmPassword
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="Address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PiAddressBookBold className="text-gray-500" />
                      </div>
                      <Input
                        type={"text"}
                        id="Address"
                        name={"Address"}
                        value={formData.Address}
                        onChange={handleChange}
                        placeholder={"Enter your full Address"}
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.Address ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.Address && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.Address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="City"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your City
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LiaCitySolid className="text-gray-500" />
                      </div>
                      <Input
                        type={"text"}
                        id="city"
                        name={"City"}
                        value={formData.City}
                        onChange={handleChange}
                        placeholder={"Enter your City"}
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.City ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.City && (
                      <p className="mt-1 text-xs text-red-500">{errors.City}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="State"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your State
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <TbBuildingEstate className="text-gray-500" />
                      </div>
                      <Input
                        type={"text"}
                        id="State"
                        name={"State"}
                        value={formData.State}
                        onChange={handleChange}
                        placeholder={"Enter your State"}
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.State ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.State && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.State}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="City"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Pincode
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LiaCitySolid className="text-gray-500" />
                      </div>
                      <Input
                        type={"number"}
                        id="Pincode"
                        name={"Pincode"}
                        value={formData.Pincode}
                        onChange={handleChange}
                        placeholder={"Enter your Pincode"}
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.City ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.City && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.Pincode}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="File"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      File
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <ImFilePicture className="text-gray-500" />
                      </div>
                      <input
                        type="file"
                        id="File"
                        name="File"
                        accept="image/*"
                        onChange={handleChange}
                        className={`w-[300px] md:w-[350px] lg:w-[350px] pl-8 pr-3 py-2 border ${
                          errors.File ? "border-red-500" : "border-gray-300"
                        } rounded-md text-sm`}
                      />
                    </div>
                    {errors.File && (
                      <p className="mt-1 text-xs text-red-500">{errors.File}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[300px] md:mx-6 py-3   border-0 rounded-md text-sm font-medium text-white bg-[#FF4545] hover:bg-[#cc3636] disabled:bg-[#ff9c9c] disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>
                </form>

                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="font-medium text-[#FF4545]">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-[50%] bg">
              <div className="h-full flex items-center justify-center p-4">
                <img
                  src={gif}
                  alt="Mobile login animation"
                  className="max-w-sm rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
