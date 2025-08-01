import { useEffect, useState } from "react";
import {Vehicle} from "../../Db/Vehicle"
import { useNavigate } from "react-router-dom";
import Input from "../../Uitilites/Input"
import axios from "axios"
import Cookies from "js-cookie";

function VehicleType(){
    const adminId = Cookies.get('id');
  const [loader, setLoader] = useState(false);
    const [show, setshow] = useState(false);
    const [Editshow, setEditshow] = useState(false);
    const[EditformData,setEditformData]= useState({
      id:"",
      name:"",
      des:"",
    updatedBy:adminId


    })
    
    const [formData, setFormData] = useState({
    
    name:"",
    des:"",
    CreatedBy:adminId

  });
  
  const [Data,setData]=useState([])

  const[EditView, setEditView]=useState([])

  console.log(EditView ,"Editviews")

  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const [errors, setErrors] = useState({});
  
  const [isSubmitting, setIsSubmitting] = useState(false);

 const VechileData= async()=>{

  await axios.get(`${app}api/VehicleTypes`)
  .then(response =>{

    const Data = response.data

    

    
    setData(Data)

  })
 }
 useEffect(()=>{
  VechileData()
 },[show == true])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    let newErrors = {};
    
    // if (formData.id =="") {
    //   newErrors.id = "Id is required";
    // } 
    
    if (formData.name=="") {
      newErrors.name = "Name is required";
    }

    if (formData.des=="") {
      newErrors.des = "Description is required";
    }
    
    return newErrors;
  };

  // Cookies.set("name",formData.name)
  // Cookies.set("des",formData.des)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      
  try {
    const response = await axios({
      method: "POST",
      url: `${app}vehicletypes`,
      data: formData,
      headers: { "Content-Type": "application/json" },


    });
    if(response.data == "Added"){
      setTimeout(() => {

        setIsSubmitting(false);
        setFormData({
          
          name:"",
          des:"",
          CreatedBy:adminId

  
        }

      );
      setshow(!show)
      
      }, 500);
  
    }
    
    
  }

  catch (error) {
    console.log(error);
  }
    
    }

    
    };
    const getData = async(items)=>{
      console.log(items.id)
        setEditformData({
          
             id:items.id,
             name: items.name,
            des: items.description,
            updatedBy:adminId

        })
        
      }

  const handleChangeEdit = (e) => {
    setEditformData ({...EditformData,[e.target.name]:e.target.value});
  };

 
  const updateData= async()=>{
     
  try {
    const response = await axios({
      method: "POST",
      url: `${app}vehicletypesUpdate`,
      data: EditformData,
      headers: { "Content-Type": "application/json" },


    });
    console.log(response.data)
  }
  catch(err){
    console.log(err+"UPDATED ERROR")

  }
}
    
    return(
        <>
        <div onClick={() => setshow(!show)} className="mt-5 flex justify-end px-8">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm ">Add Vehicle Types</button>
        
        </div>
        {show ? (
                <div className=" absolute left-[100px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
                  <div className="bg-gray-50 rounded-xl ">
                    <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl  ">
                      <div className="flex justify-evenly">
                        <div className="">
                          <h2 className="text-3xl font-semibold mb-4 text-center">
                            Vehicle Types
                          </h2>
                        </div>
                        <div onClick={() => setshow(!show)} className="cursor-pointer ml-auto text-2xl text-end">
                          <i className="fa-solid fa-xmark"></i>
                        </div>
                      </div>

                      <div className="">
                        <div className="mb-6">
                          <form className="grid grid-row-3 gap-4" onSubmit={handleSubmit}>
                            
                            <div> 
                              <label className=" text-gray-700">
                                Name
                              </label>
                              <Input
                                type={"text"}
                                name={"name"}
                                onChange={handleChange}
                                value={formData.name}
                                className={`w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1 ${
                                errors.name ? "border-red-500":"border-gray-300" } `}
                              />
                             
                            </div>
                            {errors.name &&(
                              <p className=" mt-1 text-xs text-red-500">{errors.name} </p>
                            )}
                            
                            
                            <div>
                              <label className=" text-gray-700">Description</label>
                              <Input
                                type={"text"}
                                name={"des"}
                                onChange={handleChange}
                                value={formData.des}
                                className={`w-[608px] border border-gray-300  hover:border-red-500 rounded-lg p-2 mt-1   ${ errors.des ? "border-red-500": "border-gray-300"}`}
                                                
                                placeholder=""
                              />
                              
                            </div>
                            {errors.des &&(
                              <p className=" mt-1 text-xs text-red-500">{errors.des} </p>
                            )} 
                            
                            <div className="flex justify-center">
                              <button type="submit" disabled={isSubmitting} className="bg-blue-600 w-[100px] text-white px-4 py-2 rounded-lg ">
                                Submit
                            </button>
                            </div>
                          
                        </form>
                          
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
        <div className="overflow-x-auto mt-5 mx-4 rounded-3xl">            
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              {/* <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID             
              </th> */}
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
              </th>
              <th className="px-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description 
              </th>
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Actions
              </th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Data.map((items) => (
              <tr key={items.id} className="hover:bg-gray-50">
                {/* <td className="px-12 py-4 text-sm text-gray-700">
                  {items.id}
                </td> */}
                <td className="px-12 py-4 text-sm text-gray-700">
                  {items.name}
                </td>
                <td className="px-12 py-4 text-sm text-gray-700">
                  {items.description}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 ">
                    <div className="flex gap-8">
                        <div onClick={() => setEditshow(!Editshow)} className="">
                            <button  onClick={()=>getData(items)} className="bg-gray-200 hover:bg-green-100 hover:text-green-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                                Edit 
                            </button>
                        </div>

                        <div className="">
                            <button className="bg-gray-200 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                                Delete
                            </button>
                        </div>                        
                    </div>                  
                </td>
               

                
                
              </tr>
            ))}


            
             {Editshow && (
  <div className="absolute left-[100px] top-0 backdrop-blur-sm bg-black/10 h-full z-10 w-full flex justify-center items-center">
    <div className="bg-gray-50 rounded-xl">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Edit Vehicle Type</h2>
          <div onClick={() => setEditshow(false)} className="cursor-pointer text-2xl">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <form  className="gap-4">
        {/* onSubmit={handleEditSubmit} */}
          <div>
            <label className="text-gray-700">Name</label>
            <Input
              type={"text"}
              name={"name"}
              value={EditformData.name}
              onChange={handleChangeEdit}
              className="w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700">Description</label>
            <Input
              type={"text"}
              name={"des"}
              value={EditformData.des}
              onChange={handleChangeEdit}
              className="w-[608px] border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1"
            />
          </div>
          <div className="col-span-2 flex justify-end mt-4">
            <button onClick={()=>updateData()}
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

          </tbody>
        </table>
      </div>
        </>
    )
}

export default VehicleType