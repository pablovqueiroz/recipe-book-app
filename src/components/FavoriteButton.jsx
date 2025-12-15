

function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button onClick={onClick}>
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
   
}
export default FavoriteButton
