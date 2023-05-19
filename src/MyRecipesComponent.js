import './App.css';

function MyRecipesComponent({label, image, calories, ingredients}) {
    
    return(
    <div className='recipes'>
        <div className="recipes-label">
<h2>{label}</h2>
</div>
<div className="recipes-block">
    <div className='recipes-bild'>
            <img src={image} alt="Bild"/>
        </div>
      

      <div className='recipes-ingredients'>
        <ul className="list">
            {ingredients.map(ingredient => (
            <li>{ingredient}</li>
            ))}
        </ul>

   
<p className='kcal'>{calories.toFixed()} kcal</p>
</div>
        </div>



    </div>
    )
}

export default MyRecipesComponent;