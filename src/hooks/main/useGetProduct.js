import { useSelector } from "react-redux";

export const useGetProduct = () => {
  return useSelector((state) => state?.session?.productReducer?.value);
};