import React from "react";
import AddBanner from "../Components/Home/AddBanner";
import Creators from "../Components/Home/Creators";
import Drawer from "../Components/Home/Drawer";
import Sponsorships from "../Components/Home/Sponsorships";
import TopCarousel from "../Components/Home/TopCarousel";
import Topics from "../Components/Home/Topics";

const Home = () => {
  return (
    <div className="grid grid-cols-12 pl-3 pr-5">
      <Drawer />
      <div className="h-[90vh] overflow-y-scroll py-5 pl-5 lg:px-5 col-span-11 lg:col-span-6 flex flex-col gap-20">
        <TopCarousel />
        <Creators type={"Trending"} />
        <Sponsorships />
        <AddBanner />
        <Creators type={"Top"} />
        <AddBanner />
      </div>
      <Topics />
    </div>
  );
};

export default Home;
