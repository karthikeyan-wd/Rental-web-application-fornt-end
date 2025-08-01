import { useState } from "react";
import { bookings, vehicleTypes, statusOptions } from "../../Db/Users";
import Add_Booking from "./Add_Booking";

 const BookingsTable=()=> {
  const [Booking]=useState(bookings)

  const [Show,SetShow]=useState(false)
  
  const toadd=()=>{
    SetShow(true)

  }

  
  const Close = () => {
    SetShow(false); 
  };

  return (
    <div className="w-full  p-4 rounded-lg shadow-sm container bg-main">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Bookings</h1>


        <button onClick={()=>toadd()} className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
          Add Booking
        </button>
      </div>
      {
        Show &&(
          <div className=" absolute left-[0px] top-0 backdrop-blur-sm bg-black/50 h-full z-10 w-full flex justify-center items-center ">
              <Add_Booking Close={Close} />
          </div>
        )
      }

      <div className="overflow-x-auto rounded-3xl">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vehicle Brand
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>

              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Booking.map((items) => (
              <tr key={items.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-700">
                  {items.id}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  {items.bookingDate}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  {items.clientName}
                </td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-700">{items.carModel}</span>
                    <span className="text-xs text-gray-500">
                      {items.carType}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  {items.plan}
                </td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-gray-700">{items.startDate}</span>
                      <span className="mx-2 text-gray-400">to</span>
                    </div>
                    <span className="text-gray-700">{items.endDate}</span>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-medium">
                      {items.payment}
                    </span>
                    <span
                      className={
                        items.paymentStatus === "Paid"
                          ? "text-gray-700"
                          : "text-red-500"
                      }
                    >
                      {items.paymentStatus}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm">
                  {items.status && (
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        ${
                          items.status === "Returned"
                            ? "bg-gray-700 text-white"
                            : " "
                        }
                        ${
                          items.status === "Ongoing"
                            ? "bg-bl  ue-100 text-blue-600"
                            : " "
                        }
                        ${
                          items.status === "Cancelled"
                            ? "bg-red-100 text-red-600"
                            : " "
                        }
                      `}
                    >
                      {items.status === "Returned" && (
                        <>
                          <svg
                            className="h-3 w-3 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Returned
                        </>
                      )}
                      {items.status === "Ongoing" && "Ongoing"}
                      {items.status === "Cancelled" && (
                        <>
                          <svg
                            className="h-3 w-3 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Cancelled
                        </>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingsTable