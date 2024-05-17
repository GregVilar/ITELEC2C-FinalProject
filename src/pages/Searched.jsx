import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();

  useEffect(() => {
    getRequests(params.search);
  }, [params.search]);

  const getRequests = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=3515191ef66d419baacfd269e5450414&query=${name}`
    );
    const dat = await data.json();
    setSearched(dat.results);
    console.log(dat);
  };

  return (
    <div>
      {searched !== undefined && (
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {searched.map((el) => {
            return (
              <SplideSlide key={el.id}>
                <Link to={"/recipe/" + el.id}>
                  <Card>
                    <img src={el.image} alt={el.title} />
                    <h4>{el.title}</h4>
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      )}

      {searched === undefined && (
        <h1 style={{ textAlign: "center" }}>
          Oops, something wrong with your network!!!
        </h1>
      )}
    </div>
  );
}

const Card = styled.div`
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 20rem;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  img {
    border-radius: 2rem;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 0 0 2rem 2rem;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default Searched;
