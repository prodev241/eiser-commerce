import image from './assets/banner-bg.jpg'
const Hero = () => {
  return (
    <>
    <div className='h-[78vh] w-full bg-center bg-cover flex justify-center flex-col pl-[320px] pb-[68px] '
    style={{ backgroundImage: `url(${image})` }}>
      <div className='container mx-auto'>
        <div>
            <h5 className='font-bold text-amber-50'>MEN COLLECTION</h5>
            <h1 className='text-[50px] font-bold  text-amber-50'><span className='text-green-500'>Show</span> Your</h1>
            <h1 className='text-[50px] font-bold  text-amber-50 pb-[5px]'>Personal <span className='text-green-500'>Style</span></h1>
            <p className='text-white '>Fowl saw dry which a above together place.</p>
        </div>
        <div className='mt-[15px]'>
            <button className='bg-green-600 w-px] font-bold text-amber-50 text-[13px] w-[160px] h-[4vh] rounded-[10px]  hover:bg-green-500 '>VIEW COLLECTION</button>

        </div>
      </div>
        
    </div>
    </>
  )
}

export default Hero
