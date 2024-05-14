import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setRecipe({ ...recipe, photo: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!recipe.name) {
      newErrors.name = "Name is required";
    }

    if (!recipe.cuisine) {
      newErrors.cuisine = "Cuisine is required";
    }

    if (!recipe.ingredients) {
      newErrors.ingredients = "Ingredients are required";
    }

    if (!recipe.preparation) {
      newErrors.preparation = "Preparation is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addRecipe(recipe);
      setRecipe({
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="recipe-create">
      <form name="create" onSubmit={handleSubmit}>
        <div className="create-input-container sketchy1">
          <div className="input-container half-input">
            {errors.name && <div className="error-bubble">{errors.name}</div>}
            <input
              className="input__field"
              name="name"
              type="text"
              value={recipe.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>

          <div className="input-container half-input">
            {errors.cuisine && (
              <div className="error-bubble">{errors.cuisine}</div>
            )}
            <input
              className="input__field"
              name="cuisine"
              type="text"
              value={recipe.cuisine}
              onChange={handleChange}
              placeholder="Cuisine"
            />
          </div>

          <div className="input-container half-input">
            <input
              className="input__field"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="input-container">
            {errors.ingredients && (
              <div className="error-bubble">{errors.ingredients}</div>
            )}
            <textarea
              className="input__field"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
            />
          </div>

          <div className="input-container">
            {errors.preparation && (
              <div className="error-bubble">{errors.preparation}</div>
            )}
            <textarea
              className="input__field"
              name="preparation"
              value={recipe.preparation}
              onChange={handleChange}
              placeholder="Preparation"
            />
          </div>

          <button type="submit" className="button-56">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecipeCreate;
