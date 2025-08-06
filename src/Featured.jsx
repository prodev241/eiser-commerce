
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
       <ProductCard image={m1} name={<p>Latest men’s sneaker</p>} price={<span>$25.00</span>} price2={<span>$35.00</span>}/>
      <ProductCard image={m2} name={<p>Red women purses</p>} price={<span>$25.00</span>} price2={<span>$35.00</span>}/>
      <ProductCard image={m3} name={<p>Men stylist Smart Watch</p>} price={<span>$25.00</span>} price2={<span>$35.00</span>}/>
</div>
    </div>
    </>
  )
}

export default Featured
