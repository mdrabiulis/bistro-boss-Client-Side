import { useEffect, useState } from "react";
import MenuItems from "../../Hooks/MenuItems/MenuItems";
import SectionTitle from "../../Hooks/SectionTitle";

const OurMenu = () => {
  const [ourPurpleMenu, setOurPurpleMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PurpleMenu = data.filter((item) => item.category === "popular");
        setOurPurpleMenu(PurpleMenu);
      });
  }, []);
  return (
    <section >
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {ourPurpleMenu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      ;
    </section>
  );
};

export default OurMenu;
