import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Cusine() {
  const params = useParams();
  const [cuisine, setCuisine] = useState([]);
  const getRequests = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=3515191ef66d419baacfd269e5450414&cuisine=${name}`
    );
    const dat = await data.json();
    console.log(dat.results);
    setCuisine(dat.results);
  };
  useEffect(() => {
    getRequests(params.type);
  }, [params.type]);
  return (
    <div>
      {cuisine !== undefined && (
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "1rem",
            }}
          >
            {cuisine.map((el) => {
              return (
                <SplideSlide key={el.id}>
                  <Link to={"/recipe/" + el.id}>
                    <Card>
                      <img src={el.image} />
                      <TitleContainer>
                        <h4>{el.title}</h4>
                      </TitleContainer>
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </Grid>
      )}

      {cuisine === undefined && (
        <h1 style={{ textAlign: "center" }}>
          Oops, something wrong with your network!!!
        </h1>
      )}
    </div>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;

const Card = styled.div`
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 20rem;
  position: relative;
  overflow: hidden;
  img {
    border-radius: 2rem;
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
  Link {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    text-decoration: none;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  text-align: center;
`;

export default Cusine;
