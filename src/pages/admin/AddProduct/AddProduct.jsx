import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import DescriptionInfo from "../../../components/admin/AddProduct/DescriptionInfo";
import SubmitButton from "../../../common/SubmitButton";
import BasicInfo from "../../../components/admin/AddProduct/BasicInfo";
import { useGetProduct } from "../../../hooks/main/useGetProduct";
import StockPriceAndQuantity from "../../../components/admin/AddProduct/StockPriceAndQuantity";

const AddProduct = () => {
  const { handleSubmit, register, setValue } = useForm();
  const { keyFeatures, productImages } = useGetProduct();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const location = useLocation();
  const updateData = location?.state?.payload;

  const handleOnSubmit = async (data) => {
    console.log({ ...data, keyFeatures, productImages });
  };

  return (
    <div className="w-full overflow-hidden">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        onKeyDown={handleKeyDown}
        className="overflow-hidden"
      >
        <BasicInfo register={register} setValue={setValue} />
        <DescriptionInfo content={content} setContent={setContent} />
        <StockPriceAndQuantity register={register} />

        {/* <div className="rounded-md overflow-hidden shadow bg-widget">
          <div className="mb-5 bg-stech text-white p-5">
            <span>Additional Information</span>
          </div>
          <div className="flex flex-col gap-1 p-5">
            <JoditTextArea
              content={additionalInfo}
              handleAdditional={handleAdditionalInfo}
              height={"450px"}
            />
          </div>
        </div>

        <div className="rounded-md overflow-hidden shadow bg-widget">
          <div className="mb-5 bg-stech text-white p-5">
            <span>Delivery Information</span>
          </div>
          <div className="flex flex-col gap-1 p-5">
            <DeliveryInfo register={register} watch={watch} />
          </div>
        </div> */}
        <div className="flex flex-col items-end justify-end">
          <SubmitButton className="w-40">Save</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
