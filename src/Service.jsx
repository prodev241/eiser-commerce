import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoneyBill,faTruck,faHeadphones,faShield} from "@fortawesome/free-solid-svg-icons";
const Service = () => {
  return (
  <>
  <div className="flex justify-center gap-15 pt-[69px] container mx-auto">
    <div className="text-center hover:text-green-600 border-2 border-amber-50 h-[140px] w-[220px] pt-[10px] shadow-2xl">
        <p className="text-[28px]"><FontAwesomeIcon icon={faMoneyBill}/></p>
        <p className="pt-[15px]">MONEY BACK GURANTEE</p>
        <p className="pt-[5px] text-gray-500">Shall open divide a one</p>

    </div>
    <div className="text-center  hover:text-green-600 border-2 border-amber-50 h-[140px] w-[220px] pt-[10px] shadow-2xl">
        <p className="text-[28px]"><FontAwesomeIcon icon={faTruck}/></p>
        <p className="pt-[15px]">FREE DELIVERY</p>
        <p className="pt-[5px] text-gray-500">Shall open divide a one</p>

    </div>
     <div className="text-center  hover:text-green-600 border-2 border-amber-50 h-[140px] w-[220px] pt-[10px] shadow-2xl">
        <p className="text-[28px]"><FontAwesomeIcon icon={faHeadphones}/></p>
        <p className="pt-[15px]">ALWAYS SUPPORT</p>
        <p className="pt-[5px] text-gray-500">Shall open divide a one</p>

    </div>
     <div className="text-center  hover:text-green-600 border-2 border-amber-50 h-[140px] w-[220px] pt-[10px] shadow-2xl">
        <p className="text-[28px]"><FontAwesomeIcon icon={faShield}/></p>
        <p className="pt-[15px]">SECURE PAYMENT</p>
        <p className="pt-[5px] text-gray-500">Shall open divide a one</p>

    </div>
  </div>
  </>
  )
}

export default Service
