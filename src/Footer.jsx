
const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 mt-[100px]  ">
     <div className="flex justify-center h-[40vh] items-center pb-[100px] flex-col container mx-auto">

        <div className="flex flex-row gap-22 pr-[37px] pt-[165px] ">
          <div className="text-gray-300">
            <h2 className="text-amber-50 text-[20px] font-medium">
              Top Products
            </h2>
            <div className="flex flex-col pt-[28px] text-gray-400">
              <a className="pb-[13px]  hover:text-green-600" href="">
                Managed Website
              </a>
              <a className="pb-[13px]  hover:text-green-600" href="">
                Manage Reputation
              </a>
              <a className="pb-[13px]  hover:text-green-600" href="">
                Power Tools
              </a>
              <a className=" hover:text-green-600" href="">Marketing Service</a>
            </div>
          </div>
          <div className="text-gray-300 ">
            <h2 className="text-amber-50 text-[20px] font-medium">Quick Links</h2>
            <div className="flex flex-col pt-[28px] text-gray-400 ">
              <a className="pb-[13px]  hover:text-green-600 " href="">Jobs</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Brand Assets</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Investor Relations</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Terms of Service</a>
            </div>
          </div>
          <div className="text-gray-300 ">
            <h2 className="text-amber-50 text-[20px] font-medium">Features</h2>
            <div className="flex flex-col pt-[28px] text-gray-400">
              <a className="pb-[13px]  hover:text-green-600" href="">Jobs</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Brand Assets</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Investor Relations</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Terms of Service</a>
            </div>
          </div>
          <div className="text-gray-300 ">
            <h2 className="text-amber-50 text-[20px] font-medium">Resources</h2>
            <div className="flex flex-col pt-[28px] text-gray-400">
              <a className="pb-[13px]  hover:text-green-600" href="">Guides</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Research</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Experts</a>
              <a className="pb-[13px]  hover:text-green-600" href="">Agencies</a>
            </div>
          </div>
          <div className="text-gray-300 pt-[1px] ">
            <h2 className="text-amber-50 text-[20px] font-medium">Newsletter</h2>
            <p className="pt-[28px]  text-gray-400">You can trust us. we only send promo offers,</p>
            <div className="relative">
                 <form className="pt-[30px]" action="">
              <input
                className="bg-gray-600 h-[5vh] w-[270px] pl-[10px]  focus:outline-2 outline-blue-500/100  "
                type="text"
                placeholder="Your Email Address"
              />
              <button className="bg-green-600 w-px] font-bold text-amber-50 text-[13px] w-[120px] h-[4vh]  hover:bg-green-500 absolute right-0 top-9  ">SUBSCRIBE</button>
            </form>

            </div>
           
          </div>
        </div>
        <div>
            <div className="text-amber-50 mt-[110px] pr-[120px] ">
                <p>Copyright ©2025 All rights reserved | This template is made by<span className="text-green-400"> Colorlib</span></p>
            </div>
        </div>
          </div>
        </div>

    
    </>
  );
};

export default Footer;
