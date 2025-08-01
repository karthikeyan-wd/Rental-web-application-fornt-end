import React, { useRef, useEffect } from "react";
import { Cust } from "../../Db/Cust";
function Customer() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: 300,
                    behavior: "smooth",
                });

    //             if (
    //                 scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
    //                 scrollRef.current.scrollWidth
    //             ) {
    //                 scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    //             }
    //         }
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
    return (
        <>
            <div className=" ">
                <div className="text-center my-10 mt-[100px] ">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <i className="fa-solid fa-heart text-primary mr-2 text-5xl"></i>
                        <span className="text-primary text-5xl">
                            Hear From
                            <span className="text-gray-600"> Our Happy Riders</span>
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                        Discover why thousands choose Wheel on Rent for reliable, affordable,
                        and adventurous two-wheeler rentals across India.
                    </p>
                </div>

                <div
                    className="flex w-full overflow-x-auto scroll-smooth px-4 pb-6 whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none]"
                    ref={scrollRef}
                    style={{ scrollbarWidth: "none" }}
                >
                    {Cust.map((items, id) => (

                        <div key={id} className="inline-block p-4 ">
                            <div className="bg-white border border-black rounded-xl  p-6 shadow-lg  w-[438px] h-[320px]">
                                <div className="flex items-center mb-4 mt-2">
                                    <img
                                        src={items.img}
                                        alt=""
                                        className="w-16 h-16 rounded-full mr-4 "
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">{items.name}</h3>
                                        <p className="text-gray-500 text-sm">{items.vlog}</p>
                                        <div className=" text-yellow-400">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>

                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2 mt-8">
                                    <p className="text-gray-500 text-lg break-words whitespace-pre-line">
                                        {items.title}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Customer;

