import React from "react";

export default function IngredientsList({ ingredients }) {
  return (
    <div>
      <h2 className="recipe-card__label">Ingredients</h2>
      {ingredients.map((ingredient) => (
        <div
          className="ingredient-list__container recipe-cards-container"
          key={ingredient.id}
        >
          <ul>
            <li className="ingredient__list-item d-flex justify-content-between recipe-cards-container">
              <span>{ingredient.amount}</span>
              <span>{ingredient.name}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
