import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useUploadImageMutation } from "../store/main/services/imageUpload/imageUploadApi";
import { handleDeleteProductImage, handleProductImages } from "../store/admin/features/product/productSlice";
import { FaPlus, FaTrash } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import Input from "./Input";
import Require from "../components/admin/AddProduct/Require";
import { useGetProduct } from "../hooks/main/useGetProduct";


const ImageUpload = ({ from = "banner" }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [uploadImage, { isLoading }] = useUploadImageMutation();
   const { productImages } = useGetProduct();

  const dispatch = useDispatch();
  const images = from == "banner" ? [...Array(4).fill(null)] : productImages;

  const handleImageUpload = async (event, index) => {
    setImageIndex(index);
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await uploadImage(formData).unwrap();
      if (from == "banner") {
        // dispatch(
        //   handleBannerImages({
        //     index,
        //     data: response.data?.display_url,
        //   })
        // );
      } else {
        dispatch(
          handleProductImages({
            index,
            data: response.data?.display_url,
          })
        );
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  const handleDelete = (index) => {
    if (from == "banner") {
    //   dispatch(handleDeleteBannerImage(index));
    } else {
      dispatch(handleDeleteProductImage(index));
    }
  };

  return (
    <div className="grid md:grid-cols-4 gap-5">
      {[...Array(images?.length).keys()].map((_, index) => (
        <div key={index} className="mb-5 h-40 w-full relative">
          {!images[index] ? (
            <label
              htmlFor={`photo-${index}`}
              className="inline-block my-1 w-full"
            >
              <div
                className={`group h-40 w-full border-2 border-primary border-dotted rounded-md relative flex flex-col items-center justify-center cursor-pointer ${
                  isLoading && "cursor-wait"
                }`}
              >
                <p className="flex flex-col gap-1 items-center justify-center text-2xl font-bold text-stech w-full h-full">
                  <FaPlus className="group-hover:rotate-180 duration-1000 border text-4xl p-2 rounded-full" />
                  {from === "banner" && index === 0 ? (
                    <Require fileSize={"980 X 500"} />
                  ) : from === "product" ? (
                    <Require fileSize={"500 X 500"} />
                  ) : (
                    <span className="absolute bottom-1 left-1.5 text-sm text-accent">
                      982 X 500
                    </span>
                  )}
                </p>

                {isLoading && imageIndex === index && (
                  <div className="absolute h-full w-full rounded bg-white flex items-center justify-center">
                    <ImSpinner9 className="animate-spin text-stech text-4xl" />
                  </div>
                )}
              </div>
            </label>
          ) : (
            <div className="h-full w-full absolute border-2 border-dotted border-stech rounded-md my-1">
              <img
                src={images[index]}
                alt={`Uploaded ${index}`}
                className="h-full w-full object-fill rounded-md"
              />

              <div className="flex flex-col border justify-center items-center duration-300 absolute top-2 right-2 text-white w-7 h-7 p-1 bg-danger hover:opacity-70 rounded-full cursor-pointer">
                <FaTrash onClick={() => handleDelete(index)} />
              </div>
            </div>
          )}
          <Input
            onChange={(e) => handleImageUpload(e, index)}
            className="hidden z-0"
            id={`photo-${index}`}
            type="file"
            accept="image/*"
            disabled={isLoading || images[index]}
          />
        </div>
      ))}
    </div>
  );
};
export default ImageUpload;