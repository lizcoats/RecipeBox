const BASE_URL = "http://127.0.0.1:8000/recipes/"

const fetchRecipeByID = async (id) => {
  const response = await fetch(`${BASE_URL}${id}`)
  const data = await response.json();
  return data;
};



const fetchRecipes = async (filters = null) => {
  const url =  BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};



export {
  fetchRecipeByID,
  fetchRecipes,
 
};