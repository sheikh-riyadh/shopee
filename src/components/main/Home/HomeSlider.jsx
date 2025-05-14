import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import customSliderBullets from "../../../utils/customSliderBullets";

const HomeSlider = () => {
  return (
      <div className="xl:grid xl:grid-cols-12 gap-3">
        <div className="col-span-8 mb-3 xl:mb-0">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            style={customSliderBullets(15,"#ee4d2d","#fff", 15, 50)}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            {[1, 2, 3, 4].map((banner) => (
              <SwiperSlide key={banner}>
                <div className="xl:h-[268px]">
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
        <div className="col-span-4">
          <div className="flex flex-row xl:flex-col gap-3">
            <div className="xl:h-32">
              <img
                className="h-full w-full xl:object-fill rounded-sm"
                src={`src/assets/main/banner_1.jpeg`}
                alt="banner_image"
              />
            </div>
            <div className="xl:h-32">
              <img
                className="h-full w-full xl:object-fill rounded-sm"
                src={`src/assets/main/banner_4.jpeg`}
                alt="banner_image"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeSlider;
