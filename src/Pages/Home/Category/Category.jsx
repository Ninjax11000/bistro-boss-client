import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import './Category.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
    
          <section>
            <SectionTitle heading={"ORDER ONLINE"}
            subHeading={"---From 11:00am to 10:00pm---"}
            ></SectionTitle>
              <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide className='relative'>
                    <img className='w-[400px] h-[500px]' src={slide1} alt="" />
                    <h3 className='text-5xl text-white absolute z-10 bottom-12 left-1/3 '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'><img className='w-[400px] h-[500px]' src={slide2} alt="" />
                <h3 className='text-5xl text-white absolute z-10 bottom-12 left-1/3 '>Pizzas</h3></SwiperSlide>
                <SwiperSlide className='relative'><img className='w-[400px] h-[500px]' src={slide3} alt="" />
                <h3 className='text-5xl text-white absolute z-10 bottom-12 left-1/3 '>Soups</h3></SwiperSlide>
                <SwiperSlide className='relative'><img className='w-[400px] h-[500px]' src={slide4} alt="" />
                <h3 className='text-5xl text-white absolute z-10 bottom-12 left-1/3 '>Desserts</h3></SwiperSlide>
                <SwiperSlide className='relative'><img className='w-[400px] h-[500px]' src={slide5} alt="" />
                <h3 className='text-5xl text-white absolute z-10 bottom-12 left-1/3 '>Salads</h3></SwiperSlide>
               
               
                
            </Swiper>
          </section>

        
    );
};

export default Category;