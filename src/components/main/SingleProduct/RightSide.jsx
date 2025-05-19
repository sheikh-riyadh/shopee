import { useState } from "react";
import { FaMinus, FaPlus, FaShopify, FaShoppingBag } from "react-icons/fa";
import Button from "../../../common/Button";
import { numberWithCommas } from "../../../utils/numberWithCommas";

const RightSide = () => {
  const [buyQnt, setBuyQnt] = useState(1);

  const handleIncreament = () => {
    // if (product?.stock == buyQnt) {
    //   toast.error(`Can not add more than ${product?.stock} quantity`, {
    //     id: "stock_error",
    //   });
    // } else {
    //   setBuyQnt((prev) => prev + 1);
    //   dispatch(increament(product?._id));
    // }
    setBuyQnt((prev) => prev + 1);
  };

  const handleDecreament = () => {
    if (buyQnt >= 2) setBuyQnt((prev) => prev - 1);
    // dispatch(decreament(product?._id));
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-semibold text-xl text-black">
          POST OUT WITHIN 24 HOURS !!! SHARP NON STICK RICE COOKER Periuk Nasi
          Elektrik
        </h1>
      </div>

      <div>
        <div className="flex items-center gap-2 text-sm flex-wrap w-full">
          {[1].length ? (
            <p className="shadow-sm border border-slate-200 py-1 px-4 rounded-full text-black">
              {`Price : `}
              <span className="font-bold text-stech">
                {numberWithCommas(parseInt(1535))}TK
              </span>
            </p>
          ) : null}
          <p className="shadow-sm border border-slate-200 py-1 px-4 rounded-full text-black">
            {`Regular Price : `}
            <span className="font-bold text-stech">
              {numberWithCommas(parseInt(6875))}TK
            </span>
          </p>
          <p className="shadow-sm border border-slate-200 py-1 px-4 rounded-full text-black">
            {`Stock : `}
            <span className="font-bold text-stech">{"In"}</span>
          </p>
          <p className="shadow-sm border border-slate-200 py-1 px-4 rounded-full text-black">
            {`Brand : `}
            <span className="font-bold text-stech">Brand</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="font-semibold">Color:</span>
        <div className="flex flex-wrap gap-2 uppercase">
          {["sm", "md", "lg", "xl", "2xl", "3xl", "4xl"].map((size) => (
            <div className="font-medium border border-transparent px-3 py-1 bg-slate-200 rounded-sm hover:border-primary">
              <span>{size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="font-semibold">Price:</span>
        <div className="flex items-center gap-5">
          <span className="text-xl  font-semibold text-primary">15,320 TK</span>
          <span className="text-xl line-through font-semibold">17,320 TK</span>
       
        </div>
      </div>

      <div className="grid grid-cols-3 border items-center text-center rounded w-30">
        <Button
          onClick={handleDecreament}
          className="bg-transparent text-black"
          children={<FaMinus />}
        />
        <input
          className="focus:outline-none text-center "
          value={buyQnt}
          readOnly
        />
        <Button
          onClick={handleIncreament}
          className="bg-transparent text-black"
          children={<FaPlus />}
        />
      </div>

      <div className="flex items-center gap-5 xl:w-80">
        <Button
          className="uppercase w-full"
          children={
            <div className="flex items-center justify-center gap-3">
              <FaShopify className="text-xl hidden md:block" />
              <span>Add to cart</span>
            </div>
          }
        />
        <Button className="uppercase" children={<span>Buy now</span>} />
      </div>
    </div>
  );
};

export default RightSide;
