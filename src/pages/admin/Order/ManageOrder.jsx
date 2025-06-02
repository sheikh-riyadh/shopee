import Input from "../../../common/Input";
import OrderTable from "../../../components/admin/Order/OrderTable";
import Button from "../../../common/Button";

const ManageOrder = () => {
  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <div>
          <div className="flex items-center gap-3 justify-end">
            <Input
            //   onChange={handleChange}
              placeholder="Search..."
              className="bg-slate-100 w-full rounded-sm"
            />
            <Button className="w-36 py-2.5">Find Order</Button>
          </div>
        </div>
        <OrderTable />
      </div>
    </div>
  );
};

export default ManageOrder;
