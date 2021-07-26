import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
import Footer from './Footer'


// I want to be able to call API with particular params based on what the user has chosen 
// testingnggggg


function App() {
  
  const [ recipeArray, setRecipeArray ] = useState([]);
  const [ userChoice, setUserChoice ] = useState("");
  const [ query, setQuery ] = useState("")
  // api call rendering right away need sol


  
  useEffect( () => {
    const apiKey = `accc4d584071e2125321b1a0c56a89b3`
    const apiId = `9c9f80c0`
    // const reqUrl = `https://api.edamam.com/search`
    // const input = 'chicken'

    axios({
      url: `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`,
      // reqUrl: reqUrl,
      //           headers: {
      //               "Content-Type": "application/json"
      //           },
      params: {
        q: query,
        apiId: apiId,
        apiKey: apiKey,
      }
    }).then( (responseData) => {
      // once we get the data back, we want to UPDATE our state that holds the data, so we can use it in our JSX
      console.log(recipeArray)
      console.log(responseData.data.hits);
      setRecipeArray(responseData.data.hits)



      // on change of query this value should change, but only does on second query change
      console.log(recipeArray);
    })

  }, [query])


  const handleChange = (event) => {
    setUserChoice(event.target.value)
    
  }

  // const handleChangeTwo = (event) => {
  //   setCuisine(event.target.value)
  //   console.log(event.target.value);
    
  // }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setQuery(userChoice);
    // setCuisine(cuisine)
    
    setUserChoice("")

      
      console.log(userChoice);
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

// error handling
// I want modal to show only after submit has been hit AND array length is STILL 0
  // if search put in and the array/page is still empty ie no results then create modal box 

