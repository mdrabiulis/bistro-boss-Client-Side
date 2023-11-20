

import SectionTitle from "../../Hooks/SectionTitle";
import useOurMenu from "../../Hooks/Our Menu Item/useOurMenu";
import MenuCategory from "../../Hooks/MenuCategory/MenuCategory";

const OurMenu = () => {
  const { ourPurpleMenu } = useOurMenu();
  const Purple = ourPurpleMenu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <MenuCategory items={Purple}></MenuCategory>
    </section>
  );
};

export default OurMenu;
