import { forwardRef } from "react";
import cn from "../utils/cn";

const SelectInput = forwardRef(
  ({ className, label = "", children = [], ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="flex items-center gap-1 py-2 font-medium text-sm">
            {label} {rest?.required && <span className={"text-danger"}>*</span>}
          </label>
        )}
        <select
          className={cn(
            `focus:outline-none bg-gray-100 w-full py-2 px-2 rounded-md`,
            className
          )}
          {...rest}
          ref={ref}
        >
          <option value="" disabled selected>
            Select
          </option>
          {children.map((child) => (
            <option value={child}>{child}</option>
          ))}
        </select>
      </div>
    );
  }
);

export default SelectInput;
