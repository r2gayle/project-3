import React from "react";

function Modal({ closeModal }, props) {
    console.log(props);
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
                <p></p>
                <p>here is stuff</p>
                <p>here is stuff</p>
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