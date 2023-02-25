import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function AddRecipe(props) {
 const navigate = useNavigate();

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [instructions, setInstructions] = useState("");


 function addRecipe(e){
    e.preventDefault();
    const postData ={
      name,
      ingredients,
      time,
      instructions
    };

    axios.post(
      `http://localhost:8000`,
      postData,
      )
    .then((response) =>{
      console.log(response);
    });
   
  }


  // const addRecipe = async () => {
  //   const formField = new FormData()
  //   formField.append('name', name)
  //   formField.append('ingredients', ingredients)
  //   formField.append('time', time)
  //   formField.append('instructions', instructions)
      
  //   await axios({
  //     method: 'post',
  //     url:'http://localhost:8000',
  //     data: formField
  //   }).then(response=>{
  //     console.log(response.data);
  //     navigate('/recipe')
  //   })
  // }

  return (
    
    <div className= 'container'>
      <h1>Create Recipe</h1>
      <form onSubmit={addRecipe}>
       
        <div className="form=group">
            <input
                type="text"
                className="form-control form_control-lg"
                placeholder="Enter Recipe Name"
                name="name"
                value={name}
                onChange={(e) =>setName(e.target.value)}/>
          </div>
          <div className="form=group">
            <input
                type="text"
                className="form-control form_control-lg"
                placeholder="Enter Ingredients"
                name="ingredients"
                value={ingredients}
                onChange={(e) =>setIngredients(e.target.value)}/>
          </div>

          <div className="form=group">
            <input
                type="text"
                className="form-control form_control-lg"
                placeholder="Enter Total Time"
                name="time"
                value={time}
                onChange={(e) =>setTime(e.target.value)}/>
           </div>
          <div className="form=group">
            <input
                type="text"
                className="form-control form_control-lg"
                placeholder="Enter Directions"
                name="instructions"
                value={instructions}
                onChange={(e) =>setInstructions(e.target.value)}/>
          </div>
          <button type="submit" onClick={onSubmit} className="btn-btn-success" >Add Recipe</button>
          </form>
          
      </div>
    
   
  )
}
export default AddRecipe