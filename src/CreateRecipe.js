import React from "react";
import RecipeList from "./components/RecipeList";
import "./css/app.css";
import AppContext from "./components/AppContext";
import RecipeEditContainer from "./components/RecipeEditContainer";
import Header from "./components/Header";

const CreateRecipe = () => {
  return (
    <div className="cr-bg">
      <AppContext>
        <Header />
        <RecipeList />
        <RecipeEditContainer />
      </AppContext>{" "}
    </div>
  );
};

export default CreateRecipe;
