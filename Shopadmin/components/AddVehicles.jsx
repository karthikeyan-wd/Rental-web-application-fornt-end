import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../Uitilites/Input";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Addvehicle = ({ Close }) => {
  const Navigate = useNavigate();
  const [Error, setError] = useState({});
  const [image, setImage] = useState([]);

  const ShopId = Cookies.get("ShopID");
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi


  const [formData, setFormData] = useState({
    VehicleName: "",
    Price: "",
    Regno: "",
    color: "",
    Seats: "",
    VehicleType: "",
    Brand: "",
    Transmission: "",
    FuelType: "",
    ModelYear: "",
    Description:"",
    FrontImage:"",
    ShopId: ShopId,
    createdBy: ShopId,
  });

  const [VechileType, setVechileType] = useState([]);

  const [brandData, SetBrand] = useState([]);
  const [transmissionData, SettransmissionData] = useState([]);
  const [fuelData, SetFuelData] = useState([]);
  const VechileData = async () => {
    await axios
      .get(`${app}api/VehicleTypes/`)
      .then((response) => {
        const Data = response.data;

        console.log(Data);
        setVechileType(Data);
      });
  };

  const TransData = async () => {
    await axios
      .get(`${app}api/TransmissionTypes`)
      .then((response) => { 
        const Data = response.data;
        SettransmissionData(Data);
        console.log(Data);
      });
  };
  useEffect(() => {
    FuelData();
    VechileData();
    BrandData();
    TransData();
  }, []);

  const FuelData = async () => {
    await axios.get(`${app}api/FuelTypes`).then((response) => {
      const Data = response.data;
      console.log(Data);
      SetFuelData(Data);
    });
  };

  const BrandData = async () => {
    await axios.get(`${app}api/BrandTypes`).then((response) => {
      const Data = response.data;

      SetBrand(Data);
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.VehicleName.trim()) {
      newErrors.VehicleName = "VehicleName is required !";
    } else if (formData.VehicleName.length < 3) {
      newErrors.VehicleName = "VehicleName must be at least 3 characters !";
    }

    if (!formData.Price) {
      newErrors.Price = "You must enter the Price !";
    }
    if (!formData.Regno) {
      newErrors.Regno = "Enter your Regno !";
    }
    if (!formData.color) {
      newErrors.color = "Enter your color !";
    }
    if (!formData.Seats) {
      newErrors.Seats = "Enteer your Seats !";
    }
    if (!formData.ModelYear) {
      newErrors.ModelYear = "Enteer your ModelYear !";
    }
   
    if (!formData.Brand) {
      newErrors.Brand = "Select your Brand !";
    }
    if (!formData.Transmission) {
      newErrors.Transmission = "Select your Transmission !";
    }
    if (!formData.FuelType) {
      newErrors.FuelType = "Select your FuelType !";
    }
    if (!formData.VehicleType) {
      newErrors.VehicleType = "Select your VehicleTypea!";
    }
     if (image.length === 0) {
    newErrors.VehicleImage = "Please upload at least one vehicle image!";
  }
   if (!formData.FrontImage){
     newErrors.FrontImage = "Please upload a front image!";}
  if (image.length !== 5){
    newErrors.image = "Upload exactly 5 images!";
  }
  if(formData.Description == ""){
    newErrors.Description = "ENTER a Description"
  }
 
    return newErrors;
  };

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleFrontImageChange = (e) => {
  const file = e.target.files[0];
  setFormData({ ...formData, FrontImage: file });


};
  console.log(formData);
const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  if (files.length !== 5) {
    setImage([]);
  } else {
    setImage(files);
  }
};


