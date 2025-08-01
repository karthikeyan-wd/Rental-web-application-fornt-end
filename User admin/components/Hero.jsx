import React from "react";
import Lamp from "../../assets/Lamp.png";
import Black from "../../assets/Blackblend.png";
import ImgOne from "../../assets/img-1.png";
import Man from "../../assets/Man.png"
import Light from "../../assets/Light.png"
import Search from "./Search";
const Hero = () => {
  return (
    <>
      <div className="container rounded-b-lg overflow-hidden md:flex w-full h-[880px] md:h-[630px] lg:h-[633px]   mt-[5px] lg:gap-[90px] bg-main relative z-10   ">
       
        <div
          
          className="block
            w-[100%]  lg:w-[60%] z-5 lg:flex lg:ml-[30px]  "
        > 
         
          <div className="font-main w-[550px] h-[480px]  text-center md:ml-[]  lg:ml-[80px] lg:mt-[5px]   ">
            <div className="relative z-20"> 
              <h3 className="hidden md:block lg:block font-main font-semibold text-[40px]  text-start md:ml-[140px]  lg:ml-[50px] lg:mt-[2px]">
               
                <span className="text-primary text-8xl text-start text-wrap">R</span>ental Your
                <span className="">Way,</span>
                <span className="block md:ml-[-24px]   text-start"> Anytime, Anywhere!</span>
              </h3>
              <div className="relative z-20 md:hidden lg:hidden ">
              <h3 className=" ml-[-230px]  font-main font-semibold text-[40px] text-center  lg:ml-[50px] ">
              <span className="text-primary text-8xl  text-wrap">R</span><span>ental Your</span>
              <span className="block ">Way,</span>
              <span className="block   "> Anytime </span>
              <span className="block">Anywhere!</span>
              </h3>
              </div>

             
          <div className="ml-[-30px]  md:ml-[-57px] lg:ml-[-57px] absolute md:top-[140px]  lg:top-[140px]">
            <Search/>
          </div>
            </div>
            
          
          </div>

         
        </div>

        <div className=" hidden md:block  md:w-[0%] lg:w-[39%] lg:h-[600px] relative mt-2  bg-[#F5EEDC] rounded-full   lg:grid lg:grid-rows-[200px_280px_90px] ">
          <div className=" animate-slide-left-right">
            <img
              className="lg:ml-[190px] lg:mt-[-30px]  "
              src={Lamp } loading="lazy"
              width="105px"
            />

            <div className="w-[300px] h-[400px] absolute z-50 lg:top-[74px] lg:left-[90px]  ">
              <img src={Light} loading="lazy" />
            </div>
          </div>
          <div className="absolute top-[410px] left-[70px] ">
            <img className=" blur-3xl h-[200px]" src={Black} width="420px " loading="lazy" />
          </div>
          <div className="absolute top-[225px] left-[-80px] w-[600px] ">
            <img src={ImgOne} loading="lazy"/>
          </div>
          <div className="">
              <img className="ml-[0px] absolute top-[100px]   left-[-120px] z- 10" src={Man} loading="lazy" width="250px" />
            </div>
        </div>


        
       

       
      </div>
      
    </>
  );
};

export default Hero;
