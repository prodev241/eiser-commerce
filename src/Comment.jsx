import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Comment = ({image,p1,p2}) => {
  return (
  <>
    <div>
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center mt-[28px]">
                  <img src={image} />
                  <div className="pl-[19px] font-medium">
                    {p1}
                    <div>
                      <FontAwesomeIcon
                        className="text-yellow-300"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-300"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-300"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-300"
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className="text-yellow-300"
                        icon={faStar}
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-5 pl-[8px]">
                  {p2}
                </div>
              </div>
            </div>
          </div>
  </>
  )
}

export default Comment
