import './Header.css'
import banner1 from '../../assets/images/carousel-1-B1coVWNc-B1coVWNc.jpg'
import banner2 from '../../assets/images/carousel-2--2x9VnkY--2x9VnkY.jpg'
import banner3 from '../../assets/images/carousel-3-CkLdEAwA-CkLdEAwA.jpg'
import offer1 from '../../assets/images/offer1.jpg'
import offer2 from '../../assets/images/offer2.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css'
export default function Header() {

  const banners =[
    {img: banner1, title: 'Men Fashon'},
    {img: banner2, title: 'Women Fashon'},
    {img: banner3, title: 'Kids Fashon'}
  ]
  return (
    <header className='grid grid-cols-1 items-center md:grid-cols-12 lg:gap-10 gap-5 py-5 px-5 md:mx-0 mx-10 '>
       <div className="md:col-span-8 h-[50vh]" >
           <div className='h-full'>
              <Swiper className='h-[100%]'
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
           effect={'fade'}
           //تغيير شكل mouse
        grabCursor={true}
        fadeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
          autoplay={{
            delay: 1000,
           pauseOnMouseEnter: true
          }}
          //activate the arrows تفعيل ازؤاؤ التنقل
          navigation={true}
          pagination={{
            clickable: true
          }}
          loop={true}
          spaceBetween={20}
          >
          {
            banners.map((banner, index) => (
              
                <SwiperSlide key={index} className='h-[100%]'>
                <div key={index} className='relative overflow-hidden h-[100%] '>
                  <img src={banner.img} alt={banner.title} className='object-cover size-full' />
                   <div className='absolute inset-s-0 top-0 flex flex-col items-center justify-center text-center size-full bg-[rgba(0,0,0,0.7)] text-white md:gap-5 sm:gap-3 gap-10  p-30'>
                    <h1 className='md:text-2xl text-lg font-bold'>{banner.title}</h1>
                    <p className='md:text-[16px] text-[14px] sm:block hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem voluptas possimus aspernatur sit accusantium iusto excepturi eveniet facilis eum dicta eaque repellat recusandae corporis ipsa, deleniti tempora omnis. Fugiat?</p>
                    <button className='btn btn-transparent border border-white px-5 md:py-3 py-1 text-lg hover:bg-(--main-color)'>Shop Now</button>
                   </div>
                </div>
                 </SwiperSlide>
               
              )
            )
          }
              </Swiper>
           </div>
        </div> 
        <div className='md:col-span-4 md:h-[50vh]'>
          <div className="flex flex-col  gap-5 h-full">
             <div className="relative h-full">
              <img src={offer1} alt="" className=' object-cover size-full' />
              <div className='absolute top-0 left-0 size-full text-white flex flex-col items-center justify-center sm:gap-2 gap-1'>
                <p className='sm:text-lg'>Save 20%</p>
                <p className='font-bold'> Special Offer</p>
                <button className='border-white md:text-lg text-sm border-2 px-6 sm:py-2 py-1 hover:bg-(--main-color) duration-300'>Shop Now</button>
              </div>
             </div>
             <div className="relative h-full">
              <img src={offer2} alt="" className=' object-cover size-full' />
              <div className='absolute top-0 left-0 size-full text-white flex flex-col items-center justify-center sm:gap-2 gap-1'>
                <p className='sm:text-lg'>Save 20%</p>
                <p className='font-bold'> Special Offer</p>
                <button className='border-white md:text-lg text-sm border-2 px-6 sm:py-2 py-1 hover:bg-(--main-color) duration-300'>Shop Now</button>
              </div>
             </div>
          </div>
        </div>
    </header>
  )
}
