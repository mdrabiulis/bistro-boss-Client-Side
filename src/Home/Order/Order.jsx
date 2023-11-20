import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderimg from "../../assets/shop/banner2.jpg";
import ItemCover from "../../Hooks/ItemCover/ItemCover";

import useOurMenu from "../../Hooks/Our Menu Item/useOurMenu";
import TabOder from "./TabOder/TabOder";
import { useParams } from "react-router-dom";
import { useState } from "react";





const Order = () => {

  const categoryes =["salad", "pizza", "soup", "dessert", "drinks"]
  const { category } = useParams();
  const initialIndex = categoryes.indexOf(category)
  console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex)

  const { ourPurpleMenu } = useOurMenu();
  const dessert = ourPurpleMenu.filter((item) => item.category === "dessert");
  const salad = ourPurpleMenu.filter((item) => item.category === "salad");
  const drinks = ourPurpleMenu.filter((item) => item.category === "drinks");

  const pizza = ourPurpleMenu.filter((item) => item.category === "pizza");
  const soup = ourPurpleMenu.filter((item) => item.category === "soup");

  return (
    <div>
      <ItemCover img={orderimg} title="Order foods"></ItemCover>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList className="text-center text-2xl font-bold">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <TabOder items={salad}></TabOder>
          </TabPanel>
          <TabPanel>
            <TabOder items={pizza}></TabOder>
          </TabPanel>
          <TabPanel>
            <TabOder items={soup}></TabOder>
          </TabPanel>
          <TabPanel>
            <TabOder items={dessert}></TabOder>
          </TabPanel>
          <TabPanel>
            <TabOder items={drinks}></TabOder>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
