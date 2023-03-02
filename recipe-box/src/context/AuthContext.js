import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()



export default AuthContext;

export const AuthProvider = ({children}) =>{
  const[authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
  const[user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
  let [loading, setLoading] = useState(true)
 
  const navigate = useNavigate()

  let loginUser = async (e )=> {
            e.preventDefault()
            let response = await fetch('http://127.0.0.1:8000/token/', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
            })
            let data = await response.json()
            console.log('data:', data)
            console.log('response:', response)
            if(response.status === 200){
              setAuthTokens(data)
              setUser(jwt_decode(data.access))
              localStorage.setItem('authTokens', JSON.stringify(data))
              navigate('/')
            }else{
              alert('Not able to log you in')
            }
          }
  let logoutUser = () =>{
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/')

  }

let updateToken = async ()=> {

    let response = await fetch('http://127.0.0.1:8000/token/refresh/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':authTokens?.refresh})
    })

    let data = await response.json()
    
    if (response.status === 200){
        setAuthTokens(data)
        setUser(jwt_decode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
    }else{
        logoutUser()
    }
    if(loading){
      setLoading(false)
  }
}

  let  contextData ={
      user:user,
      authTokens: authTokens,
      loginUser: loginUser,
      logoutUser:logoutUser,
      // addRecipe: addRecipe
  }
  useEffect(()=> {

    if(loading){
        updateToken()
    }

    let fourMinutes = 1000 * 60 * 90

    let interval =  setInterval(()=> {
        if(authTokens){
            updateToken()
        }
    }, fourMinutes)
    return ()=> clearInterval(interval)

}, [authTokens, loading])

  return(
      <AuthContext.Provider value= {contextData}>
       {loading ? null : children}

      </AuthContext.Provider>


  )
}



// const addRecipe = async (recipeObject) => {
  //     // e.preventDefault()
  //     let response = await fetch("http://127.0.0.1:8000/",{
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       'Authorization': 'Bearer ' + String(authTokens.access)
  //     },
  //     body:JSON.stringify(recipeObject)
      // body:JSON.stringify({
      // 'name': e.target.name.value,
      // 'ingredients': e.target.ingredients.value,
      // 'time': e.target.time.value,
      // 'instructions': e.target.instructions.value
      // })
  //   })
  //   let body = await response.json()
  //   console.log(body)
  //   if(response.status === 200){
  //     navigate('/recipe')
  //   }else{
  //     alert('recipe added')
  //   }
  // }
