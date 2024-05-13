import React from "react";
import HeaderCard from "./HeaderCard";
import { useRecipeContext } from "./AppContext";

export default function Header() {
  const { recipes, handleRecipeSelect } = useRecipeContext();

  return (
    <div>
      <div className="header-create"> 🍥Create your own Bytes.</div>
      <div className="d-flex justify-content-center ">
        <div className="d-flex flex-row recipe-list-l">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <HeaderCard
                recipe={recipe}
                handleRecipeSelect={handleRecipeSelect}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
