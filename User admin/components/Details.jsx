
import { useState } from "react";
import {Detailed} from "../Db/Detailed";

function Details(){
    const [Inputdata, setInputdata]=useState(Detailed);
    return(
        <>
        <div className="m-3 border rounded-lg border-gray-300 w-[632px] grid grid-cols-4">
        {Detailed.map((items, id) => (
            
                
                <div key={id} className="m-3  bg-red-400 rounded-lg w-[135px] h-[40px] ">
                    
                    <div className=" grid grid-cols-3 ">
                        <img className="mt-2 mx-3 w-[20px]" src={items.img} alt="" />
                        <span className="mt-2 font-bold">{items.span1}</span>
                        <span className=" mx-[-20px] mt-2 font-bold">{items.span2}</span>
                    </div>
                </div>            
        ))}    

        </div>

        </>
    )
}

export default Details;