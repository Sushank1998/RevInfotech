import React from "react";

function SideItem({ title, price }) {
  return (
    <div className="flex justify-around items-start py-3">
      <div className="text-black font-bold xl:text-xl sm:text-lg">{title}</div>
      <div className="text-black font-bold xl:text-xl sm:text-lg">{price}</div>
    </div>
  );
}

function MidSide4() {
  const sideItems = [
    { title: "Rookie pack", price: "N2500" },
    { title: "Rookie pack", price: "N2500" },
    { title: "Rookie pack", },
    { title: "Rookie pack",},
  ];

  return (
    <div>
      <div className="min-h-[100px] rounded">
        <div className="xl:text-8xl sm:text-6xl font-bold text-center text-[#C1C2C4]">Dips</div>
        {sideItems.map((item, index) => (
          <SideItem key={index} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default MidSide4;
