

const UserLoader=()=>{

    return(
        <>
            
    <div className='container'>
              {/* <nav className="flex justify-between md:justify-around md:items-center text-black py-4 px-6 bg-white shadow-lg font-main animate-pulse">
  <div className="flex items-center space-x-3">
    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
    <div className="w-24 h-6 bg-gray-300 rounded"></div>
  </div>

  <ul className="hidden md:flex md:gap-8 text-black text-xl">
    {[...Array(4)].map((_, i) => (
      <li key={i} className="w-16 h-5 bg-gray-300 rounded"></li>
    ))}
  </ul>

  <div className="hidden md:flex md:justify-center md:items-center">
    <div className="w-20 h-8 bg-gray-300 rounded-full"></div>
  </div>

  <div className="flex flex-col items-end md:hidden">
    <div className="bg-gray-300 h-[3px] w-4 m-[2px] rounded"></div>
    <div className="bg-gray-300 h-[3px] w-6 m-[2px] rounded"></div>
    <div className="bg-gray-300 h-[3px] w-4 m-[2px] rounded"></div>
  </div>*/}

  <div className="absolute md:hidden top-24 left-0 w-full h-[280px] mt-[-30px] bg-white flex flex-col items-center gap-2 rounded-bl-lg rounded-br-lg z-50 animate-pulse">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="w-3/4 h-5 bg-gray-300 rounded my-2"
      ></div>
    ))}

    <div className="relative flex justify-center items-center p-1">
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    </div>

    <div className="w-24 h-8 bg-gray-300 rounded-full"></div>
  </div>
{/* </nav>  */}
      {/* <div className="container rounded-b-lg animate-pulse overflow-hidden md:flex w-full h-[880px] md:h-[630px] lg:h-[633px] bg-gray-300  mt-[5px] lg:gap-[90px]     ">
      <div role='status' className='max-w-sm animate-pulse'>
      <p className='h-2 bg-gray-300 rounded-full max-w-[380px] mb-2.5'></p>
<p className='h-2 bg-gray-500 rounded-full max-w-[340px] mb-2.5'></p>
<p className='h-2 bg-gray-500 rounded-full max-w-[320px] mb-2.5'></p>
      </div>
      </div>

     <div className='contianer grid grid-cols-3 mt-7 gap-10'>

      
     <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
<div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
  <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
</div>
<div className=' w-full flex justify-between items-start animate-pulse'>
  <div className="block">
      <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
      <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
  </div>
  <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
</div>

     </div>
     <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
<div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
  <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
</div>
<div className=' w-full flex justify-between items-start animate-pulse'>
  <div className="block">
      <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
      <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
  </div>
  <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
</div>
     </div>
     <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
<div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
  <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
</div>
<div className=' w-full flex justify-between items-start animate-pulse'>
  <div className="block">
      <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
      <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
  </div>
  <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
</div>
     </div>
     <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
<div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
  <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
</div>
<div className=' w-full flex justify-between items-start animate-pulse'>
  <div className="block">
      <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
      <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
  </div>
  <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
</div>
     </div>
      
     <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
<div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
  <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
</div>
<div className=' w-full flex justify-between items-start animate-pulse'>
  <div className="block">
      <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
      <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
  </div>
  <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
</div>
     </div>
      
     <div role='status' className='max-w-sm border border-gray-300 rounded-lg p-4 container'>
<div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
  <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round"></path>
  </svg>
</div>
<div className=' w-full flex justify-between items-start animate-pulse'>
  <div className="block">
      <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>
      <p className='h-2 bg-gray-300 rounded-full w-32 mb-2.5'></p>
  </div>
  <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
</div>
     </div>
</div> */}

{/* <div className="m-4 lg:mt-14 animate-pulse">
  <div className="flex justify-center font-main text-[40px] font-bold">
    <div className="w-48 h-10 bg-gray-300 rounded"></div>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-4 lg:mt-14 lg:mb-[80px] gap-4">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className={`w-full max-w-xs ${i !== 3 ? "lg:border-r-[2px]" : ""} border-gray-300`}
      >
        <div className="flex justify-center">
          <div className="mt-5 flex justify-center items-center bg-gray-300 w-[50px] h-[50px] rounded-full"></div>
        </div>

        <div className="mt-4 text-center">
          <div className="w-32 h-5 bg-gray-300 mx-auto rounded"></div>
        </div>

        <div className="text-center mt-3 mb-5 mx-6 space-y-2">
          <div className="w-full h-3 bg-gray-300 rounded"></div>
          <div className="w-3/4 h-3 bg-gray-300 mx-auto rounded"></div>
        </div>
      </div>
    ))}
  </div>
</div>
<div className='flex justify-between animate-pulse'>
      <div>
      <h3 className='h-3 bg-gray-300 rounded-full  w-48 mb-4'></h3>

      </div>
      <div>
        <div className="w-[100px] h-9 rounded-full bg-gray-300 ">

        </div>
      </div>
     

</div> */}





<div>
  
<div className="flex justify-center mt-8">
          <div className="mt-5 flex justify-center items-center bg-gray-300 w-[200px] h-[50px] rounded-full"></div>
        </div>
</div>
<div className="w-full h-full rounded-2xl mt-6">
  <div className="w-full h-64 bg-gray-300 rounded-3xl animate-pulse"></div>
</div>
</div>
</>
        )
    }

export default UserLoader