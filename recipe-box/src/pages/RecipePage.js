import React from 'react';
import { useEffect,useState, useContext} from 'react';
import {Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import axios from 'axios'
import AuthContext from '../context/AuthContext';

function RecipePage() {

const [ recipe, setRecipe ] = useState(null);
const {id} = useParams()
const navigate = useNavigate()
let {authTokens} = useContext(AuthContext)

useEffect(() => {
      getRecipe()
    }, [id])

const getRecipe = async() =>{
  const response = await fetch(`http://127.0.0.1:8000/recipes/${id}`, {
    method: "GET",
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(authTokens.access)
    }
  })
  const data = await response.json()
  setRecipe(data)
}

const headers = { 
  'Authorization': 'Bearer ' + String(authTokens.access),
 
};
  const deleteRecipe = async (id) =>{
  await axios.delete(`http://127.0.0.1:8000/recipes/${id}`, {headers})
  navigate("/recipe")
}
return(
  
  <div className="recipes-card-info">
  
       <div onChange={(e) => {setRecipe({'...recipe': e.target.value})}}>
        {
          <Card className="m-3 rounded shadow-lg" style={{ width: '22em' }}>
            <Card.Body>
              <Card.Title>{recipe?.name}</Card.Title>
              <Card.Text> INGREDIENTS: {recipe?.ingredients} </Card.Text>
              <Card.Text> DIRECTIONS: {recipe?.instructions} </Card.Text>
              <Card.Text> Prep and cook time: {recipe?.time} minutes</Card.Text>
              <Link className="search-button m-2" to={`/${id}/update`}>Update</Link>
              <Link className="search-button m-2" onClick={() =>deleteRecipe(recipe.id)}>Delete</Link>
            </Card.Body>
          </Card>
        }
      </div>
  </div>
  )
}

export default RecipePage



//  return (
//      <div className='recipes'>
//        <div className='recipes-header'>
//        </div>
//          <div onChange={(e) => {setRecipe({'...recipe': e.target.value})}}>
//         <h1>{recipe?.name}</h1>
//         <h2>INGREDIENTS: <br></br>{recipe?.ingredients}</h2>
//          <h2>INSTRUCTIONS:<br></br>{recipe?.instructions}</h2>
//          <p>Duration:{recipe?.time} minutes</p>
//         <Link className="btn-btn-primary m-2" to={`/${id}/update`}>Update</Link>
//         <Link className="btn-btn-primary m-2" onClick={() =>deleteRecipe(recipe.id)}>Delete</Link>
//        </div>
//      </div>
//    )
//  }

//  export default RecipePage 