const handleSubmit = async () => {
  const validationErrors = validateForm();
  setError(validationErrors);
console.log(validationErrors
)
  if (Object.keys(validationErrors).length === 0) {
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
    
        form.append(key, value);
      
    });

    image.forEach((file) => {
      form.append("image", file);
    });
    
   
  
   for (const [key, value] of form.entries()) {
  console.log(`${key}: ${value}`); 
}


    try {
      const response = await axios.post(`${app}Addvehicle`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.data === "Success") {
        alert("Vehicle added successfully!");
      
        Close()
        
        setFormData({
          VehicleName: "",
          Price: "",
          Regno: "",
          color: "",
          Seats: "",
          VehicleType: "",
          Brand: "",
          Transmission: "",
          FuelType: "",
          ModelYear: "",
          Description:"",
          ShopId: ShopId,
          createdBy: ShopId,
        });
        setImage([]);
        setError({});
      }
    } catch (err) {
      console.log("Error uploading vehicle:", err);
    }
  }
  
};



  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4 mx-2">
        <div className="bg-white w-full h-full sm:w-3/4 md:w-2/3 shadow-xl rounded-lg p-8 max-h-full overflow-y-auto lg:ml-60">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add Vehicle
            </h2>
            <button
              onClick={Close}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Your Name
                </label>
                <Input
                  type={"text"}
                  name={"VehicleName"}
                  value={formData.VehicleName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <p className="text-primary">{Error.VehicleName}</p>
              </div>

              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">₹</span>
                  <Input
                    type={"number"}
                    name={"Price"}
                    value={formData.Price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="w-full border border-gray-300 p-3 pl-8 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <p className="text-primary">{Error.Price}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Registraion No.
                </label>
                <Input
                  type={"text"}
                  name={"Regno"}
                  value={formData.Regno}
                  onChange={handleChange}
                  placeholder="Registraion No."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <p className="text-primary">{Error.Regno}</p>
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  color
                </label>
                <Input
                  type={"text"}
                  name={"color"}
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Color"
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <p className="text-primary">{Error.color}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Seats
                </label>
                <Input
                  type={"number"}
                  name={"Seats"}
                  value={formData.Seats}
                  onChange={handleChange}
                  placeholder="Number of Seats"
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <p className="text-primary">{Error.Seats}</p>
              </div>

              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Vehicle Type
                </label>
                <select
                  name={"VehicleType"}
                  value={formData.VehicleType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">-- Select --</option>
                  {VechileType.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <option value={item.id}>{item.name}</option>
                    </React.Fragment>
                  ))}
                </select>
                <p className="text-primary">{Error.VehicleType}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Brand
                </label>
                <select
                  name={"Brand"}
                  value={formData.Brand}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">-- Select --</option>
                  {brandData.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <option value={item.id}>{item.name}</option>
                    </React.Fragment>
                  ))}
                </select>
                <p className="text-primary">{Error.Brand}</p>
              </div>

              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Transmission
                </label>
                <select
                  name={"Transmission"}
                  value={formData.Transmission}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">-- Select --</option>
                  {transmissionData.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <option value={item.id}>{item.name}</option>
                    </React.Fragment>
                  ))}
                </select>
                <p className="text-primary">{Error.Transmission}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Fuel Type
                </label>
                <select
                  name={"FuelType"}
                  value={formData.FuelType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">-- Select --</option>
                  {fuelData.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <option value={item.id}>{item.name}</option>
                    </React.Fragment>
                  ))}
                </select>
                <p className="text-primary">{Error.FuelType}</p>
              </div>

              <div>
                <label className="block text-gray-600 mb-2 font-medium">
                  Model Year
                </label>

                <Input
                  type={"number"}
                  name={"ModelYear"}
                  value={formData.ModelYear}
                  onChange={handleChange}
                  placeholder="YYYY"
                  min="1900"
                  max="2099"
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <p className="text-primary">{Error.ModelYear}</p>
              </div>
            </div>
             
              <div>
                  <label className="block text-gray-600 mb-2 font-medium">
                  Description
                  </label>

                  <textarea 
    name="Description"
    value={formData.Description}
    onChange={handleChange}
    placeholder="Description"
    className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  />

                  <p className="text-primary">{Error.Description}</p>
                </div>

              
<div className="mb-6">
  <label className="block text-gray-700 mb-2 font-semibold">Front/Cover Image</label>

  <label
    htmlFor="front-image"
    className="w-full p-6 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center bg-white shadow-sm hover:bg-gray-50 cursor-pointer transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-gray-400 mb-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 16V4m0 0L3 8m4-4l4 4M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-5h2"
      />
    </svg>
    <span className="text-gray-600 font-medium">Upload front image</span>
    <input
      id="front-image"
      type="file"
      name ="FrontImage"
      accept="image/*"
      onChange={handleFrontImageChange}
      className="hidden"
    />
  </label>

  {formData.FrontImage && (
    <div className="mt-3">
      <p className="text-sm text-gray-700">Preview:</p>
      <img
        src={URL.createObjectURL(formData.FrontImage)}
        className="w-32 h-32 object-cover rounded border mt-2"
      />
    </div>
  )}
  <p className="text-red-500 text-sm mt-1">{Error.FrontImage}</p>
</div>

        <div className="mb-6">
  <label className="block text-gray-700 mb-2 font-semibold">Gallery Images (5)</label>

  <label
    htmlFor="gallery-images"
    className="w-full p-6 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center bg-white shadow-sm hover:bg-gray-50 cursor-pointer transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-gray-400 mb-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 16V4m0 0L3 8m4-4l4 4M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-5h2"
      />
    </svg>
    <span className="text-gray-600 font-medium">Upload 5 Vechile images</span>
    <input
      id="gallery-images"
      type="file"
      accept="image/*"
      name="images"
      multiple
      onChange={handleImageChange}
      className="hidden"
    />
  </label>

  <p className="text-red-500 text-sm mt-1">{Error.image}</p>

  {image.length > 0 && (
    <>
      <p className="text-sm text-gray-700 mt-3">Selected Images:</p>
      <div className="flex flex-wrap gap-4 mt-2">
        {image.map((file, index) => (
          <div key={index} className="relative border rounded shadow w-28 h-28">
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-full object-cover rounded"
            />
            <p className="text-xs text-center p-1 truncate">{file.name}</p>
          </div>
        ))}
      </div>
    </>
  )}
</div>

            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={Close}
                className="px-6 py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Add Vehicle
          </button>
        </div>
      </div>
    </>
  );
};

export default Addvehicle;
