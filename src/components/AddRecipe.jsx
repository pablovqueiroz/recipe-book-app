import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddRecipe({ onAddRecipe }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleServingsChange = (e) => {
    setServings(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: uuidv4(),
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
      type,
      ingredients,
      instructions,
    };

    onAddRecipe(newRecipe);

    console.log("Submitted", newRecipe);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
    setType("-- None --");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleFormSubmit} className="addRecipeForm">
        <span>Add your Recipe</span>
        <div className="addRecipeInnerForm">
          <label>
            Name
            <input
              name="name"
              type="text"
              value={name}
              placeholder="Recipe/Dish Name"
              onChange={handleNameChange}
            />
          </label>

          <label>
            Recipe Image
            <input
              name="image"
              type="url"
              value={image}
              placeholder="Profile Image"
              onChange={handleImageChange}
            />
          </label>

          <label>
            Calories
            <input
              name="calories"
              type="number"
              value={calories}
              placeholder="calories"
              onChange={handleCaloriesChange}
            />
          </label>

          <label>
            Servings
            <input
              name="servings"
              type="number"
              value={servings}
              placeholder="servings"
              onChange={handleServingsChange}
            />
          </label>

          <label>
            Type
            <select name="type" value={type} onChange={handleTypeChange}>
              <option value="">-- None --</option>
              <option value="Pasta & Pizza">Pasta & Pizza</option>
              <option value="Fish">Fish</option>
              <option value="Meat">Meat</option>
              <option value="Salad">Salad</option>
              <option value="Asian">Asian</option>
              <option value="Mexican">Mexican</option>
              <option value="Eastern European">Eastern European</option>
              <option value="Indian">Indian</option>
              <option value="Dessert">Dessert</option>
              <option value="Soup">Soup</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
          </label>

          <label>
            Ingredients
            <textarea
              name="ingredients"
              type="text"
              value={ingredients}
              placeholder="Ingredients"
              onChange={handleIngredientsChange}
            />
          </label>

          <label>
            Instructions
            <textarea
              name="instructions"
              type="text"
              value={instructions}
              placeholder="Instructions"
              onChange={handleInstructionsChange}
            />
          </label>
        </div>
        <div className="add-recipe-btn">
          <button type="submit">Add Recipe</button>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}
export default AddRecipe;
