import React from "react";

function Modal(props) {
    const { closeModal } = props
    const ingredientsList = props.recipeObj
  return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="close-button">
                {/* Function to close modal */}
                <button onClick={ () => closeModal(false)}> X </button>
            </div>
            <div className="heading">
                <h3>Ingredients</h3>
            </div>
            <div className="ingredients">
                {/* Iterate through all the ingredients for the recipe and display in a p tag */}
                {
                    ingredientsList.map( (ingredient, index) => {
                        return (
                            <p key={index}>
                                {ingredient.text}
                            </p>
                        )
                    })
                }
                
            </div>
            <div className="footer">
                {/* Function to close modal */}
                <button onClick={ () => closeModal(false)}>Go Back</button>
            </div>
        </div>
    </div>
  );
}

export default Modal;