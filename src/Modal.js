import React from "react";

function Modal(props) {
    console.log(props);
    const { closeModal } = props
    const ingList = props.recipeObj
    console.log(ingList);
  return (
    <div className="modal-background">
        <div className="modal-container">
            <div className="close-button">
                <button onClick={ () => closeModal(false)}> X </button>
            </div>
            <div className="heading">
                <h4>Ingredients</h4>
            </div>
            <div className="ingredients">
                {
                    ingList.map( (ingredient, index) => {
                        return (
                            <p key={index}>
                                {ingredient.text}
                            </p>
                        )
                    })
                }
                <p></p>
                
            </div>
            <div className="footer">
                <button onClick={ () => closeModal(false)}>Go Back</button>
                {/* <button>Get Recipe</button> */}
            </div>
        </div>
    </div>
  );
}

export default Modal;