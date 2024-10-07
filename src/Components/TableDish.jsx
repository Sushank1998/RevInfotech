import React, { useState } from "react";
import Card from "./Card";
import loneranger from "../assets/lone-ranger.png";
import valuepack from "../assets/value-pack.png";
import familypack from "../assets/family-pack.png";
import wings from "../assets/Wings.png";

const data = {
  img: {
    img1: loneranger,
    img2: valuepack,
    img3: familypack,
    img4: wings,
  },
  title: {
    title1: "Lone Ranger",
    title2: "Value Pack",
    title3: "Family Pack",
    title4: "Rookie Pack",
  },
  price: {
    price1: "N 2,000",
    price2: "N 2,500",
    price3: "N 7,500",
    price4: "N 2,000",
  },
  description: {
    description1: "3 wings, 1 Jollof or Fiesta Rice, 1 drink",
    description2: "6 wings, 1 French Fries",
    description3: "18 Wings. 3 Jollof or Fiesta Rice. 3 Drinks",
    description4: "6 Wings, 1 Flavor",
  },
};

function TabItem({ label, isActive, onClick }) {
  return (
    <li className="mr-1">
      <a
        className={`bg-white inline-block py-2 px-4 ${
          isActive ? "border-l border-t border-r rounded-t text-[#EF9C00] font-semibold" : ""
        }`}
        
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
}

function TableDish() {
  const [activeTab, setActiveTab] = useState("Meal Deals");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Meal Deals":
        return (
          <div className="meal_Deals">
            <h2 className="text-black font-bold text-xl mt-6">Meal Deals</h2>
            <Card 
              title={data.title.title1}
              price={data.price.price1}
              description={data.description.description1}
              img={data.img.img1}
            />
            <Card 
              title={data.title.title2}
              price={data.price.price2}
              description={data.description.description2}
              img={data.img.img2}
            />
            <Card 
              title={data.title.title3}
              price={data.price.price3}
              description={data.description.description3}
              img={data.img.img3}
            />
          </div>
        );
      case "Wings":
        return (
          <div className="Wings">
            <h2 className="text-black font-bold text-xl mt-6">Wings</h2>
            <Card 
              title={data.title.title4}
              price={data.price.price4}
              description={data.description.description4}
              img={data.img.img4}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const tabs = [
    { label: "Meal Deals" },
    { label: "Wings" },
    { label: "Sandwiches" },
    { label: "Wraps" },
    { label: "Sides" },
    { label: "Salads" },
    { label: "Wing Cafe" },
    { label: "Party Packs" },
  ];

  return (
    <div className="ml-2">
      <div className="md:w-3/4 max-w-3xl">
        <div className="overflow-x-auto">
          <ul className="flex border-b whitespace-nowrap">
            {tabs.map((tab) => (
              <TabItem 
                key={tab.label} 
                label={tab.label} 
                isActive={activeTab === tab.label} 
                onClick={() => handleTabClick(tab.label)} 
              />
            ))}
          </ul>
        </div>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default TableDish;
