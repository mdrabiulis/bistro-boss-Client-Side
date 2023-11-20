import { Link } from "react-router-dom";
import ItemCover from "../ItemCover/ItemCover";
import MenuItems from "../MenuItems/MenuItems";


const MenuCategory = ({items, img, title}) => {
    return (
        <div className="py-10">
            { title && <ItemCover img={img} title={title}></ItemCover>}
        <div className="grid md:grid-cols-2 gap-4 pt-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
     {title &&  <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>}
        </div>
    );
};

export default MenuCategory;