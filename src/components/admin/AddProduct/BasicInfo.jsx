import { FaCircle, FaTimes } from "react-icons/fa";
import Input from "../../../common/Input";
import ImageUpload from "../../../common/ImageUpload";
import { useGetProduct } from "../../../hooks/main/useGetProduct";
import {
  handleAdd,
  handleRemove,
} from "../../../store/admin/features/product/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const BasicInfo = ({ register, setValue }) => {
  const [isColorsEnable, setIsColorsEnable] = useState(false);
  const [isSizeEnable, setIsSizeEnable] = useState(false);

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

  const handleDeleteFeature = (data) => {
    dispatch(handleRemove(data));
  };

  return (
    <div className="flex flex-col gap-1 p-5">
      <span className="py-2 block font-medium text-sm text-black">
        Product Image:
      </span>
      <ImageUpload from="product" />
      <div>
        <Input
          {...register("title")}
          label={"Title"}
          required
          placeholder="Product title"
        />
      </div>

      <div className="flex gap-5 items-center">
        {["colors", "size"].map((value) => (
          <span
            onClick={() =>
              value == "colors"
                ? setIsColorsEnable((prev) => !prev)
                : setIsSizeEnable((prev) => !prev)
            }
            className="py-2 font-medium text-sm text-black flex items-center gap-3 cursor-pointer"
          >
            {value}:
            <FaCircle
              className={`${
                value == "colors" && isColorsEnable
                  ? "text-blue-600"
                  : value == "size" && isSizeEnable
                  ? "text-blue-600"
                  : undefined
              }`}
            />
          </span>
        ))}
      </div>

      <div className={`${isColorsEnable ? "block" : "hidden"}`}>
        <div>
          <Input
            {...register("colors")}
            onKeyDown={handleProductKeyFeature}
            placeholder="Color then enter *"
          />

          <div className="flex items-center gap-2 flex-wrap mt-3">
            {colors?.map((color) => (
              <div
                key={color}
                className="px-2 flex items-center gap-2 bg-primary text-white rounded-full"
              >
                <span className="text-sm font-bold">{color}</span>
                <span>
                  <FaTimes
                    onClick={() =>
                      handleDeleteFeature({ name: "colors", data: color })
                    }
                    className="text-sm text-danger cursor-pointer bg-gray-200 rounded-full p-0.5 hover:text-white hover:bg-danger duration-300"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${isSizeEnable ? "block" : "hidden"}`}>
        <div>
          <Input
            {...register("size")}
            onKeyDown={handleProductKeyFeature}
            placeholder="Size then enter *"
          />

          <div className="flex items-center gap-2 flex-wrap mt-3">
            {size?.map((size) => (
              <div
                key={size}
                className="px-2 flex items-center gap-2 bg-primary text-white rounded-full"
              >
                <span className="text-sm font-bold">{size}</span>
                <span>
                  <FaTimes
                    onClick={() =>
                      handleDeleteFeature({ name: "size", data: size })
                    }
                    className="text-sm text-danger cursor-pointer bg-gray-200 rounded-full p-0.5 hover:text-white hover:bg-danger duration-300"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
