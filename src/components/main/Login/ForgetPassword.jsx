import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../common/Input";
import SubmitButton from "../../../common/SubmitButton";

const ForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleForgetPassword = async ({ email }) => {};

  return (
    <div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleForgetPassword)}
      >
        <Input
          {...register("email")}
          label="Please enter your email"
          required
          placeholder="example@gmail.com"
          type="email"
        />
        <SubmitButton isLoading={isLoading}>send</SubmitButton>
      </form>
    </div>
  );
};
export default ForgetPassword;
