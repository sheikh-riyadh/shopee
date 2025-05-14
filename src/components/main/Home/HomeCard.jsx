import { FaLaptop } from "react-icons/fa";

const HomeCard = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
      {[
        "Laptop Finder",
        "Raise a Complain",
        "Home Service",
        "Service Center",
      ].map((content) => (
        <div className="shadow rounded-sm p-5 w-full font-semibold flex flex-col xl:flex-row items-center justify-center gap-5 bg-white">
          <div className="h-12 w-12 bg-primary flex flex-col items-center justify-center rounded-full text-white">
            <FaLaptop />
          </div>
          <div>
            <h2>{content}</h2>
            <span className="text-sm font-normal">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
