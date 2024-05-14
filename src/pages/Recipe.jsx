import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions")
  const params = useParams()
  useEffect(() => {
    getRecipes();
  }, )


  const getRecipes = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=5e01b415916a469faa335bc14d6ebd57`);
    const dat = await data.json();
    console.log(dat);
    setRecipe(dat);
  }
  return (
    <div>
      {
        recipe !== undefined &&
        <DetailWrapper className="recipe">
          <div className='contentDiv'>
            <h2>{recipe.title}</h2>
            <ImageWrapper>
              <img className="recipeImage" src={recipe.image} alt={recipe.title} />
            </ImageWrapper>
          </div>
          <Info className="Info">
            <Tabs>
              <Button className={activeTab === "instructions" ? "active":""} onClick={() => { setActiveTab("instructions") }}>Instructions</Button>
              <Button className={activeTab === "ingredients" ? "active":""} onClick={() => { setActiveTab("ingredients") }}>Ingredients</Button>
            </Tabs>
            {activeTab === "instructions" && (
              <div>
                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                <p style={{ marginTop: "0.5rem" }} dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div>
                <ul>
                  {
                    recipe.extendedIngredients.map((ingredient) =>
                      (
                        <li key={ingredient.id}>{ingredient.original}</li>
                      ))
                  }
                </ul>
              </div>
            )}
          </Info>
        </DetailWrapper>
      }
      {
        recipe === undefined &&
        <h1 style={{ textAlign: "center" }}>Oops, something wrong with your network!!!</h1>
      }
    </div>
  )
}


const DetailWrapper = styled.div`
  display: flex;
  margin: 2rem auto;


  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
`


const ImageWrapper = styled.div`
  width: 60%;
  margin-right: 1rem;


  img {
    width: 150%;
    height: auto;
    border-radius: 3rem;
  }
`


const Tabs = styled.div`
  display: flex;
  margin-bottom: 3rem;
  border-bottom: 1px solid #313131;
`


const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 2rem;
  color: #313131;
  background: white;
  border: none;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;


  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`


const Info = styled.div`
  flex: 1;


  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }


  ul {
    margin-top: 2rem;


    li {
      font-size: 1.2rem;
      line-height: 2.5rem;
    }
  }
`


export default Recipe
