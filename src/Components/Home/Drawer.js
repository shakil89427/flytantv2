import React, { useState } from "react";

const Drawer = () => {
  const options = ["Home", "Sponsorships", "Notification", "Settings", "More"];
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="col-span-1 lg:col-span-3 flex flex-col gap-8 py-5 lg:pr-5 border-r w-full h-[90vh] overflow-y-scroll">
      {options.map((option) => (
        <p
          onClick={() => selected !== option && setSelected(option)}
          key={option}
          className="flex items-center gap-8 relative cursor-pointer h-8  pl-2"
        >
          {selected === option && (
            <span className="absolute w-1 bg-black h-full top-0 left-0" />
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
      <button className="bg-black text-xl text-white py-4 rounded-full w-full font-medium hidden lg:block mr-5">
        Create Campaign
      </button>
    </div>
  );
};

export default Drawer;
