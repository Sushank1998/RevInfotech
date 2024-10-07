import React from "react";

function SideItem({ title, price }) {
  return (
    <div className="flex justify-around items-center py-3">
      <div className="text-black font-bold xl:text-xl sm:text-lg">{title}</div>
      <div className="text-black font-bold xl:text-xl sm:text-lg">{price}</div>
    </div>
  );
}

function MidSide2() {
  const sideItems = [
    { title: "Rookie pack", price: "N2500" },
    { title: "Rookie pack", price: "N2500" },
    { title: "Rookie pack", price: "N2500" },
    { title: "Rookie pack", price: "N2500" },
  ];

  return (
    <div>
      <div className="min-h-[100px] rounded">
        <div className="xl:text-8xl sm:text-6xl font-bold text-center text-[#C1C2C4]">Wraps</div>
        {sideItems.map((item, index) => (
          <SideItem key={index} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default MidSide2;
