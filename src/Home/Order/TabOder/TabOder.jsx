import FoodCard from "../../../Share File/FoodCard/FoodCard";

const TabOder = ({items}) => {
    return (
        <div>
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
        </div>
    );
};

export default TabOder;