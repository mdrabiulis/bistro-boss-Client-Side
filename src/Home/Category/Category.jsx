import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// images
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Hooks/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle subHeading={"From 11:00am to 10:00pm"}
      heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="my-10 ">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="">
          <img src={slide1} alt="" className="w-[312px] h-[450px]"/>
          <h2 className="uppercase text-white text-3xl text-center -mt-16">Salads</h2>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={slide2} alt="" className="w-[312px] h-[450px]"/>
          <h2 className="uppercase text-white text-3xl text-center -mt-16">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className="w-[312px] h-[450px]"/>
          <h2 className="uppercase text-white text-3xl text-center -mt-16">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className="w-[312px] h-[450px]"/>
          <h2 className="uppercase text-white text-3xl text-center -mt-16">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="w-[312px] h-[450px]"/>
          <h2 className="uppercase text-white text-3xl text-center -mt-16">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
  );
};

export default Category;
