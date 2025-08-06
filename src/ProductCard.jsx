
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ image, name, price, price2 }) => {
  return (
    <div className="flex flex-col group border-2 border-white shadow-2xl">
      <div className=" overflow-hidden relative w-[200px] min-h-[238px] ">
        <div className="w-50">
          <img className="h-full  object-contain w-full " src={image} alt="" />
        </div>

        <div className="bg-green-300 absolute group-hover:translate-y-0 duration-600 transition-all ease-linear translate-y-20 bottom-0 gap-6 flex justify-center h-[41px]  w-[200px]">
          <div className=" bg-amber-50 h-[3vh] pt-[4px] w-[32px] text-center mt-[5px] rounded-[33px] hover:bg-green-600">
            <button>
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
          <div className=" bg-amber-50 h-[3vh] pt-[4px] w-[32px] text-center mt-[5px] rounded-[33px] hover:bg-green-600">
            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          <div className="bg-amber-50 h-[3vh] pt-[4px] w-[32px] text-center mt-[5px] rounded-[33px] hover:bg-green-600">
            <button>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className=" hover:text-green-500 pl-1">{name}</p>
        <p className="text-[20px] pt-[3px] pl-1">
          {price}{" "}
          <span className="line-through text-gray-500 pl-[21px] text-[15px]">
            {price2}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
