import React from 'react'
import { useState} from 'react'
import Recipe from '../Recipe';
import Trivia from './Trivia';


function Recipes() {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_ID, API_KEY)

  const [recipes, setRecipes] = useState([]);
  const[search,setSearch] = useState('');

  const getRecipes = async (q) => {
    const response = await fetch
      (`https://api.edamam.com/search?q=${q}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
     console.log(data);

  };
  const updateSearch = e => {
    setSearch(e.target.value)
  };

  const getSearch = e => {
    e.preventDefault();
    getRecipes(search)
  }
  return (
    <div>
    <div className="App-header">
    <h1 className="title-text"> My Recipe Box </h1>
  </div>
  <form className="search-form" onSubmit={getSearch}>
    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
    <button className="search-button" type="submit" >Search</button>
  </form>
  <div className="recipes">
  {recipes !==[] && recipes.map(recipe => (
    <Recipe
      key={recipe.recipe.label} recipe={recipe}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      url={recipe.recipe.url}
    />

    ))}
  </div>
  <img className="front-image" src="/seafood.jpg" alt="image" />
  <Trivia />
  </div>
  )
}

export default Recipes