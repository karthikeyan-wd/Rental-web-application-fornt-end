import { useState } from "react";
//import {BaseAdmin} from "../../Db/BaseAdmin"
import Input from "../../Uitilites/Input";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import Loader from "../../@UI/loader";
import Cookies from 'js-cookie';

function AdminRole() {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;
 const adminId =Cookies.get("id")
  const [show, setshow] = useState(false);
  const [Editshow, setEditshow] = useState(false);
  const [getdata, setgetdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [filData, setfilData] = useState([]);
  const [editFormData, seteditFormData] = useState({
    id: "",
    name: "",
    email: "",
    adminroleName: "",
  });
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    adminroleName: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // if (formData.id == "") {
    //   newErrors.id = "Id is required";
    // }

    if (!formData.name.trim()) {
      newErrors.name = "Username is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Username must be at least 3 characters long";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Username must not contain numbers";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.adminroleName.trim()) {
      newErrors.adminroleName = "Role is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setloading(true);

      //console.log(formData)

      try {
        const response = await axios({
          method: "POST",
          url: `${app}baserole`,
          data: formData,
          headers: { "Content-Type": "application/json" },
        });

        console.log(response.data);
        if (response.data.message == "Added") {
          setshow(!show);

          setFormData({
            name: "",
            email: "",
            adminroleName: "",
          });
          // navigate("/admin")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const get = async (items) => {
    console.log(items.id);
    seteditFormData({
      id: items.id,
      name: items.name,
      email: items.email,
      adminRoleId: items.adminRoleId,
      adminroleName: items.adminroleName,
    });
  };

  const handleChangeEdit = (e) => {
    seteditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };
  const updateData = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `${app}UpdateData`,
        data: editFormData,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      if (response.data == "Updated") {
        alert("Updated");

        seteditFormData({
          name: "",
          email: "",
          adminroleName: "",
        });
      }
    } catch (error) {
      console.log(error + "Update Error");
    }
  };
  const Adminget = async () => {
    await axios.get(`${app}api/BaseRole`).then((response) => {
      setloading(false);
      const Data = response.data;
      console.log(response);
      setgetdata(Data);
    });
  };
  useEffect(() => {
    Adminget();
  }, [show]);

  const deletFunction = (id) => {
    if (id) {
      setfilData(getdata.filter((item) => item.id == id));
      setDeleteState(true);
    }
  };
  const deleteItem = async (id) => {
    setloading(true);
    setDeleteState(false);

    const response = await axios.patch(
      `${app}admin/remove/${id}/${adminId}`,
    );
    if (response.data.message == 'Deleted') {
      setloading(false);
      await Adminget();
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 3000);
  return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {deleteState && (
        <div className="absolute left-[100px] top-0 backdrop-blur-sm bg-black/10 h-full z-10 w-full flex justify-center items-center">
          <div className="relative bg-white rounded-2xl shadow-lg p-6 w-[400px] h-auto">
            <div className="flex flex-col items-center mt-4">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide text-red-500 lucide-trash2-icon lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </div>
              {filData.map((item, idx) => (
                <>
                  <h2 className="text-lg font-semibold mb-2">Delete</h2>
                  <p className="text-gray-600 mb-3 text-center">
                    Are you sure you want to delete?
                  </p>
                  <p className="text-gray-600 mb-3 text-center">
                    <span className="text-black font-bold">Name: </span>{' '}
                    {item.name}{' '}
                  </p>
                  <p className="text-gray-600 mb-3 text-center">
                    <span className="text-black font-bold">Email: </span>
                    {item.email}
                  </p>
                  <p className="text-gray-600 mb-3 text-center">
                    <span className="text-black font-bold">Role: </span>
                    {item.adminroleName}
                  </p>

                  <div key={idx} className="flex gap-4">
                    <button
                      onClick={() => setDeleteState(false)}
                      className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Confirm
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end">
        <button
          onClick={() => setshow(!show)}
          className="border-2 bg-red-500  rounded-xl p-1 mr-4 mt-2 text-sm px-4 font-bold text-white"
        >
          Add
        </button>
      </div>
      {show ? (
        <div className=" absolute left-[0px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
          <div className="rounded-xl ">
            <div class="flex justify-center items-center min-h-screen">
              {/* <div onClick={() => setshow(!show)} className="ml-80 text-2xl">
                        <IoMdClose />
                        </div> */}
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-96 "
              >
                <div onClick={() => setshow(!show)} className="ml-80 text-2xl">
                  <IoMdClose />
                </div>
                {/* <div className="">
                      <label
                          className="block mb-2 mt-4">
                            ID</label>
                        <Input 
                        type={"text"}
                        name={"id"}
                        onChange={handleChange}
                        value={formData.id}
                        className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.id ? "border-red-500" : "border-gray-300"} `}             
                        placeholder={"Enter your ID" }/>
                      </div>
                      {
                        errors.id&&(
                          <p className="mt-1 text-xs text-red-500">{errors.id}</p>
                        )
                      } */}

                <label className="block mb-2 mt-2">Name</label>
                <Input
                  type={"text"}
                  name={"name"}
                  onChange={handleChange}
                  value={formData.name}
                  className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}

                <label className="block mb-2 mt-2">Email</label>
                <Input
                  type={"text"}
                  name={"email"}
                  onChange={handleChange}
                  value={formData.email}
                  className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.email ? "border-red-500" : "border-gray-300"} `}
                  placeholder="Enter your email"
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}

                <label className="block mb-2 mt-2">Role</label>
                <Input
                  type={"text"}
                  name={"adminroleName"}
                  onChange={handleChange}
                  value={formData.adminroleName}
                  className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.adminroleName ? "border-red-500" : "border-gray-300"} `}
                  placeholder="Enter your Role"
                />
                {errors.adminroleName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.adminroleName}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white  mt-4 p-2 rounded-md hover:bg-red-600"
                >
                  Submit
                </button>
              </form>
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
                Email
              </th>
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {getdata.map((items) => (
              <tr key={items.id} className="hover:bg-gray-50">
                {/* <td className="px-12 py-4 text-sm text-gray-700">
                  {items.id}
                </td> */}
                <td className="px-12 py-4 text-sm text-gray-700">
                  {items.name}
                </td>
                <td className="px-12 py-4  text-sm text-gray-700">
                  {items.email}
                </td>
                <td className="px-12 py-4  text-sm text-gray-700">
                  {items.adminroleName}
                </td>

                <td className="px-4 py-4 text-sm text-gray-700 ">
                  <div className="flex gap-8">
                    <div onClick={() => setEditshow(!Editshow)} className="">
                      <button
                        onClick={() => get(items)}
                        className="bg-gray-200 hover:bg-green-100 hover:text-green-600 px-3 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        Edit
                      </button>
                    </div>

                    {Editshow && (
                      <div className=" absolute left-[0px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
                        <div className="rounded-xl ">
                          <div class="flex justify-center items-center min-h-screen">
                            {/* <div onClick={() => setEditshow(false)} className="ml-80 text-2xl">
                        <IoMdClose />
                        </div> */}
                            <form className="bg-white p-6 rounded-lg shadow-md w-96 ">
                              <div
                                onClick={() => setEditshow(false)}
                                className="ml-80 text-2xl"
                              >
                                <IoMdClose />
                              </div>
                              {/* <div className="">
                      <label
                          className="block mb-2 mt-4">
                            ID</label>
                        <Input 
                        type={"text"}
                        name={"id"}
                        onChange={handleChange}
                        value={formData.id}
                        className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.id ? "border-red-500" : "border-gray-300"} `}             
                        placeholder={"Enter your ID" }/>
                      </div>
                      {
                        errors.id&&(
                          <p className="mt-1 text-xs text-red-500">{errors.id}</p>
                        )
                      } */}

                              <label className="block mb-2 mt-2">Name</label>
                              <Input
                                type={"text"}
                                name={"name"}
                                onChange={handleChangeEdit}
                                value={editFormData.name}
                                className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                                placeholder="Enter your name"
                              />
                              {errors.name && (
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.name}
                                </p>
                              )}

                              <label className="block mb-2 mt-2">Email</label>
                              <Input
                                type={"text"}
                                name={"email"}
                                onChange={handleChangeEdit}
                                value={editFormData.email}
                                className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.email ? "border-red-500" : "border-gray-300"} `}
                                placeholder="Enter your email"
                              />

                              {errors.email && (
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.email}
                                </p>
                              )}

                              <label className="block mb-2 mt-2">Role</label>
                              <Input
                                type={"text"}
                                name={"adminroleName"}
                                onChange={handleChangeEdit}
                                value={editFormData.adminroleName}
                                className={`w-full border border-gray-300 hover:border-red-500 rounded-lg  p-2 mt-1 ${errors.adminroleName ? "border-red-500" : "border-gray-300"} `}
                                placeholder="Enter your Role"
                              />
                              {errors.adminroleName && (
                                <p className="mt-1 text-xs text-red-500">
                                  {errors.adminroleName}
                                </p>
                              )}

                              <button
                                onClick={() => updateData()}
                                type="submit"
                                className="w-full bg-red-500 text-white  mt-4 p-2 rounded-md hover:bg-red-600"
                              >
                                Update
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="">
                      <button onClick={() => deletFunction(items.id)} className="bg-gray-200 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default AdminRole;
