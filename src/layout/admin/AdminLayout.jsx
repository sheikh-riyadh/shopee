import { Outlet } from "react-router";
import AdminLeft from "./AdminLeft";

const AdminLayout = () => {
  return (
    <div className="container mt-[20px]">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-2 gap-5">
          <AdminLeft />
        </div>
        <div className="col-span-10 bg-white border rounded-sm border-slate-200 h-[calc(100vh-125px)] p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
