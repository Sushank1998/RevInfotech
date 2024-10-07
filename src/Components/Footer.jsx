import React from 'react';
import footer from '../assets/footer.png';
import arrow from '../assets/arrow.png';
import social from '../assets/social.png';

function Footer() {
  return (
    <div
      className="relative w-full h-[450px] bg-auto bg-no-repeat"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="absolute top-1/3 right-8 flex flex-col items-end space-y-3 p-4">
        <h2 className="text-right text-black font-bold text-xl md:text-2xl">
          Get the gist on new products, offers & discounts
        </h2>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full p-4 pr-12 rounded-full border border-gray-300"
            placeholder="Enter your email"
          />
          <img
            src={arrow}
            alt="Arrow"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6"
          />
        </div>
        <div>
          <ul className="flex flex-wrap justify-end mt-10  text-[#707070] space-x-4">
            <li>About us</li>
            <li>Services</li>
            <li>Products</li>
            <li>Offers</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex items-center mt-9 text-sm md:text-lg">
          <img src={social} alt="Social Media" className="w-20" />
          <p className="ml-2">2022 Wingside Foods</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
