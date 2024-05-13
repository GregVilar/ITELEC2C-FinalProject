import React from "react";
import Recipe from "./Recipe";
import { useRecipeContext } from "./AppContext";

export default function RecipeList() {
  const { recipes, handleRecipeAdd } = useRecipeContext();
  return (
    <div>
      <div className="recipe-butt">
        <button className="button-64" onClick={() => handleRecipeAdd()}>
          <span class="text">Add Your Own Byte</span>
        </button>
      </div>

      <div className="recipe-list d-flex flex-row ">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
}
