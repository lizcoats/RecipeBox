import React,{ useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Login() {
  let {loginUser} = useContext(AuthContext)
  return (
    <div> 
      <h3 style={{color:"#340529"}}>Login</h3>     
      <form onSubmit={loginUser}>
      <input type="text" name="username" placeholder="Enter Username" />
      <br></br>
      <br></br>
      <input type="password" name="password" placeholder="Enter Password" />
      <br></br>
      <br></br>
      <input className='search-button' type="submit"/>
      </form>
</div>
  )
}

export default Login