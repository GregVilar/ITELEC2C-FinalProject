import React, { useState } from "react";
import RecipeEdit from "./RecipeEdit";

function RecipeList({ recipes, deleteRecipe, editRecipe }) {
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  };

  const handleDelete = (index) => {
    deleteRecipe(index);
  };

  const handleEditSubmit = (editedRecipe) => {
    editRecipe(
      editedRecipe,
      recipes.findIndex((r) => r.name === editedRecipe.name)
    );
    setEditingRecipe(null);
  };

  return (
    <div className="recipe-list sketchy">
      <table>
        <thead>
          <tr className="header-row">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr
              key={index}
              className={
                recipe.name === "Tuna Poke with Mango"
                  ? "tuna-poke"
                  : recipe.name === "Guacamole"
                  ? "guacamole"
                  : ""
              }
            >
              <td className="content_td1">{recipe.name}</td>
              <td className="content_td1">{recipe.cuisine}</td>
              <td>
                <img
                  src={recipe.photo}
                  alt={recipe.name}
                  width="100"
                  height="100"
                />
              </td>
              <td className="content_td">
                <p>{recipe.ingredients}</p>
              </td>
              <td className="content_td">
                <p>{recipe.preparation}</p>
              </td>
              <td>
                <button
                  name="edit"
                  className="button-54"
                  onClick={() => handleEdit(recipe)}
                >
                  Edit
                </button>
                <button
                  name="delete"
                  className="button-55"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingRecipe && (
        <RecipeEdit
          recipe={editingRecipe}
          editRecipe={handleEditSubmit}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

export default RecipeList;
