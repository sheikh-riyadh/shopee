import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../common/Button";

const HomeCategories = () => {
  const categories = [...Array(40).keys()]; // Replace with real category data

  // Chunk into groups of 4 (2 rows × 2 columns)
  const chunked = [];
  for (let i = 0; i < categories.length; i += 4) {
    chunked.push(categories.slice(i, i + 4));
  }

  const swiperRef = useRef();

  return (
    <div className="bg-white rounded-sm">
      <div className="p-5 uppercase font-semibold text-primary">
        <h2>Categories</h2>
      </div>

      <div className="relative p-5">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={5}
          spaceBetween={10}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {chunked.map((group, index) => (
            <SwiperSlide key={index}>
              <Link to={"category/mobile"}>
                <div className="grid grid-cols-2 gap-2.5">
                  {group.map((category) => (
                    <div
                      key={category}
                      className={`flex flex-col items-center justify-center border border-slate-200 p-2 hover:shadow-lg duration-300 `}
                    >
                      <img
                        src="https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632@resize_w320_nl.webp"
                        alt="category"
                      />
                      <h1 className="text-xs text-center">
                        Mobile Accessories {category + 1}
                      </h1>
                    </div>
                  ))}
                </div>
              </Link>
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
                "z-10 w-8 shadow-xl h-8 flex items-center justify-center rounded-full"
              }
              onClick={() => swiperRef.current.slideNext()}
              children={<FaAngleRight className="text-xl" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
