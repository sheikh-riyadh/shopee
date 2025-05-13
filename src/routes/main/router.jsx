import { createBrowserRouter } from "react-router";
import MainLayout from "../../layout/main/MainLayout";
import Home from "../../pages/main/Home/Home";
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])


export default router