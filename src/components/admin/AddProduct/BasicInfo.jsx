import { FaTimes } from "react-icons/fa";
import Input from "../../../common/Input";
import ImageUpload from "../../../common/ImageUpload";
import { useGetProduct } from "../../../hooks/main/useGetProduct";
import {
  handleAdd,
  handleRemoveKeyFeatures,
} from "../../../store/admin/features/product/productSlice";
import { useDispatch } from "react-redux";

const BasicInfo = ({ register, setValue }) => {
  const { keyFeatures, colors, size } = useGetProduct();
  const dispatch = useDispatch();

  const handleProductKeyFeature = (event) => {
    const name = event.target.name;
    if (event.key === "Enter") {
      const data = event.target.value;
      if (!keyFeatures.includes(data) && name == "keyFeatures") {
        setValue("keyFeatures", "");
        dispatch(handleAdd({ name, data }));
      } else if (!colors.includes(data) && name == "colors") {
        dispatch(handleAdd({ name, data }));
        setValue("colors", "");
      } else if (!size.includes(data) && name == "size") {
        dispatch(handleAdd({ name, data }));
        setValue("size", "");
      }
    }
  };

  const handleDeleteKeyFeatures = (deleteFeatureItem) => {
    dispatch(handleRemoveKeyFeatures(deleteFeatureItem));
  };

  return (
    <div className="flex flex-col gap-1 p-5">
      <span className="py-2 block font-medium text-sm text-black">
        Product Image:
      </span>
      <ImageUpload from="product" />
      <div>
        <Input
          {...register("videoURL")}
          label={"Video URL"}
          placeholder="URL"
        />
      </div>
      <div>
        <Input
          {...register("title")}
          label={"Title"}
          required
          placeholder="Product title"
        />
      </div>
      <span className="py-2 block font-medium text-sm text-black">
        Key Features <span className="text-danger">*</span>
      </span>
      <div>
        <Input
          {...register("keyFeatures")}
          onKeyDown={handleProductKeyFeature}
          placeholder="Enter"
        />

        <div className="flex items-center gap-2 flex-wrap mt-3">
          {keyFeatures?.map((feature) => (
            <div
              key={feature}
              className="px-2 flex items-center gap-2 bg-primary text-white rounded-full"
            >
              <span className="text-sm font-bold">{feature}</span>
              <span>
                <FaTimes
                  onClick={() => handleDeleteKeyFeatures(feature)}
                  className="text-sm text-danger cursor-pointer bg-gray-200 rounded-full p-0.5 hover:text-white hover:bg-danger duration-300"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
