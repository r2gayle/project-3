import './App.css';
import Modal from './Modal'
import { useState } from 'react'

function RecipeCard(props) {
    let recipe = props.recipeObj.recipe
    const [ openModal, setOpenModal] = useState(false)
    


    return(
        <div className="recipe-card">
            <div>
                <img src={recipe.image} alt={recipe.label}/>
            </div>
            <h3>{recipe.label}</h3>
            {/* Function to display modal */}
            <button className="open-modal" 
            onClick={ () => {setOpenModal(true)}}>
            {recipe.ingredients.length} Ingredients
            </button>
            {openModal && <Modal closeModal={setOpenModal} recipeObj={props.recipeObj.recipe.ingredients}/>}

            <p>Serves {recipe.yield}</p>
            <a href={recipe.url} target="_blank">Recipe</a>
        </div>
    )
}

export default RecipeCard;





