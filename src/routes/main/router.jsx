import { createBrowserRouter } from "react-router";
import MainLayout from "../../layout/main/MainLayout";
import Home from "../../pages/main/Home/Home";
import Categories from "../../pages/main/Categories/Categories";
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },{
                path:'category/:name',
                element:<Categories/>
            }
        ]
    }
])


export default router