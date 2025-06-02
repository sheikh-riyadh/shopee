import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import SubmitButton from "../../../common/SubmitButton";
import Input from "../../../common/Input";
import { FaHome } from "react-icons/fa";
import Button from "../../../common/Button";
import Modal from "../../../common/Modal";
import ForgetPassword from "../../../components/main/Login/ForgetPassword";


const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const disptach = useDispatch();

  const handleLogin = async ({ email, password }) => {
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full my_container">
      <div className="md:w-4/5 lg:w-4/6 xl:w-7/12 bg-white shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden md:h-2/5 lg:h-[420px] xl:h-4/6">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col items-center justify-center gap-5 w-full p-7"
        >
          <h1 className="font-bold text-3xl capitalize">Sign In</h1>
          <div className="w-full flex flex-col gap-5">
            <Input
              {...register("email")}
              placeholder="Email *"
              type="email"
              required
            />
            <Input
              {...register("password")}
              placeholder="*******"
              type="password"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <span
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="text-sm cursor-pointer"
            >
              Forget Your Password?
            </span>
            <SubmitButton isLoading={isLoading} className="w-40">
              Sign In
            </SubmitButton>
          </div>
        </form>
        <div className="bg-primary flex flex-col gap-5 items-center justify-center p-7 text-center text-white order-first md:order-none rtl-animation relative">
          <Link to="/" title="Return main website">
            <FaHome className="text-5xl border p-2 rounded-full" />
          </Link>
          <h2 className="font-bold text-3xl capitalize">Hello, Friend</h2>
          <span>
            Register with your personal details to use all of the site features
          </span>
          <Link to="/sign-up">
            <Button className="w-40 bg-transparent border">Sign Up</Button>
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          className="w-[350px]"
          title="Forget Password"
        >
          <ForgetPassword />
        </Modal>
      )}
    </div>
  );
};

export default SignIn;