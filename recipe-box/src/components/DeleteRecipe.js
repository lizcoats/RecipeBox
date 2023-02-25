import React from 'react'

function DeleteRecipe() {

  const BASE_URL = "http://127.0.0.1:8000/recipes/"

  const deleteRecipe = async (recipe) => {
    const url = "http://127.0.0.1:8000/recipes/${recipe.id}"
    const context = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    }
    const resp = await fetch(url, context)
    const body = await resp.json()
    if (resp.status === 400) {
      setErrors(body)
    } else {
      navigate("/")
    }
  }
  
  return (
    <div>
      <button onClick={deleteRecipe()}>delete</button>
        </div>
  )
}

export default DeleteRecipe