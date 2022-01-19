import React from "react";
import { Annnouncement } from "../component/Annnouncement";
import Categories from "../component/Categories";
import Navbar from "../component/Navbar";
import Products from "../component/Products";
import Slider from "../component/Slider";

export default function Home() {
  return (
    <div>
      <Annnouncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}
