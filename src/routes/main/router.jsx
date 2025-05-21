import { createBrowserRouter } from "react-router";
import MainLayout from "../../layout/main/MainLayout";
import Home from "../../pages/main/Home/Home";
import Categories from "../../pages/main/Categories/Categories";
import SingleProduct from "../../pages/main/SingleProduct/SingleProduct";
import AdminLayout from "../../layout/admin/AdminLayout";
import AdminHome from "../../pages/admin/Home/AdminHome";
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
        ],
      },
    ],
  },
]);

export default router;
