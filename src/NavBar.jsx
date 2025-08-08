import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import{Link, NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className=" bg-gray-100 flex   justify-around font-sans text-gray-800 text-[14px] pt-[4px] gap-35  container mx-auto   ">
        <div>
          <p>PHONE +01 245 643 333 | EMAIL:INFO@GM.COM</p>
        </div>
        <div>
          <p>GIFT CARD | TRACK ORDER | CONTACT US</p>
        </div>
      </div>
      <div className=" bg-gray-100  text-gray-800 h-[80px]  sticky top-0 z-50 shadow-lg  ">
       <div className="flex justify-around pt-[20px] pl-[21px] pr-[30px] container mx-auto">
        <div>
          <NavLink to="/"><img src="logo.png" alt="logo" /></NavLink>
        </div>
        <div className="pt-[12px] gap-1 ml-[10px] mr-[10px]">
          <ul className="flex gap-9 text-[15px] ">
            <li className=" hover:text-green-600">
              <NavLink className={({isActive}) => isActive ? "text-green-600":"" } to="/">HOME</NavLink>
            </li>
            <li className=" hover:text-green-600">
              <NavLink className={({isActive}) => isActive ? "text-green-600":"" } to="/shop">SHOP</NavLink>
            </li>
            <li className=" hover:text-green-600">
              <a href="#">BLOG</a>
            </li>
            <li className=" hover:text-green-600">
             <a href="#">PAGES</a>
            </li>
            <li className=" hover:text-green-600">
               <NavLink className={({isActive}) => isActive ? "text-green-600":"" } to="/contect">CONTECT</NavLink>
            </li>
          </ul>
        </div>
       
        <div className="pt-[14px]">
          <ul className="flex gap-4 text-[15px] " >
            <li className=" hover:text-green-600 "> <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
            
            <li className=" hover:text-green-600"> <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link> </li>
            
            <li className=" hover:text-green-600"><a href=""><FontAwesomeIcon icon={faUser} /> </a></li>
            <li className=" hover:text-green-600"><a href=""><FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
          </ul>
        </div>
         </div> 
   </div>
   
    </>
  );
};

export default NavBar;
