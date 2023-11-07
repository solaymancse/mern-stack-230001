import { PiTelevisionSimpleBold } from 'react-icons/pi'
import { items } from '../data'
import { Navigation,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const Banner = () => {
  return (
    <div className='flex gap-4 max-w-7xl mx-auto'>
      <div className=" rounded-lg bg-white mt-6 py-4 border w-[250px] h-[300px]   px-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-4 mb-4"> <PiTelevisionSimpleBold />{item.title}</li>
        ))}

      </div>
      <div className=' w-10/12 h-[300px] mt-6 rounded-lg'>
        <Swiper pagination={true} navigation={true} modules={[Navigation,Pagination]} className="mySwiper rounded-lg h-full">
          <SwiperSlide>
            <img src="https://icms-image.slatic.net/images/ims-web/7b7d7fd1-4da7-4212-848a-14250031bafa.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://icms-image.slatic.net/images/ims-web/4830bdcc-2b0b-4351-b49d-8661ceaff1b3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://icms-image.slatic.net/images/ims-web/e50c6b42-96a8-420f-9068-445bf32cf3ba.jpg" alt="" />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}
