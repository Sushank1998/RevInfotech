import React from 'react';

function SandwichItem({ title, price }) {
  return (
    <div className="flex justify-around items-center py-3">
      <div className="text-black font-bold xl:text-xl sm:text-lg">{title}</div>
      <div className="text-black font-bold xl:text-xl sm:text-lg">{price}</div>
    </div>
  );
}

function RightSide4() {
  const sandwichItems = [
    { title: 'Rookie pack', price: 'N2500' },
    { title: 'Rookie pack', price: 'N2500' },
    { title: 'Rookie pack', price: 'N2500' },
    { title: 'Rookie pack', price: 'N2500' },
  ];

  return (
    <div>
      <div className="min-h-[100px] rounded py-6">
        <div className="xl:text-6xl sm:text-4xl font-bold text-center text-[#C1C2C4]">
        Milk shake
        </div>
        {sandwichItems.map((item, index) => (
          <SandwichItem key={index} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default RightSide4;
