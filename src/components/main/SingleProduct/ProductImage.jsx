import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const ProductImage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 bg-white p-5 rounded-sm shadow-sm border border-slate-100">
        <LeftSide />
        <RightSide />
      </div>
      <div className="bg-white rounded-sm shadow-sm border border-slate-100 p-5 flex flex-col gap-5">
        <span className="font-semibold text-2xl"> Description</span>
        <p>
          Smart SEK-PC55SS 5.5 Liters Pressure Cooker The Smart SEK-PC55SS 5.5
          Liters Pressure Cooker is a highly useful and well-designed kitchen
          appliance ideal for families or small groups of 6-7 people. It is made
          of superior 2S grade aluminum, which offers high heat conductivity for
          faster and more consistent cooking, making meal preparation more
          efficient and convenient. This SMART SEK-PC55SS Pressure Cooker is
          perfect for cooking a wide range of foods, including rice, beans,
          soups, and stews, and it has a roomy 5.5 liter capacity. Any kitchen's
          beauty is improved by the elegant and appealing design, which
          skillfully combines style and functionality. It has a long-lasting,
          heat-resistant Bakelite handle that provides a secure and pleasant
          grip while in use. The cooker has a safety security valve to ensure
          user safety by avoiding over-pressurization. It weighs 2.5 kg and
          finds the ideal combination between durability and portability. This
          SMART Pressure Cooker is a dependable and adaptable alternative that
          is intended to make cooking a pleasant and easy experience. Whether
          you're preparing meals for a large family or cooking smaller portions,
          the SEK-PC55SS Pressure Cooker is the perfect addition to your
          kitchen. This SMART Cooker offers both convenience and safety, making
          it a top choice for home chefs.
        </p>
      </div>
    </div>
  );
};

export default ProductImage;
