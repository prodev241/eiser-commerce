import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export const Contect = () => {
  return (
    <>
      <div className="flex   justify-between align-middle pt-[100px] pl-[155px] pr-[200px] container mx-auto">
        <div>
          <h2 className="font-medium  text-[27px]">Contact Us</h2>
          <p className=" text-gray-500 pt-[8px]">
            Very us move be blessed multiply night
          </p>
        </div>
        <div>
          <ul className="flex pt-[28px] ">
            <li className=" text-gray-500  hover:text-green-600">
              <Link to="/">Home /</Link>
            </li>
            <li className=" text-gray-500  hover:text-green-600">
              <Link to="shop"> Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row mt-[150px]">
        <div className="flex flex-col ml-[210px] ">
          <label className="font-medium text-2xl pb-[20px]">Get in Touch</label>
          <textarea
            className="bg-gray-100 w-[650px] h-[20vh] p-[10px] border border-gray-200"
            name=""
            id=""
            placeholder="Enter Message"
          ></textarea>
          <div className="flex flex-col ">
          <div className=" flex flex-row  gap-3">
            <div className="mt-[25px] ">
              <input
                className="border pl-[7px] w-[320px] py-[7px] border-gray-200 "
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-[25px]">
              <input
                className="border pl-[7px] w-[320px] border-gray-200 py-[7px] "
                type="text"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="mt-[25px] ">
            <input
              className="border pl-[7px] w-[650px] border-gray-200 py-[7px]"
              type="text"
              placeholder="Enter Subject"
            />
          </div>
          <button className="bg-green-400 p-[9px]  text-amber-50 text-[14px] font-medium rounded-[13px] mt-[35px] w-[120px]  hover:bg-green-600">Submit Now</button>
        </div>
        </div>
        
        <div className="flex flex-col pt-[60px] pl-9 gap-8">
          <div className="flex flex-row">
            <div className="pt-[3px] text-[25px] text-gray-400">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="pl-[10px] text-[15px]">
              <p>Buttonwood, California.</p>
              <p className="text-gray-400 text-[13px]">Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="pt-[3px] text-[25px] text-gray-400">
              <FontAwesomeIcon icon={faMobile} />
            </div>
            <div className="pl-[10px] text-[15px]">
              <p>00 (440) 9865 562</p>
              <p className="text-gray-400 text-[13px]">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="pt-[3px] text-[25px] text-gray-400">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="pl-[10px] text-[15px]">
              <p>support@colorlib.com</p>
              <p className="text-gray-400 text-[13px]">Send us your query anytime!</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Contect;
