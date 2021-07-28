import React from "react";

function Modal(props) {
    console.log(props);
    const { closeModal } = props
    const ingredientsList = props.recipeObj
    console.log(props);
  return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="close-button">
                <button onClick={ () => closeModal(false)}> X </button>
            </div>
            <div className="heading">
                <h3>Ingredients</h3>
            </div>
            <div className="ingredients">
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
                <button onClick={ () => closeModal(false)}>Go Back</button>
            </div>
        </div>
    </div>
  );
}

export default Modal;