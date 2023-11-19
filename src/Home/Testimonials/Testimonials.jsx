import SectionTitle from "../../Hooks/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [ourReviews, setOurReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setOurReviews(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {ourReviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24 flex flex-col items-center gap-5 ">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaQuoteLeft className="w-10 h-10 text-black"/>
                <p className="">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
