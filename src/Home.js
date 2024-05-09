import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          Serving up recipes <span>Byte by Byte</span>
        </h3>
        <p>
          Where every click is a culinary adventure..
        </p>
        <a href="#" className="btn" id="rcpbtn">VIEW RECIPES</a>
      </div>
      </section>
  );
};

export default Home;
