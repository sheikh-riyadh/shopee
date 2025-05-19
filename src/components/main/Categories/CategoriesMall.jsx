import { useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaList } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../common/Button";
import SelectInput from "../../../common/SelectInput";
import { Link } from "react-router";

const CategoriesMall = () => {
  const categories = [...Array(40).keys()]; // Replace with real category data

  // Chunk into groups of 4 (2 rows × 2 columns)
  const chunked = [];
  for (let i = 0; i < categories.length; i += 4) {
    chunked.push(categories.slice(i, i + 4));
  }

  const swiperRef = useRef();

  return (
    <div className="flex flex-col gap-10">
      <div className="relative p-5 bg-white rounded-sm">
        <h2 className="pb-3 text-primary font-medium">Shopee Mall</h2>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {chunked.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 gap-2.5 b">
                {group.map((category) => (
                  <div
                    key={category}
                    className={`flex flex-col items-center justify-center border border-slate-200 p-2 hover:shadow-lg duration-300 bg-white `}
                  >
                    <img
                      src="https://down-my.img.susercontent.com/file/b283d6df2b56bc5a297d410255d6aa79"
                      alt="category"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute flex flex-col w-full top-5/12">
          <div className="flex justify-between ">
            <button
              className="z-10 w-8 shadow-xl h-8 hover:w-10 hover:h-10 duration-500 flex items-center justify-center rounded-full bg-primary text-white relative -left-9"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <FaAngleLeft className="text-xl" />
            </button>
            <button
              className={
                "z-10 w-8 shadow-xl h-8 hover:w-10 hover:h-10 duration-500 flex items-center justify-center rounded-full bg-primary text-white"
              }
              onClick={() => swiperRef.current.slideNext()}
            >
              <FaAngleRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 xl:gap-10">
        <div className="col-span-2 xl:flex flex-col gap-2 hidden">
          <p className="font-bold flex items-center gap-3 border-b border-slate-200">
            <FaList className="text-xs" />
            <span>All Categories</span>
          </p>
          {[...Array(10).keys()].map((name) => (
            <div key={name}>
              <h2>Mobile accessories</h2>
            </div>
          ))}
        </div>
        <div className="col-span-10 flex flex-col gap-5">
          <div className="xl:grid grid-cols-2 hidden">
            <div className="flex items-center gap-5">
              <span>Sort By</span>
              <span className="bg-primary text-white font-semibold px-3 py-1 rounded-sm cursor-pointer">
                Popular
              </span>
              <span className="bg-primary text-white font-semibold px-3 py-1 rounded-sm cursor-pointer">
                Latest
              </span>
              <span className="bg-primary text-white font-semibold px-3 py-1 rounded-sm cursor-pointer">
                Top Sales
              </span>
              <SelectInput
                className="bg-white px-3 py-1 rounded-sm"
                children={["Low-to-High", "High-to-Low"]}
              />
            </div>
            <div className="flex items-center justify-end gap-0.5">
              <span className="bg-white p-2 rounded-sm cursor-pointer">
                <FaAngleLeft />
              </span>
              <span className="bg-white p-2 rounded-sm cursor-pointer">
                <FaAngleRight />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
            {[...Array(10).keys()].map((product) => (
              <Link to={`/product/${product}`}>
                <div
                  key={product}
                  className="bg-white group border border-slate-200 rounded-sm overflow-hidden w-full"
                >
                  <img
                    className="w-full"
                    src="https://down-my.img.susercontent.com/file/my-11134211-7rask-m8wzztgtgs8w06_tn.webp"
                    alt="product"
                  />
                  <div>
                    <div className="p-2 flex flex-col gap-3">
                      <h2 className="text-sm">{`DESSINI ITALY Granite Aluminium Non Stick Casserole...`}</h2>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary font-semibold ">
                          Price: 250TK
                        </span>
                        <span className="text-xs">Sold: 2.5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMall;
