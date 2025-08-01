import { useEffect, useState } from "react";
import Arrow from "../../assets/Arrow.png";
import Owner from "../../assets/Owner/Owener 1.png";

import RentalFormViews from "./RentalFormViews";
import Calendar from "./Calendar";
import axios from "axios";
import { el } from "date-fns/locale";
import Loader from "../../@UI/loader";
const Ownerinfo = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi

  const [GetData, setGetData] = useState([]);
  const [Show, SetShow] = useState(false);
  const [GetSentData, setGetSentData] = useState();
  const [loading,setloading]=useState(false)

 
const onStatusUpdate = () => {
  setloading(true); 
  Close(); 
};

  const toadd = () => {
    SetShow(true);
  };
  const Close = () => {
    SetShow(false);
  };

  const Get = (GetData) => {
    setGetSentData(GetData);
  };

  const OwnerinfoData = async (num) => {
    if (num == 0) {
      await axios
        .get(`${app}OwnwerInfo/${num}`)
        .then((response) => {
          const Data = response.data;
          console.log(Data);

          setGetData(Data);
        });
    } else if (num == 1) {
      await axios
        .get(`${app}OwnwerInfo/${num}`)
        .then((response) => {
          const Data = response.data;
          console.log(Data);

          setGetData(Data);
        });
    } else {
      await axios
        .get(`${app}OwnwerInfo/${0}`)
        .then((response) => {
          const Data = response.data;
          console.log(Data);
          setGetData(Data);
        });
    }
  };
  useEffect(() => {
    OwnerinfoData();
  }, [loading]);
  console.log(GetData);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 1000); 
  return () => clearTimeout(timeout);
  }, [loading ]);

  return (
    <>
    {
        
        loading &&(
          <Loader/>
        )

    }
      <div className="relative  ">
        <div className=" flex items-center mt-5  tracking-wider gap-2 ml-6 font-Open ">
          <span>Home</span>
          <img src={Arrow} className="w-[10px] h-[10px] " />
          <span className="font-bold text-primary  text-[15px]">
            {" "}
            Ownerinfo
          </span>
        </div>

        <div className=" flex justify-center gap-11">
          <button
            onClick={() => OwnerinfoData(0)}
            className="py-3 px-8 rounded-lg bg-red-50 hover:bg-red-500 text-red-600 hover:text-white "
          >
            Requested
          </button>

          <button
            onClick={() => OwnerinfoData(1)}
            className="py-3 px-8 rounded-lg bg-green-50 hover:bg-green-500 text-green-600 hover:text-white "
          >
            Approved
          </button>
        </div>

        <div className="grid grid-cols-3  ">
          {GetData.map((items, id) => (
            <>
              <div
                key={id}
                className="bg-white p-6 rounded-2xl shadow-md w-[350px] relative ml-[130px] mt-10 "
              >
                <div className="w-[36px] h-[36px]  hover:text-black absolute right-2 mt-1 text-center rounded-3xl ">
                  <i className="fa-solid fa-pencil mt-2 hover:text-black   text-primary"></i>
                </div>

                
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-gray-100 p-1 w-20 h-20">
                      {/* <img
        src={items.img}
        className="rounded-full w-full h-full object-cover"
      /> */}
                    </div>
                  </div>
                  <h2 className="text-center text-gray-800 font-medium text-lg mb-4">
                    <span>{items.owner_name}</span>
                  </h2>
                  <div className="space-y-2">
                    <div className="border border-gray-200 rounded-lg p-3 text-gray-600 text-center">
                      {items.email}
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 text-gray-600 text-center">
                      {items.phoneNumber}
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 text-gray-600 text-center">
                      {items.shop_name}
                    </div>
                    <div
                  onClick={() => {
                    toadd();
                    Get(items);
                  }}
                  className="border border-gray-200 rounded-lg p-3 text-gray-600 text-center hover:cursor-pointer"
                >
                  View
                  
                  </div>
                  {/* {items.Status && (
      <div
        className={`border border-gray-200   text-white rounded-lg p-3  text-center

${items.Status === "Approved" ? "bg-green-400 text-white" : " "}

${items.Status === "Pending" ? "bg-primary " : " "}
${items.Status === "Cancelled" ? "bg-yellow-400 " : " "}
`}
      >
        {items.Status}
      </div>
    )} */}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {Show && (
        <div className="w-full overflow-y-hidden  ">
          <div className=" absolute left-[0px] top-9 backdrop-blur-sm bg-black/50 h-full w-full  ">
            <div>
              <RentalFormViews Close={Close} data={GetSentData}  onStatusUpdate={onStatusUpdate} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Ownerinfo;
