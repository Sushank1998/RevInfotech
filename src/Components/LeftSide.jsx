import React from 'react';

function MenuItem({ title, description, price }) {
  return (
    <div className="gap-4 py-4 flex justify-center items-start">
      <div>
        <h2 className="text-black font-bold xl:text-xl sm:text-lg">{title}</h2>
        <p className="text-black text-sm">{description}</p>
      </div>
      <h2 className="text-black font-bold text-xl">{price}</h2>
    </div>
  );
}

function LeftSide() {
  const menuItems = [
    { title: 'Rookie pack', description: '6 wings 1 flavor', price: 'N2500' },
    { title: 'Rookie pack', description: '6 wings 1 flavor', price: 'N2500' },
    { title: 'Rookie pack', description: '6 wings 1 flavor', price: 'N2500' },
    { title: 'Rookie pack', description: '6 wings 1 flavor', price: 'N2500' },
  ];

  return (
    <div className='mt-[80px]'>
      <div className="flex items-center justify-center">
        <div className="text-[#C1C2C4] transform -rotate-90 xl:text-8xl sm:text-6xl font-bold text-center -ml-[100px]"><h1>wings</h1></div>
        <div>
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index} 
              title={item.title} 
              description={item.description} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
