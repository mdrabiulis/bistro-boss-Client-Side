import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Home/Order/Order";
import Login from "../Pages/Login/Login";


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
        {
            path:"/login",
            element:<Login></Login>
        },
    ]
}])

export default Router;