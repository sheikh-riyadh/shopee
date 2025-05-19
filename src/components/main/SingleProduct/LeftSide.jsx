import { PhotoProvider, PhotoView } from "react-photo-view";
const LeftSide = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <PhotoProvider>
          <div>
            <PhotoView
              src={`https://down-my.img.susercontent.com/file/my-11134207-7r98v-llboxegaejcda9@resize_w450_nl.webp`}
            >
              <img
                className="rounded cursor-pointer h-[400px] w-full"
                src={`https://down-my.img.susercontent.com/file/my-11134207-7r98v-llboxegaejcda9@resize_w450_nl.webp`}
                alt="product"
              />
            </PhotoView>
          </div>

          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((product) => (
              <div key={product}>
                <PhotoView src={`/src/assets/main/banner_${product}.jpeg`}>
                  <img
                    className="w-20 h-14 rounded cursor-pointer"
                    src={`/src/assets/main/banner_${product}.jpeg`}
                    alt="product"
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default LeftSide;
