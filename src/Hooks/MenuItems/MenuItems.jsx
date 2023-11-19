const MenuItems = ({ item }) => {
  const { name, recipe, image,  price } = item;
  return (
    <div className="flex space-x-2">
      <img style={{borderRadius: '0 200px 200px 200px '}} className="w-[90px]" src={image} alt="" />
      <div className="">
        <h3 className="uppercase">{name}----------</h3>
        <p className="">{recipe}</p>
      </div>
        <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItems;
