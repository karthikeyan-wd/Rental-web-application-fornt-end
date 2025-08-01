import react from "react";
// import FooterImg from "../../assets/Footer.png";
function foot() {
  return (
    <>
      <footer className="py-10 bg-gray-900 text-gray-300 w-full mt-[-10px] overflow-hidden relative font-main">
  <div className="container px-4 relative">
    <div className="mt-10 border-t border-gray-700 pt-12 text-center md:text-left mb-6 lg:ml-[70px]">
      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-10 lg:gap-20 z-2">
        <div className="w-full md:w-[300px]">
          <h1 className="text-3xl font-bold text-red-500 mb-2">Rental</h1>
          <p className="text-xl font-sans tracking-wide">
            It's a never ending battle of making your cars better and also
            trying to be better yourself.
          </p>
          <div className="flex space-x-4 mt-8 justify-center md:justify-start ">
            <a
              href="#"
              className="hover:bg-red-500 cursor-pointer"
            >
              <i className="  fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:bg-red-500 "
            >
              <i className="  fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:bg-red-500"
            >
              <i className="  fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:bg-red-500 "
            >
              <i className="  fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="md:ms-10 md:mt-10 lg:ml-[300px]">
          <h2 className="text-2xl font-semibold text-white mb-2">Account</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:text-red-500">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Billing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Notifications
              </a>
            </li>
          </ul>
        </div>

        <div className="md:mt-10">
          <h2 className="text-2xl font-semibold text-white mb-2">About</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="md:mt-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Company</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:text-red-500">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center md:text-left grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="  md:mt-6 flex justify-center md:justify-start">
          <p className="text-lg">&copy; 2025 All Right Reserved by </p>
          <p className="text-lg font-bold">Rental</p>
        </div>
        <div className="  md:mt-5 space-x-2 justify-center md:justify-start lg:[ml-20px] md:ml-10 pl-5 hover:text-red-500">
          <a href="#" className="text-lg hover:text-red-500">
            Terms &#x2022;
          </a>
          <a href="#" className="text-lg hover:text-red-500">
            Privacy Policy &#x2022;
          </a>
          <a href="#" className="text-lg hover:text-red-500">
            Cookies
          </a>
        </div>
      </div>
    </div>
<div>
  
        {/* <div className="absolute top-[-300px] opacity-15 w-full ">
      <img src={FooterImg}  className="w-full " />
    </div>
    <div className="absolute top-[-100px] opacity-15 rotate-180 w-full ">
      <img src={FooterImg}  className="w-full " />
    </div> */}
</div>
          
  </div>
</footer>

    </>
  );
}
export default foot;
