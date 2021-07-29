import './App.css';
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import RecipeCard from './RecipeCard'
import Footer from './Footer'



function App() {
  
  const [ recipeArray, setRecipeArray ] = useState([]);
  const [ userChoice, setUserChoice ] = useState("");
  const [ query, setQuery ] = useState("")
  const [ cuisine, setCuisine ] = useState("")
  const firstMount = useRef(true);


  
  useEffect( () => {

    const apiKey = `accc4d584071e2125321b1a0c56a89b3`
    const apiId = `9c9f80c0`

    let params = {};

    if(query && cuisine) {
      params.query = query
      params.cuisineType = cuisine
    } else {
      if(query && !cuisine) {
        params.query = query
      }
    }

    // Conditional to stop API from being called on initial mount
    if (firstMount.current) {
      firstMount.current = false;
   } else {
     axios({

       
       url: `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`,
      
      apiId: apiId,
      apiKey: apiKey,
      params
     }).then( (responseData) => {
       setRecipeArray(responseData.data.hits)
     })
       
   }


  }, [query])


  const handleChange = (event) => {
    setUserChoice(event.target.value)
    
  }

  const handleChangeTwo = (event) => {
    setCuisine(event.target.value) 
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setQuery(userChoice);
    setCuisine(cuisine);
    
    setUserChoice("")
    }


  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Recipe Hunter</h1>
          <h2>We've got everything you need</h2>
        </div>
      </header>
      
      <main className="wrapper">

        <form action="" onSubmit={handleSubmit}>
          <div className="label-search-container">
            <label htmlFor="userFoodChoice">Choose your ingredients</label>
            <input type="text" 
            id="userFoodChoice"
            placeholder="Chicken, Asparagus"
            onChange={handleChange}
            value={userChoice}
            required
            />
          </div>

          <div className="drop-down-cuisine">
            <label htmlFor="userCuisine">Cuisine Type</label>
            <select name="userCuisine" id="userCuisine" value={cuisine} onChange={handleChangeTwo}>
              <option value="" selected>All</option>
              <option value="American">American</option>
              <option value="Asian">Asian</option>
              <option value="British">British</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Central Europe">Central Europe</option>
              <option value="Chinese">Chinese</option>
              <option value="Eastern Europe">Eastern Europe</option>
              <option value="French">French</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Kosher">Kosher</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Mexican">Mexican</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Nordic">Nordic</option>
              <option value="South American">South American</option>
              <option value="South East Asian">South East Asian</option>
            </select>
          </div>
          <button>Submit</button>
        </form>

      <section className="user-recipe">
        <ul>
      {
        recipeArray.map( (recipeObj, index) => {
          return (
                <li key={index}>
                <RecipeCard 
                recipeObj={recipeObj}
                />
                </li> 
            )
          })
      }
        </ul>
      </section>

      </main>

      <Footer />



    </div>
  );
}

export default App;