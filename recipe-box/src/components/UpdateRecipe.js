import React, {useState, useEffect, useContext} from 'react';
import { Form, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios'

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
       let formField = new FormData() /*The FormData() constructor creates a new FormData object.*/
       formField.append('name',name)
       formField.append('ingredients',ingredients)
       formField.append('time',time)
       formField.append('instructions',instructions)
       
        await axios({
          method: 'PUT',
          url: `http://127.0.0.1:8000/${id}/`,
          data: formField,
          headers:{
            'Authorization': 'Bearer ' + String(authTokens.access),
            'Content-Type': 'application/json'
          } 
        }).then(response => {
        console.log(response.data);
        navigate("/recipe");
    })
    
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
      
      <button className= "search-button" onClick={updateRecipe}>Update Recipe</button>
  </div>
   );
};
export default UpdateRecipe;