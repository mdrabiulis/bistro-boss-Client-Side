import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import Menu from "../Menu/Menu";


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
    ]
}])

export default Router;