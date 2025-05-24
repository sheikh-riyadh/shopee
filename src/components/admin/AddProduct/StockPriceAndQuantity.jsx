import Input from "../../../common/Input";

const StockPriceAndQuantity = ({ register }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-5 p-5">
      <Input
        required
        placeholder={"Price"}
        label={"Price"}
        {...register("price")}
        type="number"
        min={"1"}
      />
      <Input
        placeholder={"Special Price"}
        label={"Special Price"}
        {...register("specialPrice")}
        type="number"
        min={"0"}
      />
      <Input
        required
        placeholder={"Stock / Quantity"}
        label={"Stock"}
        {...register("stock")}
        type="number"
        min={"0"}
      />
      <Input
        placeholder={"Discount"}
        label={"Discount"}
        {...register("discount")}
        type="number"
        min={"0"}
      />
    </div>
  );
};
export default StockPriceAndQuantity;
