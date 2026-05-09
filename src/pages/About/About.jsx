import img from '../../assets/images/cat-1-Dff_xs0d -1--Dff_xs0d.jpg'
export default function About() {
   
  return(
    <div className='mt-20 flex flex-col justify-center items-center gap-10'>
      <h1 className='text-4xl font-extrabold '>About <span className='text-(--main-color)' >US</span></h1>
      <div className='flex justify-center items-center w-[70%] gap-10 lg:flex-row flex-col'>
        <img src={img} alt="" className='lg:w-[50%] w-[100%] sm:h-[350px] h-[250px] rounded'/>
        <div className='flex flex-col gap-5 lg:items-baseline items-center'>
          <h2 className='sm:text-2xl text-xl font-bold text-center'>Welcome to <span className='text-(--main-color)'>Furniture Shop</span></h2>
          <p className='font-semibold lg:text-md text-sm md:leading-7  text-gray-500 text-center lg:text-start'><span className='text-(--main-color)  '>Furniture Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat numquam, pariatur quidem sit, non ut voluptas voluptatem id architecto expedita ad iste praesentium similique quas vitae commodi quod sed.</p>
          <button className='md:w-[200px] w-[150px] border border-(--main-color) border-2 py-3 font-semibold text-(--main-color) rounded hover:bg-(--main-color) hover:text-white duration-300 active:scale-95 hover:font-medium hover:scale-99'>
              Shop Now
          </button>
        </div>
      </div>
    </div>
  )
 
}
