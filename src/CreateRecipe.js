import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

const CreateRecipe = () => {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  const editRecipe = (editedRecipe, index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[index] = editedRecipe;
    setRecipes(updatedRecipes);
  };

  return (
    <div className="cr-bg1">
      <header>
        <h1 className="h1-create">🍽 Make your own Bytes.</h1>
      </header>
      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
        editRecipe={editRecipe}
      />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
};

export default CreateRecipe;
