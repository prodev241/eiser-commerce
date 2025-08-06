
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
const BlogCard = ({a1,a2,p1,button,p2,image}) => {
  return (
    <>
    <div className="group ">
        <div className="flex flex-col w-[370px] gap-4 shadow-2xl pl-[5px]">

          <div className="overflow-hidden" >
            <img className=" group-hover:scale-110 duration-300 ease-linear transition-all" src={image} />
          </div>
          <div className="pl-[3px]">
            <div className="flex text-gray-500 gap-6">
              <a className=" hover:text-green-600" href="">{a1}</a>
              <a className=" hover:text-green-600" href="">{a2}</a>
            </div>
            <div className="font-medium pt-[12px] hover:text-green-600 text-[17px]">
              <p>{p1}</p>
    </div>
    <div className="pt-[13px]">
              <p className=" text-gray-500 text-[14px]">{p2}</p>
              <button className=" hover:text-green-600 pt-[13px] font-medium text-[14px] pb-[11px]">{button} <FontAwesomeIcon icon={faArrowRight} /></button>
            
            </div>
          </div>
    </div>
        </div>
    </>
  )
}

export default BlogCard
