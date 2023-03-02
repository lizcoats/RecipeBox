import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const UpdateRecipe = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    let {authTokens} = useContext(AuthContext)

    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [time, setTime] = useState('')
    const [instructions, setInstructions] = useState('')

    const loadRecipes = async() =>{
    const response = await fetch(`/${id}`, {
        method: "GET",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
        }
      })
      const data = await response.json()
      console.log(data.name)
         setName(data.name);
         setIngredients(data.ingredients);
         setTime(data.time);
         setInstructions(data.instructions);
    }


    useEffect(() => {
        loadRecipes();
    }, [])

    const updateRecipe = async()=>{
      let formField = new FormData()
      formField.append('name',name)
      formField.append('ingredients',ingredients)
      formField.append('time',time)
      formField.append('instructions',instructions)

      const response = await fetch(`/${id}`, {
        method: "OPTIONS",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
        }
      })
      const data = await response.json()
      console.log(data)
      navigate('/recipe')
    }
    
 
  
  const handleSubmit =() =>{
    updateRecipe()
    navigate("/recipe")
   
  }

return (
 
        <div className="container">

    <h2 style={{color:"#340529"}}>Update A Recipe</h2>
    
    <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Recipe Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
    </div>
     
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Total Time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Directions"
          name="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </div>
      
      <button className= "search-button" onClick={handleSubmit}>Update Recipe</button>
  </div>
   );
};
export default UpdateRecipe;