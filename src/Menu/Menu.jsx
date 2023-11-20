import { Helmet } from "react-helmet-async";
import ItemCover from "../Hooks/ItemCover/ItemCover";
import menuImg from '../assets/menu/banner3.jpg'
import OurMenu from "../Home/OurMenu/OurMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
            <title>|Menu</title>
            </Helmet>
            
            <ItemCover img={menuImg} title="our menu"></ItemCover>
            <OurMenu></OurMenu>
 
            <ItemCover img={menuImg} title="our menu"></ItemCover>
            <OurMenu></OurMenu>
 
            <ItemCover img={menuImg} title="our menu"></ItemCover>
            <OurMenu></OurMenu>
 
            <ItemCover img={menuImg} title="our menu"></ItemCover>
            <OurMenu></OurMenu>
 
        </div>
    );
};

export default Menu;