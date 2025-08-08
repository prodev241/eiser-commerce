import r1 from "./assets/review-1.png";
import r2 from "./assets/review-2.png";
import r3 from "./assets/review-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Comment from "./Comment";

const Review = () => {
  return (
    <>
      <div className="flex flex-row  pt-[35px]  pl-[130px] pr-[200px] container mx-auto border-2 border-amber-200 mt-22 w-[1290px] h-[82vh]  mb-[10px] ml-[140px] shadow-2xl">
        <div>
          <div className="border-none bg-pink-100 text-center w-[220px] h-[13vh] pt-[20px] mb-[10px]">
            <h2 className="font-medium text-[22px] ">Overall</h2>
            <h2 className="text-green-500 font-medium text-[22px]">4.0</h2>
            <p className="text-gray-500 text-[13px]">(03 Reviews)</p>
          </div>
          <Comment
            image={r1}
            p1={<p>Blake Ruiz</p>}
            p2={
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
                <br />
                nisi ut aliquip ex ea commodo
              </p>
            }
          />
          <Comment
            image={r2}
            p1={<p>Blake Ruiz</p>}
            p2={
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                <br />
                nisi ut aliquip ex ea commodo
              </p>
            }
          />
          <Comment
            image={r3}
            p1={<p>Blake Ruiz</p>}
            p2={
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
                <br />
                nisi ut aliquip ex ea commodo
              </p>
            }
          />
        </div>

        <div className="pl-[100px]">
          <h2 className="font-medium text-[25px] pb-[18px]">Add a Review</h2>
          <div className="flex gap-2 text-gray-500">
            <p>Your Rating: </p>
            <div className="flex flex-row pt-[4px]">
              <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-300" icon={faStar} />
            </div>
            <p>Outstanding</p>
          </div>
           <div className="mt-[25px]">
            <input className="border pl-[7px] w-[390px] border-amber-300 py-[7px]" type="text" placeholder="Your Full Name" />
        </div>
           <div className="mt-[25px]">
            <input className="border pl-[7px] w-[390px] border-amber-300 py-[7px]" type="text" placeholder="Email Address" />
        </div>
           <div className="mt-[25px]">
            <input className="border pl-[7px] w-[390px] border-amber-300 py-[7px]" type="text" placeholder="Phone Number" />
        </div>
           <div className="mt-[25px]">
            <input className="border pl-[7px] w-[390px] border-amber-300 py-[7px]" type="text" placeholder="Review" />
        </div>
       <div className="flex flex-row-reverse ">
        <button className="bg-green-400 p-[9px]  text-amber-50 text-[14px] font-medium rounded-[13px] mt-[35px] w-[120px]  hover:bg-green-600">Submit Now</button>
       </div>
        </div>
       
      </div>
    
    </>
  );
};

export default Review;
