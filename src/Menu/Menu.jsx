import { Helmet } from "react-helmet-async";
import ItemCover from "../Hooks/ItemCover/ItemCover";

import useOurMenu from "../Hooks/Our Menu Item/useOurMenu";
import SectionTitle from "../Hooks/SectionTitle";
import MenuCategory from "../Hooks/MenuCategory/MenuCategory";
import menuImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";






const Menu = () => {
  const { ourPurpleMenu } = useOurMenu();
  const dessert = ourPurpleMenu.filter((item) => item.category === "dessert");
  const salad = ourPurpleMenu.filter((item) => item.category === "salad");
  const drinks = ourPurpleMenu.filter((item) => item.category === "drinks");
  const popular = ourPurpleMenu.filter((item) => item.category === "popular");
  const pizza = ourPurpleMenu.filter((item) => item.category === "pizza");
  const soup = ourPurpleMenu.filter((item) => item.category === "soup");
  const offered = ourPurpleMenu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>|Menu</title>
      </Helmet>

      <ItemCover img={menuImg} title="our menu"></ItemCover>
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>


      <MenuCategory items={dessert} title={"DESSERTS"} img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title={"PIZZA"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"SALADS"} img={saladImg}></MenuCategory>
      <MenuCategory items={pizza} title={"PIZZA"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title={"SOUPS"} img={soupImg}></MenuCategory>
      <MenuCategory items={drinks} title={"drinks"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
