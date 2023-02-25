import React from 'react'

function Recipe({title,image,ingredients,url}) {
  return (
    <div className='recipe'>
      <h1>{title}</h1>
			<a href={url}> Jump to recipe</a>
			<p>INGREDIENTS:</p>
			<ul className='ingredients-list'>
				{ingredients.map(ingredient=>(
					<li className='ingredients-text'>{ingredient.text}</li>
				))}
			</ul>
      <img className="recipe-image" src={image} alt=""/>
    </div>
  )
}

export default Recipe