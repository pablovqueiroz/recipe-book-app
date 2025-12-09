import RecipeList from "../components/RecipeList";

function RecipeCard({ recipe }) {
  const { id, name, calories, image, servings } = recipe;
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{id}</p>
      <p>{calories}</p>
      <p>{servings}</p>
    </div>
  );
}

export default RecipeCard;
