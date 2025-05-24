import cn from "../utils/cn";


const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={cn(
        `w-full bg-primary p-2.5 text-white rounded-sm font-medium text-sm uppercase hover:opacity-85 cursor-pointer`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
