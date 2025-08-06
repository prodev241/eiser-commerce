import img from "./assets/offer-bg.png";
const Offer = () => {
  return (
    <>
      <div
        className="h-[50vh] w-full bg-center bg-cover flex justify-center flex-col mt-[100px]  pl-[350px] text-center "
        style={{ backgroundImage: `url(${img})` }}
      >
         <div className="container mx-auto">
        <div>
          <h5 className="text-[40px]">ALL MEN'S COLLECTION </h5>
          <h1 className="text-[30px]">50% OFF</h1>
        </div>
        <div className="mt-[15px]">
          <button className="bg-green-600 w-px] font-bold text-amber-50 text-[13px] w-[160px] h-[4vh] rounded-[10px]  hover:bg-green-500 ">
            DISCOVER NOW
          </button>
          <p className="text-gray-500 pt-[15px]">Limited Time Offer</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
