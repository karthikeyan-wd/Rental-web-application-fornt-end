
import { useEffect, useState } from "react";
import {Offers} from "../../Db/Offers"

const Offercard=()=>{

const [datas,setdata]=useState(Offers)

// const [images, setImages] = useState([datas]);
// console.log(images[0][0].id)
  
 
//   useEffect(() => {x
//     const interval = setInterval(() => {
//       setImages(prevImages =>
//         prevImages[0][0].img == images[0][0].img ? images[0][0].img : images[0][1].img
       
//       );
      
//     }, 10000);
    
//     return () => clearInterval(interval);
//   }, []);


  return(
    <>
    <div className="container text-center ">
    <div className="block  font-main font-bold text-3xl tracking-[2px]  ml-8 mt-8 mb-4">
           
            OFFERS
          </div>
    <div className="flex justify-center">
   
   <div>
     


     
  { datas.map((items,id)=>(
 <div key={id}>
     <div className=" w-full h-full  rounded-2xl">
     <img loading="lazy" src={items.img} className=" rounded-3xl"/>

   </div>
   </div>
   


   ))
 }
</div>

</div>
    </div>
    </>
  )
}

export  default Offercard;
