import { Outlet } from "react-router";
import AdminLeft from "./AdminLeft";

const AdminLayout = () => {
  return (
    <div className="container my-[20px] overflow-hidden">
      <div className="grid grid-cols-12 gap-10 min-h-screen">
        <div className="col-span-2 pt-0 p-4 h-fit w-full relative">
          <AdminLeft />
        </div>
        <div className="col-span-10 bg-white border rounded-sm border-slate-200 p-5">
          <Outlet />
        </div>
      </div>
    </div>

    // <div className="container mt-[20px] overflow-visible">
    //   <div className="grid grid-cols-12 gap-10">
    //     <div className="col-span-2 gap-5 sticky top-60">
    //       <AdminLeft />
    //     </div>
    //     <div className="col-span-10 bg-white border rounded-sm border-slate-200 h-[calc(100vh-125px)] p-5">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
  );
};

export default AdminLayout;
