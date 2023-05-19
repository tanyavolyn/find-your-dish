import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import  MyRecipesComponent from './MyRecipesComponent';
import './App.css';

function App() {
  const MY_ID ="0a0ca37c";
  const MY_KEY="a3eb39ff2da3f02064bb30dca3831018";

  const [myRecipes, setMyRecipes] = useState([]);
  const [mySearch, setMySearch] = useState('');
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  const functionResponse = async() => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }

  useEffect(() => {
    functionResponse()
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }
 
  const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(mySearch)
  }

  
return(
  <div className="App">

    <div className='home'>
    <Carousel/>
   
    </div>

    <div className='titel'>
      <h1>Find your dish</h1>
    </div>

    <div className='container-input'>
      <form onSubmit={finalSearch}>
        <input placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
        <button className="btn" onClick={finalSearch}>Search</button>
      </form>
    </div>






  <div className='container-recipe'>
    {myRecipes.map (element => (
      <MyRecipesComponent 
   
      label = {element.recipe.label}
      image = {element.recipe.image}
      calories = {element.recipe.calories}
      ingredients = {element.recipe.ingredientLines}
      />

    ))}

  </div>
  
  </div>
    
) 
}

export default App;
