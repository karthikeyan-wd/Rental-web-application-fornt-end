import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Uitilites/Input";
import axios from "axios";
import Cookies from "js-cookie";
import Loader from '../../@UI/loader';

function Transmission() {
  const id = Cookies.get("id");
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;
      const adminId = Cookies.get('id');
   const [deleteState, setDeleteState] = useState(false);
  const [loader, setLoader] = useState(false);

  const [filData, setfilData] = useState([]);
  const [show, setshow] = useState(false);
  const [edshow, setedshow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    CreatedBy: id,
  });

  const [EditformData, setEditformData] = useState({
    id: "",
    name: "",
    updateBy: id,
  });

  const [Data, setData] = useState([]);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const TransData = async () => {
    await axios.get(`${app}api/TransmissionTypes`).then((response) => {
      const Data = response.data;
      console.log(Data);

      setData(Data);
    });
  };
  useEffect(() => {
    TransData();
  }, [show]);

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

    if (formData.name == "") {
      newErrors.name = "Name is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      console.log(formData);
      try {
        const response = await axios({
          method: "POST",
          url: `${app}transmittypes`,
          data: formData,
          headers: { "Content-Type": "application/json" },
        });
        console.log(response);

        if (response.data == "Transmission Added") {
          setTimeout(() => {
            setIsSubmitting(false);
            setFormData({
              name: "",
              CreatedBy: id,
            });
            setshow(!show);
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          name: "",
          CreatedBy: id,
        });
      }, 1000);
    }
  };
  const getdata = (items) => {
    setEditformData({
      id: items.id,
      name: items.name,
      updateBy: id,
    });
  };

  const handleChangeEdit = (e) => {
    setEditformData({ ...EditformData, [e.target.name]: e.target.value });
  };

  const updateData = async () => {
    console.log(EditformData);

    try {
      const response = await axios({
        method: "POST",
        url: `${app}TransmissionUpdate`,
        data: EditformData,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err + "UPDAte ERROR");
    }
  };

  const deletFunction = (id) => {
    if (id) {
      setfilData(Data.filter((item) => item.id == id));
      setDeleteState(true);
    }
  };
  const deleteItem = async (id) => {
    setLoader(true);
    setDeleteState(false)

    const response = await axios.patch(`${app}transmissionItems/remove/${id}/${adminId}`);
    console.log(response,"ssss")
    if (response.data.message == 'Deleted') {
        setLoader(false);
        await TransData();
    }
  };
   
  useEffect(() => {
    const timeout = setTimeout(() => {

      setLoader(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loader]);
  return (
    <>
     {
      loader && (<Loader/>)
    }
      {deleteState && (
        <div className="absolute left-[100px] top-0 backdrop-blur-sm bg-black/10 h-full z-10 w-full flex justify-center items-center">
          <div className="relative bg-white rounded-2xl shadow-lg p-6 w-[400px] h-auto">
            <div  className="flex flex-col items-center mt-4">
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
              {filData.map((item,idx) => (
                <>
                  <h2 className="text-lg font-semibold mb-2">Delete</h2>
                  <p className="text-gray-600 mb-3 text-center">
                    Are you sure you want to delete?
                  </p>
                  <p className="text-gray-600 mb-3 text-center">{item.name} </p>
                  <p className="text-gray-600 mb-3 text-center">
                    {item.description}
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
      <div className="mt-5 flex justify-end px-8">
        <button
          onClick={() => setshow(!show)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm "
        >
          Add Transmission Type
        </button>
      </div>
      {show ? (
        <div className=" absolute left-[100px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
          <div className="bg-gray-50 rounded-xl ">
            <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl  ">
              <div className="flex justify-evenly">
                <div className="">
                  <h2 className="text-3xl font-semibold mb-4 text-center">
                    Transmission Type
                  </h2>
                </div>
                <div
                  onClick={() => setshow(!show)}
                  className="cursor-pointer ml-auto text-2xl text-end"
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>

              <div className="">
                <div className="mb-6">
                  <form onSubmit={handleSubmit} className="">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className=" text-gray-700">Name</label>
                        <Input
                          type={"text"}
                          name={"name"}
                          onChange={handleChange}
                          value={formData.name}
                          className={`w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                        />
                        {errors.name && (
                          <p className=" mt-1 text-xs text-red-500">
                            {errors.name}{" "}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-8  flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-8 py-2 rounded-lg "
                      >
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
              <th className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transmission Name
              </th>

              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Data.map((items) => (
              <tr key={items.id} className="hover:bg-gray-50">
                <td className="px-[130px] py-4 text-sm text-gray-700">
                  {items.name}
                </td>

                <td className="px-4 py-4 text-sm text-gray-700 ">
                  <div className="flex gap-8">
                    <div onClick={() => getdata(items)} className="">
                      <button
                        onClick={() => setedshow(!edshow)}
                        className="bg-gray-200 hover:bg-green-100 hover:text-green-600 px-3 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="">
                      <button onClick={() => deletFunction(items.id)}className="bg-gray-200 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-md text-sm transition-colors duration-300">
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {edshow ? (
          <div className=" absolute left-[100px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
            <div className="bg-gray-50 rounded-xl ">
              <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl  ">
                <div className="flex justify-evenly">
                  <div className="">
                    <h2 className="text-3xl font-semibold mb-4 text-center">
                      Transmission Type
                    </h2>
                  </div>
                  <div
                    onClick={() => setedshow(!edshow)}
                    className="cursor-pointer ml-auto text-2xl text-end"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>

                <div className="">
                  <div className="mb-6">
                    <form className="">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className=" text-gray-700">Name</label>
                          <Input
                            type={"text"}
                            name={"name"}
                            value={EditformData.name}
                            onChange={handleChangeEdit}
                            className={`w-full border border-gray-300 hover:border-red-500 rounded-lg p-2 mt-1 ${errors.name ? "border-red-500" : "border-gray-300"} `}
                          />
                          {/* {errors.name && (
                            <p className=" mt-1 text-xs text-red-500">
                              {errors.name}{" "}
                            </p>
                          )} */}
                        </div>
                      </div>

                      <div className="mt-8  flex justify-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          onClick={() => updateData()}
                          className="bg-blue-600 text-white px-8 py-2 rounded-lg "
                        >
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
      </div>
    </>
  );
}

export default Transmission;
