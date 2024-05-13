import React from "react";
import { useRecipeContext } from "./AppContext";
import IngredientsList from "./IngredientsList";

export default function Recipe(props) {
  const { handleRecipeSelect, handleRecipeDelete } = useRecipeContext();

  const { id, name, cookTime, servings, instructions, ingredients } = props;

  return (
    <div>
      <div className="recipe-card-container">
        <div className="card recipe-card">
          <div className="recipe-card__header">
            <h1 className="recipe-card__title">{name}</h1>
            <div>
              <button
                className="button-5 recipe-card__edit-button"
                onClick={() => handleRecipeSelect(id)}
              >
                Edit
              </button>
              <button
                className="button-6 recipe-card__delete-button"
                onClick={() => handleRecipeDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="recipe-card__quantity-container">
            <span className="recipe-card__label">CookTime: </span>
            <span className="recipe-card__value">{cookTime}</span>
          </div>
          <div className="recipe-card__quantity-container">
            <span className="recipe-card__label">Servings: </span>
            <span className="recipe-card__value">{servings}</span>
          </div>
          <div className="recipe-card__quantity-container">
            <span className="recipe-card__label">Instructions: </span>
            <span className="recipe-card__value">
              {instructions.substring(0, 200) +
                (instructions.length > 200 ? "..." : "")}
            </span>
          </div>
          <IngredientsList
            ingredients={ingredients}
            style={{ color: "white" }}
          />
          {/* <div className="recipe-card__quantity-container">
                        <span className="recipe-card__label">Ingredients: </span>
                        <span className="recipe-card__value">{ingredients}</span>
                        </div> */}
        </div>
      </div>
    </div>
  );
}

<button class="" role="button">
  Button 5
</button>;
