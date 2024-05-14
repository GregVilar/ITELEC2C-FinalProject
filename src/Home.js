import React from "react";
import { Link } from "react-router-dom";
import SearchRecipe from "./SearchRecipe.js";
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          Serving up recipes <span>Byte by Byte</span>
        </h3>
        <p>Where every click is a culinary adventure..</p>
        <a href={<SearchRecipe />} className="btn" id="rcpbtn">
          SEARCH RECIPES
        </a>
      </div>
    </section>
  );
};

export default Home;
