import React from 'react'
import addIcon from "../assets/addIcon.png";

function Card({title, price, description, img}) {
  return (
    <div>
       <div>
        
        <div className=" min-w-[60%] md:max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 flex justify-between items-start p-4">
          <img src={img} alt="" className="w-20 h-20" />
          <div className='flex flex-col  items-start w-2/3 '>
            <h2 className="text-black font-bold text-xl">{title}</h2>
            <p className="text-black text-sm">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <h2 className="text-black  text-sm">{price}</h2>
            <img src={addIcon} alt="" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
