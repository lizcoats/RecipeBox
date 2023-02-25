import React from 'react'

import axios from 'axios';
import {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const RecipesList = () => {

    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const response = await axios.get('http://localhost:8000')
        setRecipes(response.data)
    }

    useEffect(() => {
        getRecipes();
    }, [])

  
    return (
        <div>

            <div className="recipes-card-info">
            {
                recipes.map((recipe, index) => (
                    <Card className="m-3 rounded shadow-lg" style={{ width: '22em' }}>
                      <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text> INGREDIENTS: {recipe.ingredients} </Card.Text>
                        {/* <Card.Text> {recipe.time} </Card.Text>
                        <Card.Text> {recipe.instructions} </Card.Text> */}
                        {/* <Button variant="primary">Full Details</Button> */}
                        <Link className="btn btn-primary m-2" to={`/${recipe.id}/`}>Full Detail</Link>
                       
                      </Card.Body>
                    </Card>
                ))
            }
            </div>
           
        </div>
    );
};
export default RecipesList