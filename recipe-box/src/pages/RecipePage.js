import React from 'react';
import { useEffect,useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import UpdateRecipe from '../components/UpdateRecipe';
import axios from 'axios'

function RecipePage() {

const [ recipe, setRecipe ] = useState(null);
const {id} = useParams()
const navigate = useNavigate()

useEffect(() => {
      getRecipe()
    }, [id])

const getRecipe = async() =>{
  const response = await fetch(`/${id}`)
  const data = await response.json()
  setRecipe(data)
}
  

const updateRecipe = async () => {
  fetch(`/${id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
  })
}

const handleSubmit =() =>{
  updateRecipe()
  navigate("/recipe")
 
}
const deleteRecipe = async (id) =>{
  await axios.delete(`/${id}`)
  navigate("/recipe")
}
return (
    <div className='recipes'>
       <div className='recipes-header'>
        <button onClick={handleSubmit}>Back</button>
       </div>
      <div onChange={(e) => {setRecipe({'...recipe': e.target.value})}}>
      <h1>{recipe?.name}</h1>
      <h2>INGREDIENTS: <br></br>{recipe?.ingredients}</h2>
      <h2>INSTRUCTIONS:<br></br>{recipe?.instructions}</h2>
      <p>Duration:{recipe?.time} minutes</p>
      <Link className="btn-btn-primary m-2" to={`/${id}/update`}>Update</Link>
      <Link className="btn-btn-primary m-2" onClick={() =>deleteRecipe(recipe.id)}>Delete</Link>
        {/* <UpdateRecipe recipe={recipe} /> */}
      </div>
    </div>
    
  )
}

export default RecipePage





// import React from 'react';
// import MyRecipe from '../components/MyRecipe'
// import { fetchRecipeByID } from '../API/RecipesAPI';
// import {useParams } from 'react-router-dom';
// import { useEffect,useState } from 'react'


// function RecipePage() {
//   const [ recipe, setRecipe ] = useState(null);
//   const {id} = useParams()
//   // console.log("id:", id)

//   useEffect(() => {
//      getRecipe()
//   }, [id])

//   const getRecipe= async () => {
//   if (id === 'new') return

//   const response = await fetch(`http://127.0.0.1:8000/recipes/${id}`)
//   const data = await response.json()
//   setRecipe(data)
// }

// let handleChange = (value) => {
//   setRecipe(recipe => ({ ...recipe, 'name': value }))
//   console.log('Handle Change:', recipe)
// }
// return (
//   <>
//   <h1 onChange={(e) => { handleChange(e.target.value) }} value={recipe?.name}></h1>
//   <MyRecipe recipe={recipe}/>
// </>
// )
// }
// export default RecipePage;
  





// async function getRecipe() {
  //     try {
  //       const res = await fetchRecipeByID(id)
  //       console.log("response:", res)
  //       setRecipe(res.result)
  //     } catch (error) {
  //       console.error('Error occurred fetching data: ', error);
  //     }
  //   }







//   const NotePage = ({ match, history }) => {

//     let noteId = match.params.id
//     let [note, setNote] = useState(null)

//     useEffect(() => {
//         getNote()
//     }, [noteId])


//     let getNote = async () => {
//         if (noteId === 'new') return

//         let response = await fetch(`/api/notes/${noteId}/`)
//         let data = await response.json()
//         setNote(data)
//     }
//     let handleChange = (value) => {
//       setRecipe(recipe => ({ ...recipe, 'body': value }))
//       console.log('Handle Change:', recipe)
//   }

//   return (
//     <>
//     <textarea onChange={(e) => { handleChange(e.target.value) }} value={recipe?.name}></textarea>
//     <MyRecipe recipe={recipe}/>
//   </>
//   )
// }
 

   // const getMyRecipe = async() =>{
     
    //   const res = await fetchRecipeByID(recipeID)
    //   const body = await res.json()
      
    //   setRecipe(body.result)
    //   console.log(body)
    // }
    // useEffect( () => {

    //   async function getMyRecipe() {
    //     const res = await fetch(`http://127.0.0.1:8000/recipes/${recipeID}`)
    //     const body = await res.json()
    //     setRecipe(body.res)
        
    //   }
    //   getMyRecipe()
    // }, [])


  // const getMyRecipe = async() =>{
     
    //   const res = await fetchRecipeByID(recipeID)
    //   const body = await res.json()
      
    //   setRecipe(body.result)
    //   console.log(body)
    // }
    // useEffect( () => {

    //   async function getMyRecipe() {
    //     const res = await fetch(`http://127.0.0.1:8000/recipes/${recipeID}`)
    //     const body = await res.json()
    //     setRecipe(body.res)
        
    //   }
    //   getMyRecipe()
    // }, [])


// Functional solution:
// function ArticlePage(props) {
//   const [ article, setArticle ] = React.useState(null);

//   useEffect(() => {
//     const fetchArticleAsync = async () => {
//       try {
//         const articleJson = await fetchArticleByID(props.match.params.articleID);
//         setArticle(articleJson);
//       } catch (e) {
//           console.error('error fetching article: ', e);
//         }
//       };
  
//       if (article === null) {
//         fetchArticleAsync();
//       }
//       }, [article]);
        
//   return (
//       <div>
//         {article ? <Article {...article} /> :
//           <span>404: Article Not Found</span>
//         }
//       </div>
//     );
//   }
            
// export default ArticlePage;
 //Functional solution:
//  function RecipePage() {
//    const [ recipe, setRecipe ] = useState(null);
//    const {recipeID} = useParams()

//     useEffect(() => {
//      const fetchRecipeAsync = async () => {
//        try {
//         const recipe = await fetchRecipeByID(recipeID);
//         console.log(recipe)
//         setRecipe(recipe);
        
//        } catch (e) {
//          console.error('error fetching recipe: ', e);
//        }
//      };
//      console.log(recipe)
//      if (recipe === null) {
//        fetchRecipeAsync();
//      }
//    }, []);