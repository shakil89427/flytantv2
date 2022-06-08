import React from "react";
import Drawer from "../Components/Home/Drawer";
import TopCarousel from "../Components/Home/TopCarousel";
import Topics from "../Components/Home/Topics";

const Home = () => {
  return (
    <div className="px-5 grid grid-cols-12">
      <Drawer />
      <div className="h-[90vh] overflow-y-scroll pt-5 px-5 col-span-11 lg:col-span-6">
        <TopCarousel />
      </div>
      <Topics />
    </div>
  );
};

export default Home;
