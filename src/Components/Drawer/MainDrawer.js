import React, { useState } from "react";

const MainDrawer = () => {
  const options = [
    "Home",
    "Chat",
    "Group",
    "Notification",
    "Course",
    "Settings",
    "More",
  ];
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="col-span-1 flex flex-col gap-8 pt-5 border-r w-full">
      {options.map((option) => (
        <p
          onClick={() => selected !== option && setSelected(option)}
          key={option}
          className="flex items-center gap-8 relative cursor-pointer h-8"
        >
          {selected === option && (
            <div className="absolute w-1 bg-black h-full top-0 -left-3" />
          )}
          <img
            className="w-6"
            src={require(`../../Assets/drawerItems/${option}.png`)}
            alt=""
          />
          <span
            className={`hidden lg:block text-lg ${
              selected === option ? "font-bold" : "font-semibold"
            }`}
          >
            {option}
          </span>
        </p>
      ))}
      <button className="bg-black text-white py-2 rounded-full font-medium hidden lg:block mr-5">
        Create Campaign
      </button>
    </div>
  );
};

export default MainDrawer;
