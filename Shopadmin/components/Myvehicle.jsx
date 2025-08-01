import { useEffect, useState } from "react";
import React from 'react';
import { Myvehicles } from '../../Db/Myvehicles';
import Addvehicle from "./AddVehicles";
import axios from "axios";
import Cookies from "js-cookie";
import Input from "../../Uitilites/Input";
import Loader from "../../@UI/loader";
const Myvehicle = () => {
  const [data, setData] = useState(Myvehicles);
  const [selectedStates, setSelectedStates] = useState({});
  const [view, setView] = useState(false)
  const [Show, SetShow] = useState(false);
  const [Getdata, setGetdata] = useState([])
  const [editShow, seteditShow] = useState(false)
  const [EditImage,setEditImage] = useState([])

  const [dbData,setdbData]= useState({})
  // console.log(dbData,"FROM DB")
  const [loading,setloading]=useState(false)
  const id = localStorage.getItem("ShopId")

  // const ShopId = Cookies.get("ShopID")
  // console.log(ShopId,"bb")
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

console.log(EditImage)
  const [EditformData, setEditEditformData] = useState(
    {
    VehicleID : "",
      VehicleName: "",
      Price: "",
      Regno: "",
      color: "",
      Seats: "",
      VehicleTypeId:"",
      VehicleType: "",
      BrandId:"",
      Brand: "",
      TransmissionId:"",
      Transmission: "",
      FuelId:"",
      FuelType: "",
      ModelYear:"",
      Img :"",
      Description:"",
      updatedBy: id

    }

)
console.log(EditformData)


  const [ImageData, setImageData] = useState({
    FrontImage: null,
    AdditionalImages: [null, null, null, null, null],
    AdditionalImageID:[null, null, null, null, null]
  });
  console.log(ImageData.AdditionalImageID,"---")
  const toadd = () => {
    SetShow(true);
  };

  const Close = () => {
    SetShow(false);
    // setloading(true)
  };
  const editClose = () => {
    seteditShow(false)

    setloading(true)
  }

  const toggleAvailability = (index) => {
    setSelectedStates((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  const [VechileType, setVechileType] = useState([]);

  const [brandData, SetBrand] = useState([]);
  const [transmissionData, SettransmissionData] = useState([]);
  const [fuelData, SetFuelData] = useState([]);


  const VechileData = async () => {

    await axios.get(`${app}api/VehicleTypes/`)
      .then(response => {

        const Data = response.data



        console.log(Data,"83")
        setVechileType(Data)

      })
  }

  const TransData = async () => {
    await axios
      .get(`${app}api/TransmissionTypes`)
      .then((response) => {
        const Data = response.data;
        SettransmissionData(Data)
        console.log(Data)
      });
  };
  useEffect(() => {
    FuelData();
    VechileData();
    BrandData();
    TransData();
  }, [!Close])


  const FuelData = async () => {
    await axios.get(`${app}api/FuelTypes`)
      .then((response) => {
        const Data = response.data;
        console.log(Data)
        SetFuelData(Data);
      });
  };

  const BrandData = async () => {
    await axios.get(`${app}api/BrandTypes`).then((response) => {
      const Data = response.data;

      SetBrand(Data);
    });
  };




  const vechileDataGet = async () => {
    await axios.get(`${app}AddvehicleGet/${id}`)
      .then((response) => {
        const Data = response.data
        console.log(Data,"sdf")
        if(Data){
        setGetdata(Data)
          setloading(false)

        }

      })
       
  }
 
  useEffect(() => {
    vechileDataGet(id)
  }, [id])

  const getbyid = async(items) => {
    console.log(items, "kbj")
 await axios.get(`${app}AddvehicleGetImages/${items.vehicle_id}`)
      .then((response) => {
        const Data = response.data

        if(Data){
        //  seteditShow(!editShow)
          setEditImage(Data)
          // setloading(false)

        }
        console.log(Data,"dfgeeeeeeeeeeeeeeeee")
          

      })
  await axios.get(`${app}AddVehicleGetByID/${items.vehicle_id}`)
  .then((response)=>{
    console.log(response.data,"BACKEND DATA")
    const DataFromDb = response.data[0]
    console.log(DataFromDb)

    setdbData(DataFromDb)

    // console.log(DataFromDb.vehicle_id,"hiiiiiiii")

    setEditEditformData({
      VehicleID : DataFromDb.vehicle_id,
      VehicleName: DataFromDb.vehicle_name,
      Price: DataFromDb.price,
      Regno: DataFromDb.RegNO,
      color: DataFromDb.color,
      Seats: DataFromDb.seats,
      VehicleTypeId:DataFromDb.VehicleTypeId,
      VehicleType: DataFromDb.Vehicletype,
      BrandId:DataFromDb.BrandId,
      Brand: DataFromDb.brand,
      TransmissionId:DataFromDb.TransmissionId,
      Transmission: DataFromDb.transmission,
      FuelId:DataFromDb.FuelId,
      FuelType: DataFromDb.fuel,
      ModelYear: DataFromDb.model,
      Img :DataFromDb.Img,
      Description:DataFromDb.Description,
      updatedBy: id


    })
    // setEditEditformData(DataFromDb)


  })
    
  }
 const handleChangeEdit = (e) => {
  const { name, value } = e.target;
  setEditEditformData({
    ...EditformData,
    [name]: value, 
  });
  console.log('Updated EditformData:', EditformData);
};




    const handleEditSubmit = async () => {
      const formData = new FormData();

      
        // for (const [key, value] of Object.entries(EditformData)) {
        //   formData.append(key, value);
        // }

  //       if (ImageData.FrontImage) {
  //         formData.append("FrontImage", ImageData.FrontImage);
  //       }
  //      ImageData.AdditionalImages.forEach((img, index) => {
  //   if (img) {
  //     formData.append("AdditionalImages", img);
  //   }
  // });
  // ImageData.AdditionalImageID.forEach((item,index)=>{
  //   if(item){
  //     formData.append("AdditionalImageID",item)
  //   }
  // })

  // let data =[] ;
  // for (let ans of formData.entries()) {
  //   data.push(ans[1]);
  // }


  // let datas = Object.values(dbData).toString().split(',').sort();
  // console.log(datas,"db")

  // let editData = Object.values(EditformData).toString().split(',').sort()
  // console.log(editData,"edit")
  // // let data = Object.values(Getdata[0])

  // let ans = [];
  // let j=0;
  // for(let i=0; i<datas.length;i++){

  //   if(datas[i] != editData[i]){

  //     ans[j++] =editData[i];

  //   }
  // }

  // console.log(ans)
  // const Prices = new Map();

  // let data =[] ;
  // for(let i=0;i<ans.length;i++){
  //   Prices.set(getKeyByValue(EditformData,ans[i]),ans[i])
    
  // }

  // console.log(data,"jo")

  // let keys = [];
  // for (let key of Prices)
  //   keys.push(key);

  // const obj={keys};
  // console.log(obj);




      for (const [key, value] of Object.entries(EditformData))
            if (value !== null && value !== undefined && value !== '') {
          formData.append(key, value);

        }
        let  ImageCheckDb = dbData.Img.split('-').slice(1).join('-');

  let ImageCheckEdit = ImageData.FrontImage


        if(ImageData.FrontImage != null)
  if (ImageCheckDb.toLowerCase() != ImageCheckEdit.name.toLowerCase()) {
    console.log("asdf ")
          formData.append("FrontImage", ImageData.FrontImage);
        }
       if (ImageData.AdditionalImages) {
    ImageData.AdditionalImages.forEach((img, index) => {
      if (img) { // Only append if the image is not null
        formData.append("AdditionalImages", img);
        formData.append("AdditionalImagesID", ImageData.AdditionalImageID[index]);
      }
    });
  }

        for (let pair of formData.entries()) {
          
          console.log(pair[0]  + ':', pair[1]);
        }



// console.log(Prices)
// console.log(getKeyByValue(EditformData,ans[0]),ans);

// let data =[] ;
// for (let [key,values] of Object.entries(Getdata[0])) {
//   data.push(values).toString();
// }
// console.log(data,"old")

// localStorage.setItem("heelo",data.toString())
//  const ans = localStorage.getItem("heelo")
// //  let arr=[]
// let arr = ans.split(",");
// console.log(arr,"new")

// for(let i=0;i<data.length;i++){

//   data.toString();

// if(data[i]!==arr[i]){
//     console.log(arr[i],"hello")
// }

// }


//   };


        // formData.append ("updatedBy", ShopId)
        // formData.append("VechileID",EditformData.VehicleID)
            
        const response = await axios({
        method: "PATCH",
        url: `${app}AddvehicleUpdate`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      editClose()
setloading(true)

      .then((response)=>{

        console.log(response.data == "Updated")
        if(response.data ="Updated" || response.data.RES =="Updated" || response.data.MSG =="Updated"){

        setloading(false)

        }
        else if(response.data.ERROR == "ERROR")
{
  console.log("ERROR")
}       
      })


   
  }
// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key =>
//         object[key] === value);
// }

// console.log(data,"data")

// console.log(datas,"hi")

// console.log(formData,"formdata")
    
      // console.log(formData.entries(),"kk")
//     try {
//       const formData = new FormData();

     
//       for (const [key, value] of Object.entries(EditformData)) {
//         formData.append(key, value);
//       }

//       if (ImageData.FrontImage) {
//         formData.append("FrontImage", ImageData.FrontImage);
//       }
//      ImageData.AdditionalImages.forEach((img, index) => {
//   if (img) {
//     formData.append("AdditionalImages", img);
//   }
// });
// ImageData.AdditionalImageID.forEach((item,index)=>{
//   if(item){
//     formData.append("AdditionalImageID",item)
//   }
// })
      

//       for (let pair of formData.entries()) {

//         console.log(pair[0]  + ':', pair[1]);
//       }

      // const response = await axios({
      //   method: "PATCH",
      //   url: `${app}AddvehicleUpdate`,
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      // console.log("Upload successful:", response.data);
      // if(response.data == "Updated"){
      //   seteditShow(false)

      //  setloading(true)

      // }
    // } catch (err) {
    //   console.error("Update ERROR:", err);
    // }


   useEffect(() => {
    const timeout = setTimeout(() => {
       vechileDataGet()
       
      setloading(false);
    }, 1000); 
  
    return () => clearTimeout(timeout);
  }, [loading ]);

  console.log(Getdata,"asdasd")

  return (
    <>
    {
        
        loading &&(
          <Loader/>
        )

    }
      <div className="bg-[#F5F5F5] w-full h-full ">
        <div className="flex justify-between items-start pt-3 ml-8 mr-8">
          <span className="font-semibold text-lg md:text-2xl tracking-[1px]">My Vehicles</span>
          <button
            onClick={() =>       toadd()
}
            className="bg-[#FF0000] text-white px-4 py-2 rounded-full text-sm hover:bg-[#b23737] transition-colors duration-300"
          >
            Add Vehicle
          </button>
        </div>

        {Show && (
          <div className="fixed left-0 top-0 backdrop-blur-sm bg-black/50 h-screen z-10 w-full h-full flex justify-center items-center">
            <Addvehicle Close={Close} />
          </div>
        )}

        <div className="flex h-[35px] mt-3 ml-8">
          <div className="bg-white h-[35px] px-2 rounded-l-xl">
            <i className="fa-solid fa-magnifying-glass bg-white mt-2.5"></i>
          </div>
          <div>
            <input
              type="text"
              className="w-[245px] h-[35px] rounded-r-xl text-[12px] outline-none"
              placeholder="Search by Car Name"
            />
          </div>
          <div className="ml-3 flex items-center gap-3 bg-white rounded-l-xl w-[110px] rounded-r-xl justify-start">
            <i className="fa-solid fa-filter ml-3"></i>
            <span className="text-sm text-center">Types</span>
            <i className="fa-solid fa-arrow-down text-[10px] text-end"></i>
          </div>
          <div className="ml-3 flex items-center gap-3 bg-white rounded-l-xl w-[110px] rounded-r-xl justify-start">
            <i className="fa-solid fa-filter ml-3"></i>
            <span className="text-sm text-center">Status</span>
            <i className="fa-solid fa-arrow-down text-[10px] text-end"></i>
          </div>
        </div>

        <div className="mt-6 px-4 md:px-8">
          {Getdata.map((items, i) => (
            <div key={i} className="bg-white mb-4 rounded-2xl shadow-[0px_4px_11px_8px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
               <div className="w-full md:w-[200px]"> 
                <img src={`${app}uploads/${items.Img}`} 
                className="w-full h-[180px] object-cover rounded-xl" /> </div>

                <div className="flex-grow">
                  <div className="flex justify-start mb-3">
                    <div className="border border-[#FF4545] bg-[#FF4545] w-[120px]"></div>
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">{items.brand}</p>
                      <h3 className="text-gray-800 font-bold text-xl">{items.vehicle_name}</h3>
                      <div className="flex items-center mt-2">
                        {/* <span className={`inline-block text-xs px-2 py-1 rounded mr-2 ${
                          items.Status === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {items.Status}
                        </span> */}
                        <span className="text-sm text-gray-600 text-nowrap">8 Unit</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-bold text-xl">Color</span>
                      <p className="text-center">{items.color}</p>
                    </div>
                    <div>

                      <span className="text-gray-800 font-bold text-xl">Registration N0.</span>
                      <p>{items.RegNO}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500">Transmission</p>
                        <p className="text-gray-800 font-medium">{items.transmission}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500">Capacity</p>
                        <p className="text-gray-800 font-medium">{items.seats}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <hr className="h-px my-4 bg-[#F5EEDC] border-2 border-[#F5EEDC]" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-baseline gap-1">
                        <i className="fa-solid fa-indian-rupee-sign text-lg text-gray-700"></i>
                        <span className="text-xl font-bold text-gray-800">{items.price}</span>
                        <span className="text-sm text-gray-500">/days</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">
                            {selectedStates[i] ? "Available" : "Unavailable"}
                          </span>
                          <div
                            onClick={() => toggleAvailability(i)}
                            className={`w-12 h-6 rounded-full flex items-center cursor-pointer transition-all duration-300 ${selectedStates[i] ? "bg-green-500" : "bg-gray-400"
                              }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ${selectedStates[i] ? "translate-x-7" : "translate-x-1"
                                }`}
                            ></div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {/* setloading(true) */}
                          <button onClick={() => { seteditShow(!editShow) ;getbyid(items)  }} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                            Edit
                          </button>
                          <button className="bg-gray-200 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {
          editShow && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">

              <div className="bg-white w-[1000px] sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-xl rounded-lg p-8 max-h-[90vh] overflow-y-auto">

                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Add Vehicle</h2>
                  <button onClick={editClose} className="p-2 rounded-full hover:bg-gray-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 mb-2 font-medium">Your Name</label>
                      <Input type={"text"} name={"VehicleName"} value={EditformData.VehicleName} onChange={handleChangeEdit} placeholder="Enter your name" className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                      <p className="text-primary">{Error.VehicleName}</p>
                    </div>


                    <div>
                      <label className="block text-gray-600 mb-2 font-medium">Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">₹</span>
                        <Input type={"number"} name={"Price"} value={EditformData.Price} onChange={handleChangeEdit} placeholder="Price" className="w-full border border-gray-300 p-3 pl-8 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        <p className="text-primary">{Error.Price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-gray-600 mb-2 font-medium">Registraion No.</label>
                      <Input type={"text"} name={"Regno"} value={EditformData.Regno} onChange={handleChangeEdit} placeholder="Registraion No." className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                      <p className="text-primary">{Error.Regno}</p>

                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2 font-medium">color</label>
                      <Input type={"text"} name={"color"} value={EditformData.color} onChange={handleChangeEdit} placeholder="Color" className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                      <p className="text-primary">{Error.color}</p>

                    </div>
                  </div>


                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-gray-600 mb-2 font-medium">Seats</label>
                      <Input type={"number"} name={"Seats"} value={EditformData.Seats} onChange={handleChangeEdit} placeholder="Number of Seats" className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                      <p className="text-primary">{Error.Seats}</p>

                    </div>
<div>
  <label className="block text-gray-600 mb-2 font-medium">Vehicle Type</label>
  <select
    name="VehicleTypeId"  
    value={EditformData.VehicleTypeId}  
    onChange={handleChangeEdit}
    className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  >
    {VechileType.map((item) => (
      <option key={item.id} value={item.id}> 
        {item.name}  
      </option>
    ))}
  </select>
  <p className="text-red-500 text-sm mt-1">{Error.VehicleType}</p>
</div>


<div>
  <label className="block text-gray-600 mb-2 font-medium">Brand</label>
  <select
    name="BrandId"  
    value={EditformData.BrandId}  
    onChange={handleChangeEdit}
    className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  >
    {brandData.map((item) => (
      <option key={item.id} value={item.id}>  
        {item.name}  
      </option>
    ))}
  </select>
  <p className="text-red-500 text-sm mt-1">{Error.Brand}</p>
</div>


<div>
  <label className="block text-gray-600 mb-2 font-medium">Transmission</label>
  <select
    name="TransmissionId" 
    value={EditformData.TransmissionId}  
    onChange={handleChangeEdit}
    className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  >
    {transmissionData.map((item) => (
      <option key={item.id} value={item.id}> 
        {item.name} 
      </option>
    ))}
  </select>
  <p className="text-red-500 text-sm mt-1">{Error.Transmission}</p>
</div>


<div>
  <label className="block text-gray-600 mb-2 font-medium">Fuel Type</label>
  <select
    name="FuelId" 
    value={EditformData.FuelId}  
    onChange={handleChangeEdit}
    className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  >
    {fuelData.map((item) => (
      <option key={item.id} value={item.id}>  
        {item.name}  
      </option>
    ))}
  </select>
  <p className="text-red-500 text-sm mt-1">{Error.FuelType}</p>
</div>



                    <div>
                      <label className="block text-gray-600 mb-2 font-medium">Model Year</label>

                      <Input type={"number"} name={"ModelYear"} value={EditformData.ModelYear} onChange={handleChangeEdit} placeholder="YYYY" min="1900" max="2099" className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                      <p className="text-primary">{Error.ModelYear}</p>

                    </div>
                    <div>
                      <label className="block text-gray-600 mb-2 font-medium">
                        Description
                      </label>

                      <textarea
                        name="Description"
                        value={EditformData.Description}
                        onChange={handleChangeEdit}
                        placeholder="Description"
                        className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />

                      <p className="text-primary">{Error.Description}</p>
                    </div>
                  </div>

             
                  <div className="">
                    <label className="block text-gray-600 mb-2 font-medium">Vehicle Front Image</label>
                    <div className="grid grid-cols-2  items-center">
                      <label htmlFor="front-image" className="w-100 p-6 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center bg-white shadow-sm hover:bg-gray-50 cursor-pointer transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-500 mb-4" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <span className="font-medium text-gray-600">Click to upload front image</span>
                        <input
                          id="front-image"
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            setImageData((prev) => ({
                              ...prev,
                              FrontImage: e.target.files[0],
                            }))
                          }
                          className="hidden"
                        />
                      </label>
 {ImageData.FrontImage ? (
            <img
              src={URL.createObjectURL(ImageData.FrontImage)}
              className="w-full h-32 object-contain mt-9"
            />
          ):
  
                     (
                        <div className="">
                       <img src={`${app}uploads/${EditformData.Img}` } alt="" />

                        </div>
                      )} 


                    </div>

                  </div>


        
   <div>
  <label className="block text-gray-600 mb-2 font-medium mt-4">
    Additional Vehicle Images (Max 5)
  </label>
  <div className="grid grid-cols-5 gap-4">
    {EditImage.map((items, id) => (
      <div key={id} className="relative">
        <input
          id={`additional-image-${id}`}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const files = [...ImageData.AdditionalImages];
            const AdditionalImageID =[...ImageData.AdditionalImageID]

            
            
              files[id] = e.target.files[0];
              AdditionalImageID[id] =items.id
              setImageData((prev) => ({
                ...prev,
                AdditionalImages: files,
                AdditionalImageID:AdditionalImageID
              }));
           
          }}
          className="hidden"
        />
        <label
          htmlFor={`additional-image-${id}`}
          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center bg-white shadow-sm hover:bg-gray-50 cursor-pointer transition"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500 mb-2"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <span className="text-sm text-gray-500">
            Upload Image Id No: {items.id + 1}
          </span>
        </label>

        {ImageData.AdditionalImages[id] ? (
            <img
              src={URL.createObjectURL(ImageData.AdditionalImages[id])}
              alt={`Preview ${id}`}
              className="w-full h-32 object-contain mt-9"
            />
          ):(
            <div className="mt-9">
            <img
    src={`${app}uploads/${EditImage[id].image_name}`}
    alt={`Existing ${id + 1}`}
    className="w-full h-32 object-contain"
  />
  </div> 

          )}
      </div>
    ))}
  </div>
   </div>

                  





                  <div className="flex  gap-4 mt-8 justify-center">
                    
<span
                  type="submit"
                  onClick={handleEditSubmit}

                  className="bg-indigo-600 text-white  text-lg px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
                >
                  Update
                </span>
                  </div>
                </form>
                
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Myvehicle;