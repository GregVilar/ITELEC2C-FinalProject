import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    makeRequest();
  }, []);

  const makeRequest = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const data = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=5e01b415916a469faa335bc14d6ebd57&number=9"
      );
      const dat = await data.json();
      localStorage.setItem("popular", JSON.stringify(dat.recipes));
      setPopular(dat.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h2 className="popular-title">Popular Picks</h2>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {popular.map((recipe) => (
            <SplideSlide key={recipe.title}>
              <Link to={"/recipe/" + recipe.id}>
                <Card className="card">
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  <Title>{recipe.title}</Title>
                </Card>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2rem 0rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  min-height: 250px;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 2rem;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const Title = styled.p`
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 10;
  transform: translate(-50%, 0);
  color: white;
  width: 100%;
  text-align: center;
  // font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Popular;
