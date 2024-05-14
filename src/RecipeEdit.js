import React, { useState } from "react";
import RecipeForm from "./RecipeForm";

function RecipeEdit({ recipe, editRecipe, handleEditSubmit }) {
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditSubmit(editedRecipe);
  };

  return (
    <div className="recipe-edit">
      <RecipeForm
        recipe={editedRecipe}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RecipeEdit;
