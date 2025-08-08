import p1 from "./assets/s-product-1.jpg";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  return (
    <>
      <div className="flex  justify-between align-middle pt-[100px] pl-[155px] pr-[200px] container mx-auto ">
        <div>
          <h2 className="font-medium  text-[27px]">Product Details</h2>
          <p className=" text-gray-500 pt-[8px]">
            Very us move be blessed multiply night
          </p>
        </div>
        <div>
          <ul className="flex pt-[28px] ">
            <li className=" text-gray-500  hover:text-green-600">
              <Link to="home">Home /</Link>
            </li>
            <li className=" text-gray-500  hover:text-green-600">
              <Link to="shop">Product Details</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex pl-[40px] ">
        <div>
          <img className="w-[500px] ml-[160px] mt-[147px]" src={p1} />
        </div>
        <div className="ml-[70px]  mt-[180px]">
          <h2 className="font-medium text-2xl">Faded SkyBlu Denim Jeans</h2>
          <h3 className="font-medium text-2xl text-green-600  mt-[28px]">$149.99</h3>
          <p className="mt-[22px]">
            Category<span className="text-green-600 pl-[5px] " > : Household</span>
          </p>
          <p className="mt-[10px]">
            Availibility<span className="pl-[5px]"> : In Stock</span>
          </p>

          <div className="">
              <p className="mt-[30px]">
            Mill Oil is an innovative oil filled radiator with the most modern<br/>
            technology. If you are looking for something that can make your<br/>
            interior look awesome, and at the same time give you the pleasant<br/>
            warm feeling during the winter.
          </p>

          </div>
        
          <div className="flex mt-[40px] ">
            <p className="pt-[4px] ">Quantity :</p>
            <input className="border p-[2px] pl-[5px] w-[50px] ml-[10px] " type="number" min="1" max="10"  />
          </div>
          <div>
            <button className="bg-green-400 p-[9px]  text-amber-50 text-[14px] font-medium rounded-[13px] mt-[35px] w-[120px]  hover:bg-green-600">ADD TO CART</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
