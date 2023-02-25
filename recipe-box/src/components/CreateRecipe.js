import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"


function CreateRecipe() {

  const navigate = useNavigate()

  const [recipeName, setRecipeName] = useState()
  const [ingredients, setRecipeIngredients] = useState()
  const [time, setRecipeTime] = useState()
  const [instructions, setRecipeInstructions] = useState()
  const [errors, setErrors] = useState()

  const handleRecipeNameChange = (e) => setRecipeName(e.target.value)
  const handleRecipeIngredientsChange = (e) => setRecipeIngredients(e.target.value)
  const handleRecipeTimeChange = (e) => setRecipeTime(e.target.value)
  const handleRecipeInstructionsChange = (e) => setRecipeInstructions(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipeObject = {
      name: recipeName,
      ingredients: ingredients,
      time: time,
      instructions: instructions
    }
    console.log(recipeObject)
    addRecipe(recipeObject)

  }
  const BASE_URL = "http://127.0.0.1:8000"

  const addRecipe = async (recipeObj) => {
    const url =  BASE_URL
    const context = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeObj)
    }
    const resp = await fetch(url, context)
    const body = await resp.json()
    if (resp.status === 400) {
      setErrors(body)
    } else {
      navigate("/recipe")
    }
  }
return(
  <div className= 'container'>
      <h2>Create Recipe</h2>
      {errors && <h4>{JSON.stringify(errors)}</h4>}
      
      <div className="form=group">
      {/* <label htmlFor="recipeName">Name:</label> */}
      <input type="text" className="form-control form_control-lg" placeholder="Enter Recipe Name" value={recipeName} name="recipeName" onChange={handleRecipeNameChange}></input>
      </div>
      
      <div className="form=group">
      {/* <label htmlFor="recipeIngredients">Ingredients:</label> */}
      <input type="text" className="form-control form_control-lg" placeholder="Enter Ingredients" value={ingredients} name="recipeIngredients" onChange={handleRecipeIngredientsChange}></input>
      </div>
    
      <div className="form=group">
      {/* <label htmlFor="recipeTime">Cooking Time:</label> */}
      <input type="text" className="form-control form_control-lg" placeholder="Enter Total Time" value={time} name="recipeTime" onChange={handleRecipeTimeChange}></input>
      </div>
     
      <div type="text" className="form=group">
      {/* <label htmlFor="recipeInstructions">Instructions:</label> */}
      <input className="form-control form_control-lg" placeholder="Enter Directions" value={instructions} name="recipeInstructions" onChange={handleRecipeInstructionsChange}></input>
      </div>
     
      
      <button className="btn-btn-success" onClick={handleSubmit}>Submit</button>
     
    </div>
  )}

export default CreateRecipe