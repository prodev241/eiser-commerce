
import ProductCard from "./ProductCard";
import  m1 from "./assets/f-p-5.jpg"
import m2 from "./assets/f-p-2.jpg"
import m3 from "./assets/f-p-3.jpg"
const Featured = () => {
  return (
    <>
    <div className="container mx-auto">
    <div className='text-center pt-[125px] pl-[15px] pb-[20px]'>
        <h1 className='pb-[27px] text-2xl font-bold'>FEATURED PRODUCTS</h1>
        <p className='text-gray-500'>Bring called seed first of third give itself now ment</p>
    </div>
    <div className='flex justify-center gap-25 pt-[40px] pb-[50px]'>
       <ProductCard image={m1} name={`Latest men’s sneaker`} price={`$25.00`} price2={`$35.00`}/>
      <ProductCard image={m2} name={`Red women purses`} price={`$25.00`} price2={`$35.00`}/>
      <ProductCard image={m3} name={`Men stylist Smart Watch`} price={`$25.00`} price2={`$35.00`}/>
</div>
    </div>
    </>
  )
}

export default Featured
