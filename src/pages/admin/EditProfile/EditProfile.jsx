import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useUploadImageMutation } from "../../../store/main/services/imageUpload/imageUploadApi";
import toast from "react-hot-toast";
import { inputData } from "../../../data/main/inputData";
import SubmitButton from "../../../common/SubmitButton";
import SelectInput from "../../../common/SelectInput";
import LoadingSpinner from "../../../common/LoadingSpinner";
import Input from "../../../common/Input";
import { FaUserAlt } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

const EditProfile = () => {
  const [photo, setPhoto] = useState();
  const { handleSubmit, register, setValue } = useForm();
  const dispatch = useDispatch();
  const userLoading = false;

  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await uploadImage(formData).unwrap();
      setPhoto(response.data?.display_url);
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  const handleUpdatePersonalInfo = async (data) => {
    if (!photo) {
      toast.error("Photo is required", { id: "submit_error" });
      return;
    }
    console.log(data);
  };

  //   useEffect(() => {
  //     for (const key in userData) {
  //       if (Object.prototype.hasOwnProperty.call(userData, key)) {
  //         if (key === "_id") {
  //           continue;
  //         } else {
  //           setValue(key, userData[key]);
  //         }
  //       }
  //     }
  //     setPhoto(userData?.photo);
  //   }, [setValue, userData]);

  return (
    <div>
      <div className="flex p-5 flex-col gap-5">
        <div>
          <span className="font-bold text-xl">Edit profile</span>
        </div>
        <div className="overflow-hidden">
          {!userLoading ? (
            <form
              onSubmit={handleSubmit(handleUpdatePersonalInfo)}
              
            >
              <div className="rounded-full">
                <label
                  htmlFor="photo"
                  className="mb-1 inline-block rounded-full h-32 w-32 relative z-0"
                >
                  <div
                    className="h-32 w-32 border-2 border-accent rounded-full relative flex flex-col items-center justify-center cursor-pointer"
                    title="Personal photo"
                  >
                    {photo ? (
                      <img
                        className="w-full h-full rounded-full object-fill"
                        src={photo}
                        alt="photo"
                      />
                    ) : (
                      <FaUserAlt className="absolute w-full h-full p-2 rounded-full" />
                    )}
                    {isLoading && (
                      <div className="absolute h-full w-full bg-black opacity-100 rounded-full">
                        <ImSpinner9 className="h-full w-full animate-spin text-accent" />
                      </div>
                    )}

                    <div className="absolute h-full w-full rounded-full z-50">
                      <FaUserAlt className="h-full w-full text-primary rounded-full opacity-0 hover:opacity-100 bg-black duration-300 p-2" />
                    </div>
                  </div>
                </label>

                <Input
                  onChange={handleImageUpload}
                  className="hidden"
                  id="photo"
                  type="file"
                  accept="image/*"
                  required={false}
                  label="Select your photo"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-5 mt-5">
                {inputData?.personalData?.map(
                  ({
                    registerName,
                    label,
                    isRequired,
                    type,
                    data,
                    placeholder,
                  }) =>
                    !data ? (
                      <Input
                        {...register(registerName)}
                        key={registerName}
                        label={label}
                        required={isRequired}
                        type={type}
                        placeholder={placeholder}
                        // value={
                        //   registerName === "email" ? user?.email : undefined
                        // }
                        disabled={registerName == "email"}
                      />
                    ) : (
                      <SelectInput
                        {...register(registerName)}
                        label={label}
                        required={isRequired}
                        key={registerName}
                        placeholder={placeholder}
                        children={data}
                      ></SelectInput>
                    )
                )}
              </div>
              <div className="mt-5 flex flex-col justify-end items-end">
                <SubmitButton className="py-2 w-40">Save</SubmitButton>
              </div>
            </form>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
