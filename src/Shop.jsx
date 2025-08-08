import CategoryName from "../src/CategoryName"
import { Link } from "react-router-dom";
import ProductCard2 from "../src/ProductCard2"
import n2 from "../src/assets/n1.jpg";
import n3 from "../src/assets/n2.jpg";
import n4 from "../src/assets/n3.jpg";
import n5 from "../src/assets/n4.jpg";
import i1 from "../src/assets/i1.jpg";
import i7 from "../src/assets/i7.jpg";
import i3 from "../src/assets/i3.jpg";
import i4 from "../src/assets/i4.jpg";

const Shop = () => {
  return (
    <>
     <div className="flex  justify-between align-middle pt-[100px] pl-[155px] pr-[200px] container mx-auto">
        <div>
          <h2 className="font-medium  text-[27px]">Shop Category</h2>
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
              <Link to="/shop"> Shop /</Link>
            </li>
            <li className=" text-gray-500  hover:text-green-600">
              <Link to=""> Women Fashion</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex container mx-auto pl-[165px] pr-[70px] mt-[170px] ">
        <div className="border-1 border-amber-50 w-[230px] h-[83vh] pl-[29px] pt-[5px]  shadow-2xl ">
            <div>
          <h2 className="underline underline-offset-8 decoration-green-600  decoration-[2px] font-medium">
            Browse Categories
          </h2>
          <div className=" text-gray-500 flex flex-col gap-2 pt-6 ">
            <CategoryName name = {<span> Frozen Fish</span>}/>
            <CategoryName name = {<span> Dried Fish</span>}/>
            <CategoryName name =  {<span> Fresh Fish</span>} />
            <CategoryName name =  {<span> Meat Alternatives</span>} />
            <CategoryName name =  {<span> Fresh Fish</span>} />
            <CategoryName name = {<span> Meat Alternatives</span>} />
            <CategoryName name =  {<span> Meat</span>} />
          </div>
          </div>
              <div className="pt-[40px]">
          <h2 className="underline underline-offset-8 decoration-green-600  decoration-[2px] font-medium">
            Product Brand
          </h2>
          <div className=" text-gray-500 flex flex-col gap-2 pt-6 ">
            <CategoryName name = {<span> Apple</span>} />
            <CategoryName name = {<span> Asus</span>} />
            <CategoryName name = {<span> Gionee</span>}/>
            <CategoryName name = {<span> Micromax</span>}/>
            <CategoryName name = {<span> Samsung</span>} />
          </div>
          </div>
              <div  className="pt-[40px]">
          <h2 className="underline underline-offset-8 decoration-green-600  decoration-[2px] font-medium">
            Color Filter
          </h2>
          <div className=" text-gray-500 flex flex-col gap-2 pt-6 ">
            <CategoryName name = {<span> Black</span>} />
            <CategoryName name = {<span> Black Leather</span>} />
            <CategoryName name = {<span> Black with red</span>} />
            <CategoryName name = {<span> Gold</span>}/>
            <CategoryName name = {<span> Spacegrey</span>} />
          </div>
          </div>
         
        </div>

        <div className="grid grid-cols-3 ml-[85px] mr-[228px] pb-[24px] gap-12">
            <div>
          <ProductCard2
            image={n2}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
          <div>
          <ProductCard2
            image={n3}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
        <div>
          {" "}
          <ProductCard2
            image={n4}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
        <div>
          {" "}
          <ProductCard2
            image={n5}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i1}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i7}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i3}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
          <div>
          {" "}
          <ProductCard2
            image={i4}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>
             <div>
          <ProductCard2
            image={n2}
            name={<p>Latest men’s sneaker</p>}
            price={<span>$25.00</span>}
            price2={<span>$35.00</span>}
          />
        </div>


        </div>
      </div>
    
    </>
  )
}

export default Shop
