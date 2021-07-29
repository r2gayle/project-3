import './App.css';
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import RecipeCard from './RecipeCard'
import Footer from './Footer'


// I want to be able to call API with particular params based on what the user has chosen 
// testingnggggg


function App() {
  
  const [ recipeArray, setRecipeArray ] = useState([]);
  const [ userChoice, setUserChoice ] = useState("");
  const [ query, setQuery ] = useState("")
  const [ cuisine, setCuisine ] = useState("")
  // const [healthChoice, setHealthChoice ] = useState("")
  const firstMount = useRef(true);
  // api call rendering right away need sol


  
  useEffect( () => {

    const apiKey = `accc4d584071e2125321b1a0c56a89b3`
    const apiId = `9c9f80c0`
    // const reqUrl = `https://api.edamam.com/search`
    // const input = 'chicken'
    // current issue is that when I change value of cuisine type to a parameter on the first render it tries to grab cuisine which doesnt have a value for so runs an error, trying to find a way to stop use effet from running until it is called

    let params = {};

    // let params = {
    //   q: query,
    //   from: 0,
    //   to: 20,
    //   cuisineType: cuisine  
    // }

    if(query && cuisine) {
      params.query = query
      params.cuisineType = cuisine
      // params.Health = healthChoice
      console.log('hello');
    } else {
      if(query && !cuisine) {
        params.query = query
        console.log('bye');
      }
    }

    if (firstMount.current) {
      firstMount.current = false;
   } else {
     axios({

       
       url: `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`,
      
      apiId: apiId,
      apiKey: apiKey,
      params
     }).then( (responseData) => {
       // once we get the data back, we want to UPDATE our state that holds the data, so we can use it in our JSX
       console.log(recipeArray)
       console.log(responseData.data.hits);
       setRecipeArray(responseData.data.hits)
  
  
  
       // on change of query this value should change, but only does on second query change
       console.log(recipeArray);
     })
       
   }


  }, [query])


  const handleChange = (event) => {
    setUserChoice(event.target.value)
    
  }

  const handleChangeTwo = (event) => {
    setCuisine(event.target.value)
    console.log(event.target.value);
    
  }

  // const handleChangeThree = (event) => {
  //   setHealthChoice(event.target.value)
  //   console.log(event.target.value);
  // }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setQuery(userChoice);
    setCuisine(cuisine);
    // setHealthChoice(healthChoice)
    
    setUserChoice("")

      
      console.log(userChoice);
      console.log(cuisine);
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