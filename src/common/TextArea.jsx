import { forwardRef } from "react";
import cn from "../utils/cn";

const TextArea = forwardRef(({ className, label = "", ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="flex items-center gap-1 py-2 font-medium text-sm text-white">
          {label} {rest?.required && <span className={"text-danger"}>*</span>}
        </label>
      )}
      <textarea
        className={cn(
          `focus:outline-none bg-gray-100 w-full p-2 rounded-md`,
          className
        )}
        {...rest}
        ref={ref}
      />
    </div>
  );
});
export default TextArea;
