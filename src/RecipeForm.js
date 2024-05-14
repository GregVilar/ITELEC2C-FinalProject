import React, { useState } from "react";

function RecipeForm({ recipe, handleChange, handleSubmit }) {
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
    handleChange(e);
  };

  return (
    <form name="edit" onSubmit={handleSubmit}>
      <div className="create-input-container ">
        <div className="half-input">
          <input
            name="name"
            type="text"
            value={editedRecipe.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>

        <div className="half-input">
          <input
            name="cuisine"
            type="text"
            value={editedRecipe.cuisine}
            onChange={handleInputChange}
            placeholder="Cuisine"
          />
        </div>

        <div className="half-input">
          <input
            name="photo"
            type="text"
            value={editedRecipe.photo}
            onChange={handleInputChange}
            placeholder="Photo URL"
          />
        </div>

        <textarea
          name="ingredients"
          value={editedRecipe.ingredients}
          onChange={handleInputChange}
          placeholder="Ingredients"
        />

        <textarea
          name="preparation"
          value={editedRecipe.preparation}
          onChange={handleInputChange}
          placeholder="Preparation"
        />
      </div>

      <div className="create-button-container">
        <button type="submit" className="button-54 bttn-54pos">
          Save
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
