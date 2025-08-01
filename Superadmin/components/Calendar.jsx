import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Calendar = () => {

  // dry 

  
  const[presentdate,setpresentdate]=useState(new Date());
  const[Months,setMonths]=useState([]);
  const[Day,setDay]=useState(0);
  const[selectdate,setselectdate]=useState(null);

  useEffect(()=>{
    const year=presentdate.getFullYear();
    const month=presentdate.getMonth();
    const date=new Date(year,month,1);
    const days=[];
    while(date.getMonth() === month){
      days.push(new Date(date));
      date.setDate(date.getDate()+1);
    }
    setMonths(days);
    setDay(new Date(year,month,1).getDay());
  },[presentdate]);

 

  const daysNames=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];

  const prevMonth=()=>{
    setpresentdate(new Date(presentdate.setMonth(presentdate.getMonth()-1)))
  }

  const NextMonth=()=>{
    setpresentdate(new Date(presentdate.setMonth(presentdate.getMonth()+1)))
  }

  const handleDateClick=(date)=>{ setselectdate(date);}

  

  return (
    <>
    <div className='calender mt-3  rounded-[30px] p-5  bg-white text-sky-800'>
        
      <div className='flex justify-center  gap-10 mb-5 '>
        <button className='text-1xl  text-sky-800 font-semibold rounded-full hover:scale-125' onClick={prevMonth}> <i className="fa-solid fa-arrow-left"></i></button>
        <span className='font-semibold tracking-widest text-2xl w-[180px] flex justify-center'>{presentdate.toLocaleString('default',{month:'long'})}
          {presentdate.getFullYear()}
        </span>
        <button className='text-1xl   text-sky-800 font-semibold rounded-full hover:scale-125' onClick={NextMonth}> <i className="fa-solid fa-arrow-right"></i> </button>
        </div>

        

        <div className=' grid grid-cols-7 justify-between h-[200px]'>
          {Array.from({length:Day}).map((_,index)=>(
            <div key={index} ></div>
          ))}
          {Months.map((day)=>(
            <div key={day} className={`day flex justify-center items-center hover:bg-white hover:text-primary rounded h-8 w-8 text-center font-semibold ${day.getDate()===new Date().getDate()&& day.getMonth()===new Date().getMonth()? 'today':''}
            ${selectdate && day.toLocaleString() === selectdate.toLocaleString()?'selected':''}`} onClick={()=>handleDateClick(day)}>{day.getDate()
            
            
            
            }</div>
          ))}
        </div>
     
  </div>
  </>
  )
}



export default Calendar