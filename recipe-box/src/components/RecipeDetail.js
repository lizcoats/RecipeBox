import React from 'react';
import { useEffect,useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function RecipeDetail() {

const [ recipe, setRecipe ] = useState(null);
const {id} = useParams()
const navigate = useNavigate()

useEffect(() => {
      getRecipe()
    }, [id])

const getRecipe = async() =>{
  const response = await fetch(`/${id}`)
  const data = await response.json()
  console.log(data)
  setRecipe(data)
}

return (
      <div>
        <h1>Recipe Details</h1>
        <hr></hr>
        <div className="single-recipe">
          <h2>{recipe?.name}</h2>
          <p>INGREDIENTS: <br></br>{recipe?.ingredients}</p>
          <p>INSTRUCTIONS:<br></br>{recipe?.instructions}</p>
          <p>Duration:{recipe?.time} minutes</p>

        <Link className="btn-btn-primary m-2" to={`recipe/${recipe.id}/update`}>Update</Link>
        <Link className="btn-btn-primary m-2">Delete</Link>
        </div>
      </div>
   
    
  )
}


export default RecipeDetail
