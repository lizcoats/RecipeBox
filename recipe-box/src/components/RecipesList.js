import React from 'react'
import {useState, useEffect, useContext} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';



const RecipesList = () => {
   
const [recipes, setRecipes] = useState([])
let {authTokens} = useContext(AuthContext)



    const getRecipes = async () => {
        
        const response = await fetch('http://localhost:8000/recipes', {
        // const base_url = process.env.REACT_APP_BASE_URL
        // const response = await fetch(`http://${base_url}`, {
            method: "GET",
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access)
            }
          })
        const data = await response.json()
        
        console.log(data)
        setRecipes(data)
    }

    useEffect(() => {
        getRecipes();
    }, [])

  
    return (
        <div>
            <div className="recipes-card-info">
            {
                recipes.map((recipe, index) => (
                    <Card key={index} className="m-3 rounded shadow-lg" style={{ width: '22em' }}>
                      <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text> INGREDIENTS: {recipe.ingredients} </Card.Text>
                        {/* <Card.Text> {recipe.time} </Card.Text>
                        <Card.Text> {recipe.instructions} </Card.Text> */}
                        {/* <Button variant="primary">Full Details</Button> */}
                        <Link className="search-button" to={`/${recipe.id}/`}>Full Detail</Link>
                       
                      </Card.Body>
                    </Card>
                ))
            }
            </div>
           
        </div>
    );
};
export default RecipesList