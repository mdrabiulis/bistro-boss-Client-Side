import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Share File/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";

const Layout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login')
    console.log(location);
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default Layout;