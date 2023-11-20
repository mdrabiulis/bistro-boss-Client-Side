import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Home/Order/Order";


const Router = createBrowserRouter([{
    path:"/",
    element: <Layout></Layout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/menu",
            element:<Menu></Menu>
        },
        {
            path:"/order/:category",
            // path:"/order",
            element:<Order></Order>
        },
    ]
}])

export default Router;