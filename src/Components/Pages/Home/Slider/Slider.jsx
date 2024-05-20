import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../../assets/bannerImg/img1.jpg";
import img2 from "../../../../assets/bannerImg/img2.jpg";
import img3 from "../../../../assets/bannerImg/img3.jpg";
const Slider = () => {
  //todo:all slider add link to before the production
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div id="slide1" className="carousel-item rounded-xl relative w-full">
            <img src={img1} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] bottom-0">
              <div className="text-white space-y-7 w-full pl-14">
                <h1 className="text-6xl font-bold drop-shadow-lg">
                  Language Learning{" "}
                  <span className="text-warning text-7xl  font-bold">
                    Made Easy
                  </span>
                </h1>
                <p className="text-xl">
                  Up to{" "}
                  <span className="text-warning text-2xl font-bold">60%</span>{" "}
                  Off Your First Course. Start Now!
                </p>
                <button className="btn btn-warning me-5">Sign Up</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide2" className="carousel-item rounded-xl relative w-full">
            <img src={img2} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] bottom-0">
              <div className="text-white space-y-7 w-full pl-14">
                <h1 className="text-6xl drop-shadow-2xl font-bold">
                  Speak Confidently
                </h1>
                <p className="text-2xl ">
                  Enroll in Our Language Courses and{" "}
                  <span className="text-warning text-2xl font-bold">
                    Save Big!
                  </span>
                </p>
                <button className="btn btn-warning me-5">Enroll Now!</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide3" className="carousel-item rounded-xl relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] bottom-0">
              <div className="text-white space-y-7 w-full pl-14">
                <h1 className="text-6xl font-bold drop-shadow-2xl">
                  Unlock Your <span className="text-warning">Potential.</span>
                </h1>
                <p className="text-xl font-bold">
                  Learn English with Up to{" "}
                  <span className="text-warning text-2xl font-bold">60%</span>{" "}
                  Off!
                </p>
                <button className="btn btn-warning me-5">Enroll Now!</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
