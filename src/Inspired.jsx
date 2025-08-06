import ProductCard2 from "./ProductCard2"
import n2 from "./assets/n1.jpg";
import n3 from "./assets/n2.jpg";
import n4 from "./assets/n3.jpg";
import n5 from "./assets/n4.jpg";
import i1 from "./assets/i1.jpg";
import i7 from "./assets/i7.jpg";
import i3 from "./assets/i3.jpg";
import i4 from "./assets/i4.jpg";
const Inspired = () => {
  return (
   <>
   <div className="container mx-auto ">
    <div className="text-center pt-[125px] pr-[38px] pb-[10px] ">
        <h1 className="pb-[27px] text-2xl font-bold">INSPIRED PRODUCTS</h1>
        <p className="text-gray-500">
          Bring called seed first of third give itself now ment
        </p>
      </div>
        <div className="grid grid-cols-4 pt-[70px] ml-[233px] mr-[228px] pb-[20px] gap-5  "> 
  <div>
          <ProductCard2
            image={n2}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        <div>
          <ProductCard2
            image={n3}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        <div>
          {" "}
          <ProductCard2
            image={n4}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        <div>
          {" "}
          <ProductCard2
            image={n5}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i1}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i7}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i3}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i4}
            name={`Latest men’s sneaker`}
            price={`$25.00`}
            price2={`$35.00`}
          />
        </div>
        </div>
        </div>
</>
  )
}

export default Inspired
