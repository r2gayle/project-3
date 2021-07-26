import './App.css';

function RecipeCard(props) {
    // nested in props is the recipe obj
    let recipe = props.recipeObj.recipe
    // let ingredientsList = recipe.ingredients
    
    // let eee = ingredientsList.filter( (listObj) => {
    //     console.log(listObj.text) 
    // })
    // console.log(recipe.ingredients);
    // console.log(ingredientsList);
    // console.log(eee);


    return(
        <div className="recipe-card">
            <div>
                <img src={recipe.image} alt={recipe.label}/>
            </div>
            <h3>{recipe.label}</h3>
            <p>{recipe.ingredients.length} Ingredients</p>
            <p>Serves {recipe.yield}</p>
            <a href={recipe.url} target="_blank">Recipe</a>
        </div>
    )
}

export default RecipeCard;





