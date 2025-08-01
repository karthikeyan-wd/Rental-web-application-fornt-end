import { bookings, vehicleTypes, statusOptions } from "../../Db/Users";

 const CarBookingsTable=()=> {
  return (
    <div className="w-full  p-4 rounded-lg shadow-sm container bg-main">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">User Bookings</h1>

        
      </div>

      <div className="overflow-x-auto rounded-3xl">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Shop by Booked
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
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-700">
                  {booking.id}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  {booking.bookingDate}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  {booking.clientName}
                </td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-700">{booking.carModel}</span>
                    <span className="text-xs text-gray-500">
                      {booking.carType}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">
                  {booking.plan}
                </td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-gray-700">{booking.startDate}</span>
                      <span className="mx-2 text-gray-400">to</span>
                    </div>
                    <span className="text-gray-700">{booking.endDate}</span>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-medium">
                      {booking.payment}
                    </span>
                    <span
                      className={
                        booking.paymentStatus === "Paid"
                          ? "text-gray-700"
                          : "text-red-500"
                      }
                    >
                      {booking.paymentStatus}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm">
                  {booking.status && (
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        ${
                          booking.status === "Returned"
                            ? "bg-gray-700 text-white"
                            : " "
                        }
                        ${
                          booking.status === "Ongoing"
                            ? "bg-bl  ue-100 text-blue-600"
                            : " "
                        }
                        ${
                          booking.status === "Cancelled"
                            ? "bg-red-100 text-red-600"
                            : " "
                        }
                      `}
                    >
                      {booking.status === "Returned" && (
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
                      {booking.status === "Ongoing" && "Ongoing"}
                      {booking.status === "Cancelled" && (
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

export default CarBookingsTable