import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "../../../common/Button";

const TopProducts = () => {
  const swiperRef = useRef();
  return (
    <div className="bg-white rounded-sm ">
      <div className="border-b border-slate-200 uppercase font-semibold text-primary p-5">
        <h2>Top products</h2>
      </div>
      <div className="p-5">
        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {[...Array(10).keys()].map((product) => (
              <SwiperSlide key={product}>
                <div
                  key={product}
                  className="bg-white relative flex flex-col gap-3 items-center justify-center"
                >
                  <img
                    src="https://down-my.img.susercontent.com/file/ad6fa5699cd56a2266650953183c400d"
                    alt="product"
                  />
                  <div className="text-center bg-[#2222225e] w-full text-white">
                    <span>Monthly sales 5k</span>
                  </div>
                  <span>Dessini Cookware</span>
                  <div
                    className="w-7 h-7 absolute top-5 left-5 bg-primary p-3"
                    style={{
                      "clip-path":
                        "polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)",
                      transform: "rotate(-90deg)",
                    }}
                  ></div>
                  <span className="absolute top-6 left-6 text-white text-xs">
                    TOP
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute flex flex-col w-full top-5/12">
            <div className="flex justify-between ">
              <Button
                className={
                  "z-10 w-8 shadow-xl h-8 flex items-center justify-center rounded-full relative -left-9"
                }
                onClick={() => swiperRef.current.slidePrev()}
                children={<FaAngleLeft className="text-xl" />}
              />

              <Button
                className={
                  "z-10 w-8 shadow-xl h-8 flex items-center justify-center rounded-full relative -right-9"
                }
                onClick={() => swiperRef.current.slideNext()}
                children={<FaAngleRight className="text-xl" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
