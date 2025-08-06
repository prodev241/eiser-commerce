import n2 from "./assets/n1.jpg";
import n3 from "./assets/n2.jpg";
import n4 from "./assets/n3.jpg";
import n5 from "./assets/n4.jpg";
import n1 from "./assets/new-product1.png";
import ProductCard from "./ProductCard2";
const New = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="text-center pt-[125px] pr-[45px] pb-[20px]">
        <h1 className="pb-[27px] text-2xl font-bold">NEW PRODUCTS</h1>
        <p className="text-gray-500">
          Bring called seed first of third give itself now ment
        </p>
      </div>
      <div className="grid grid-cols-2 pb-[25px]">
        <div  className="text-center">
          <h5 className="text-gray-600 pt-[41px]">COLLECTION OF 2025</h5>
          <h1 className="text-[30px] font-bold">MEN'S SUMMER T-SHIRT</h1>
          <div className="pl-[210px] p-[110px]">
 <img  src={n1} alt="" srcset="" />
          </div> 
          <p className="text-[25px]">$120.70</p>
          <div className="mt-[15px]">
            <button className="bg-green-600 w-px] font-bold text-amber-50 text-[13px] w-[150px] h-[4vh] rounded-[10px]  hover:bg-green-500 ">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-[46px] pr-[200px]">
  <div>
          <ProductCard
            image={n2}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        <div>
          <ProductCard
            image={n3}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        <div>
          {" "}
          <ProductCard
            image={n4}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        <div>
          {" "}
          <ProductCard
            image={n5}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        </div>
      
      </div>
      </div>
    </>
  );
};

export default New;
