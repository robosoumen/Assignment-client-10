import React, { use } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ allReviewPromise }) => {
  const sliderData = use(allReviewPromise);
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        {sliderData.map((slider) => (
          <SwiperSlide>
            <img
              className="h-120"
              src={slider.foodImage}
              alt=""
              style={{ width: "100%" }}
            />
            <p className="text-center text-5xl text-blue-500 p-3 mb-3">{slider.foodName}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
