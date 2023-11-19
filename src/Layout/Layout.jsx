import { Outlet } from "react-router-dom";
import Footer from "../Share File/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;