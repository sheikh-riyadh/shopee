import { createBrowserRouter } from "react-router";
import MainLayout from "../../layout/main/MainLayout";
import Home from "../../pages/main/Home/Home";
import Categories from "../../pages/main/Categories/Categories";
import SingleProduct from "../../pages/main/SingleProduct/SingleProduct";
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
    ],
  },
]);

export default router;
