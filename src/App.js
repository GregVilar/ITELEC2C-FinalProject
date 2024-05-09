import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Navbars.js";
import Home from "./Home.js";
import CreateRecipe from "./CreateRecipe.js";
import SearchRecipe from "./SearchRecipe.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />;
          <Route path="/CreateRecipe" element={<CreateRecipe />} />;
          <Route path="/SearchRecipe" element={<SearchRecipe />} />;
        </Routes>
      </Router>
    </>
  );
}

export default App;
