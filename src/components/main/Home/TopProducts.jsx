import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
            cssMode={true}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
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
                  <span className="absolute top-5.5 left-5.5 text-white text-sm">
                    TOP
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute flex flex-col w-full top-5/12">
            <div className="flex justify-between ">
              <button
                className="z-10 w-8 shadow-xl h-8 hover:w-10 hover:h-10 duration-500 flex items-center justify-center rounded-full bg-primary text-white -left-9 absolute"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <FaAngleLeft className="text-xl" />
              </button>
              <button
                className={
                  "z-10 w-8 shadow-xl h-8 hover:w-10 hover:h-10 duration-500 flex items-center justify-center rounded-full bg-primary text-white -right-9 absolute"
                }
                onClick={() => swiperRef.current.slideNext()}
              >
                <FaAngleRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
