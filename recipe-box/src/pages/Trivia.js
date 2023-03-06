import React, { useEffect } from 'react'
import {useState} from 'react'

function Trivia() {
  const API_KEY = process.env.REACT_APP_RAPID_API
  const[trivia, setTrivia ]= useState([])
  const[answer, setAnswer] = useState()
  const options = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': '402239cc25msh00e1128b8c47b08p10b88ejsn2282159025fb',
      'X-RapidAPI-Key': API_KEY,

      'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
    }
  };

  useEffect( () => {
  const getTrivia = async()=>{
    console.log(API_KEY)
    const response = await fetch('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia?category=fooddrink&limit=1', options)
    const data = await response.json();
    setTrivia(data);
  }
  getTrivia()
}, [])

const generateQuestions = () => {
  return trivia.map( i => <h3>{i.question}</h3>)}

const handleClick = async (e) => {
  e.preventDefault()
  setAnswer(trivia[0].answer)
}

const generateAnswer= () => {
  return <h3>{answer}</h3>
}

return (
    <div className='quiz-container'>
      <div>
        <h1>So you think you're a foodie? Let's find out.</h1>
        {trivia && generateQuestions()}
      </div>
      <div>
        <button className='search-button'onClick={handleClick}>Check answer</button>
        {answer && generateAnswer()}
      </div>
    </div>
  )
}
export default Trivia
