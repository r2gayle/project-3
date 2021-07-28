import './App.css';
import Modal from './Modal'
import { useState } from 'react'

function RecipeCard(props) {
    // nested in props is the recipe obj
    let recipe = props.recipeObj.recipe
    console.log(props);
    // let ingredientsList = recipe.ingredients
    const [ openModal, setOpenModal] = useState(false)
    
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
            <p className="open-modal" 
            onClick={ () => {setOpenModal(true)}}>
            {recipe.ingredients.length} Ingredients
            </p>
            {openModal && <Modal closeModal={setOpenModal} test={props}/>}

            <p>Serves {recipe.yield}</p>
            <a href={recipe.url} target="_blank">Recipe</a>
{/* 
            <div>
                <button className="open-modal" onClick={ () => {setOpenModal(true)}}>To open Modal</button>
                
                {openModal && <Modal closeModal={setOpenModal}/>}
            </div> */}
        </div>
    )
}

export default RecipeCard;





