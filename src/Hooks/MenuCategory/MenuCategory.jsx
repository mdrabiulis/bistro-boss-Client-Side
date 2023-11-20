import ItemCover from "../ItemCover/ItemCover";
import MenuItems from "../MenuItems/MenuItems";


const MenuCategory = ({items, img, title}) => {
    return (
        <div className="">
            { title && <ItemCover img={img} title={title}></ItemCover>}
        <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
        </div>
    );
};

export default MenuCategory;