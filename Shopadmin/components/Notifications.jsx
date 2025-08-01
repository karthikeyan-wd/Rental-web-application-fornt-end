import { useState } from 'react';
import { Bell, Settings, Search, ArrowUp, ArrowDown, Clock, CreditCard,FilePenLine, Package} from 'lucide-react';

const Notifications = () => {
  const [Review, setReview] = useState('all');
  
  const arr = ['all', 'unread', 'booking', 'payment', 'inventory'];
  
  const notifications = [
    {
      id: 1,
      type: 'booking',
      message: 'New booking request from Thazmiselvam',
      priority: 'high',
      time: '5 minutes ago',
      icon: <FilePenLine className="text-blue-500" />
    },
    {
      id: 2,
      type: 'payment',
      message: 'Payment received for order Rent-App004',
      priority: 'medium',
      time: '30 minutes ago',
      icon: <CreditCard className="text-green-500" />
    },
    {
      id: 3,
      type: 'inventory',
      message: 'Low stock alert for Hyndai',
      priority: 'high',
      time: '2 hours ago',
      icon: <Package className="text-orange-500" />
    },{
    id: 4,
      type: 'booking',
      message: 'New booking request from Vilora',
      priority: 'high',
      time: '5 minutes ago',
      icon: <FilePenLine className="text-blue-500" />
    },{
    id: 5,
      type: 'payment',
      message: 'Payment received for order Rent-App004',
      priority: 'medium',
      time: '30 minutes ago',
      icon: <CreditCard className="text-green-500" />
    }
  ];


  
  console.log((notifications.filter((items)=>(
   items.type=="booking"
  
  ))))


//   console.log(notifications.map((items) => items.type));


//    console.log(notifications.filter((noti)=> noti.type =="bookings").map((noti)=>{

//     {noti.message}
//    }

   
//    ))
 

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
              <p className="text-sm text-gray-500 mt-1">
                5 unread notifications
              </p>
            </div>
            <div className="flex items-center  gap-3">
              <button
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
              >
                Mark All as Read
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
         
        <div className="flex flex-wrap gap-2 p-4 border-b  border-gray-200">
          {arr.map((items, id) => (
            <button
              key={id}
              onClick={() => setReview(items)}
              className={`px-3 py-1.5 text-sm rounded-md capitalize ${
                Review === items ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
              }`}
            >
              {items}
            </button>
          ))}
          
          <div className="relative w-full mt-3  sm:w-64 sm:mt-0">
            <input
              type="text"
              placeholder="Search notifications..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
          
        <div className="hidden sm:grid grid-cols-12 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="col-span-1"></div>
          <div className="col-span-2 flex items-center cursor-pointer">
            Type
            <ArrowUp size={14} className="ml-1" />
          </div>
          <div className="col-span-4">
            Message
          </div>
          <div className="col-span-2 flex items-center cursor-pointer">
            Priority
            <ArrowDown size={14} className="ml-1" />
          </div>
          <div className="col-span-2 flex items-center cursor-pointer">
            Time
            <ArrowUp size={14} className="ml-1" />
          </div>
          <div className="col-span-1 text-right">
            Action
          </div>
        </div>
        
        {Review === 'all' && (
          <div className="divide-y divide-gray-200">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4"
              >
                <div className="col-span-1 flex items-center justify-center">
                  {notification.icon}
                </div>
                <div className="col-span-2 flex items-center capitalize">
                  <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {notification.type}
                  </span>
                </div>
                <div className="col-span-4 flex items-center">
                  {notification.message}
                </div>
                <div className="col-span-2 flex items-center">
                  <span className="inline-flex px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                    {notification.priority}
                  </span>
                </div>
                <div className="col-span-2 flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-1" />
                  {notification.time}
                </div>
                <div className="col-span-1 flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Mark read
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {Review === 'booking' && (
          <div className="divide-y divide-gray-200">
            {notifications.filter(notification => notification.type === 'booking')
              .map(notification => (
                <div 
                  key={notification.id} 
                  className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4"
                >
                  <div className="col-span-1 flex items-center justify-center">
                    {notification.icon}
                  </div>
                  <div className="col-span-2 flex items-center capitalize">
                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {notification.type}
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center">
                    {notification.message}
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      {notification.priority}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {notification.time}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Mark read
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
        
        {Review === 'inventory' && (
          <div className="divide-y divide-gray-200">
            {notifications.filter(notification => notification.type === 'inventory')
              .map(notification => (
                <div 
                  key={notification.id} 
                  className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4"
                >
                  <div className="col-span-1 flex items-center justify-center">
                    {notification.icon}
                  </div>
                  <div className="col-span-2 flex items-center capitalize">
                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {notification.type}
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center">
                    {notification.message}
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      {notification.priority}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {notification.time}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Mark read
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

{Review === 'payment' && (
          <div className="divide-y divide-gray-200">
            {notifications.filter(notification => notification.type === 'payment')
              .map(notification => (
                <div 
                  key={notification.id} 
                  className="grid grid-cols-1 sm:grid-cols-12 px-6 py-4"
                >
                  <div className="col-span-1 flex items-center justify-center">
                    {notification.icon}
                  </div>
                  <div className="col-span-2 flex items-center capitalize">
                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {notification.type}
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center">
                    {notification.message}
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                      {notification.priority}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {notification.time}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Mark read
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Notifications;