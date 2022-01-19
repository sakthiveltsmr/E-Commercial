import React from "react";
import { Annnouncement } from "../component/Annnouncement";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
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
      <Newsletter />
      <Footer />
    </div>
  );
}
