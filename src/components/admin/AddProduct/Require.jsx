
const Require = ({ fileSize }) => {
  return (
    <div className="">
      <span className="absolute top-0 left-0 text-xs text-white bg-primary p-1 rounded-r-2xl">
        required
      </span>
      <span className="absolute bottom-1 left-1.5 text-sm text-accent">{fileSize}</span>
    </div>
  );
};
export default Require;