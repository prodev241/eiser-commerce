import { Link } from "react-router-dom";
import t3 from "./assets/cart-1.jpg"
export const CartTable = () => {
  return (
    <>
      <div className="flex   justify-between align-middle pt-[100px] pl-[155px] pr-[200px] container mx-auto">
        <div>
          <h2 className="font-medium  text-[27px]">Cart</h2>
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
              <Link to="/cart"> Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="pl-[159px] mt-[90px]">
         
        </div>
      </div>
    </>
  );
};
