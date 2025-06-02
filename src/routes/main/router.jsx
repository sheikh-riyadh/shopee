import { createBrowserRouter } from "react-router";
import MainLayout from "../../layout/main/MainLayout";
import Home from "../../pages/main/Home/Home";
import Categories from "../../pages/main/Categories/Categories";
import SingleProduct from "../../pages/main/SingleProduct/SingleProduct";
import AdminLayout from "../../layout/admin/AdminLayout";
import AdminHome from "../../pages/admin/Home/AdminHome";
import AddProduct from "../../pages/admin/AddProduct/AddProduct";
import AddBanner from "../../pages/admin/AddBanner/AddBanner";
import EditProfile from "../../pages/admin/EditProfile/EditProfile";
import SignIn from "../../pages/main/Login/SignIn";
import ManageOrder from "../../pages/admin/Order/ManageOrder";
import AddCategory from "../../pages/admin/AddCategory/AddCategory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "category/:name",
        element: <Categories />,
      },
      {
        path: "product/:name",
        element: <SingleProduct />,
      },
      {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
          {
            path: "/dashboard",
            element: <AdminHome />,
          },
          {
            path: "manage-order",
            element: <ManageOrder />,
          },
          {
            path:"add-product",
            element:<AddProduct/>
          },
          {
            path:"add-banner",
            element:<AddBanner/>
          },
          {
            path:"edit-profile",
            element:<EditProfile/>
          },
          {
            path:"add-category",
            element:<AddCategory/>
          }
        ],
      },
    ],
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
]);

export default router;
