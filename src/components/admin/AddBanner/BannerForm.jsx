import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useUploadImageMutation } from "../../../store/main/services/imageUpload/imageUploadApi";
import Input from "../../../common/Input";
import SubmitButton from "../../../common/SubmitButton";
const BannerForm = ({ setIsModalOpen, updateData }) => {
  const [image, setImage] = useState();
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const { handleSubmit, register, setValue } = useForm();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await uploadImage(formData).unwrap();
      if (response?.data?.display_url) {
        setImage(response.data?.display_url);
      } else {
        toast.error("Something went wrong 😓", { id: "upload_error" });
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  const handleCategory = async (data) => {
    if (!image) {
      toast.error("Banner image is required", { id: "category_error" });
      return;
    }
    if (!updateData?._id) {
      console.log(data);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (updateData?._id) {
      setValue("category", updateData?.category);
      setImage(updateData?.image);
    }
  }, [setValue, updateData]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCategory)}
        className="flex flex-col gap-4"
      >
        <Input
          {...register("url")}
          label={"URL"}
          placeholder={"Banner URL"}
          className="rounded-sm"
          type={"url"}
        />
        <div className={"h-44 w-full"}>
          <label
            htmlFor="location"
            className="rounded-full inline-block my-1 w-full"
          >
            <div
              className={`h-44 w-full  rounded-md relative flex flex-col items-center justify-center cursor-pointer overflow-hidden ${
                isLoading && "cursor-wait"
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt="location_image"
                  className="h-full w-full object-fill rounded-md"
                />
              ) : (
                <p className="flex flex-col gap-1 items-center justify-center font-medium w-full h-full bg-gray-100">
                  <FaUpload />
                  <span>Click to upload</span>
                </p>
              )}

              {isLoading && (
                <div className="absolute h-full w-full rounded bg-black flex items-center justify-center">
                  <ImSpinner9 className="animate-spin text-primary text-4xl" />
                </div>
              )}
            </div>
          </label>
          <Input
            {...register("image")}
            onChange={(e) => handleImageUpload(e)}
            className="hidden"
            id="location"
            type="file"
            accept="image/*"
            disabled={isLoading}
          />
        </div>

        <SubmitButton disabled={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

export default BannerForm;
