import { Swiper, SwiperSlide } from "swiper/react";
import { brandswiper } from "../sliderProps";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa6'
const BrandSlider = () => {
  return (
    <div className="branddd">
          <Swiper modules={[Navigation, Pagination, Mousewheel, Keyboard]} {...brandswiper} className="swiper-container brandswiper">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img style={{ width:'100px',height:'50px'  }} alt="img" src="assets/siteimage/brand1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img style={{ width:'100px',height:'50px' }} alt="img" src="assets/siteimage/brand2.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img style={{ width:'100px',height:'50px' }} alt="img" src="assets/siteimage/brand3.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img style={{ width:'100px',height:'50px' }} alt="img" src="assets/siteimage/brand4.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img style={{ width:'100px',height:'50px' }} alt="img" src="assets/siteimage/lorex.png" />
          </div>
        </SwiperSlide>
      </div>
      <div class="swiper-button-next">
        <FaArrowRight style={{fontSize:'30px'}}/>
      </div>
      <div class="swiper-button-prev">
        <FaArrowRight style={{fontSize:'30px'}}/>
      </div>
    </Swiper>
    </div>
  );
};
export default BrandSlider;
