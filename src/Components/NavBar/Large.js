import React from "react";
import { FiSearch } from "react-icons/fi";

const Large = () => {
  return (
    <div className="flex items-center justify-between w-3/4">
      <form
        className="flex bg-gray-100 items-center rounded-full overflow-hidden px-5 h-10 w-[60%] gap-2"
        action="#"
      >
        <FiSearch />
        <input
          className="bg-gray-100 border-0 outline-none w-full"
          type="text"
          placeholder="Search 'Fashion Influencer'"
        />
      </form>
      <div className="flex items-center gap-10">
        <button className="border-2 border-black font-semibold text-lg rounded-md px-5 h-10">
          Contact
        </button>
        <div
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/87/f7/6d/87f76d29e53a139f9ee74637636ba5b3.jpg)`,
          }}
          className="h-10 w-10 bg-cover bg-center bg-no-repeat rounded-full"
        />
      </div>
    </div>
  );
};

export default Large;
