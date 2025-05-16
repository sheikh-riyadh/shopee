import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import customSliderBullets from "../../../utils/customSliderBullets";
const Mall = () => {
  return (
    <div className="p-5 bg-white rounded-sm">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <h2 className="text-primary">Shopee</h2>
          <div className="flex items-center gap-5">
            <span>100% Authentic</span>
            <span>15 Days Return*</span>
            <span>Free Shipping</span>
          </div>
        </div>
        <div className="xl:grid xl:grid-cols-12 gap-5">
          <div className="col-span-4">
            <Swiper
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              style={customSliderBullets(15, "#ee4d2d", "#fff", 15, 50)}
              loop={true}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Autoplay, Pagination]}
            >
              {[1, 2, 3, 4].map((banner) => (
                <SwiperSlide key={banner}>
                  <div className="xl:h-[275px] w-full">
                    <img
                      className="h-full object-fill rounded-sm w-full"
                      src={`src/assets/main/banner_${banner}.jpeg`}
                      alt="banner_image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[...Array(8).keys()].map((mall) => (
                <div
                  key={mall}
                  className="border-b border-slate-200 rounded-sm flex flex-col items-center justify-center relative group"
                >
                  <img
                    className="h-32 w-32"
                    src="https://down-my.img.susercontent.com/file/my-11134258-7rase-m4irkjra34wp97@resize_w201_nl.webp"
                    alt="mall"
                  />

                  <div className="absolute hidden group-hover:flex flex-col items-center justify-center bg-[#222222cb] h-full w-full text-white">
                    <span className="cursor-pointer">Shop Now</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mall;
