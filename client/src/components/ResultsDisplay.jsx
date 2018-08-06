import React from 'react';

const ResultsDisplay = ({recipes}) => {
  if (!recipes) return (<div>Recipes you search for will populate here!</div>)
  if (!recipes.length) return (<div>No recipes found for your query. Please try again!</div>)
  return (
    <div>
      {recipes.map((recipe, i) => (
        <div key={i} className="recipe-container">
          <img src={recipe.thumbnail} className="recipe-image" />
          <a href={recipe.href}> <h1 className="recipe-title">{recipe.title}</h1></a>
          <h2 className="recipe-ingredients">Ingredients: {recipe.ingredients}</h2>
        </div>
      ))}
    </div>
  )
}

export default ResultsDisplay;