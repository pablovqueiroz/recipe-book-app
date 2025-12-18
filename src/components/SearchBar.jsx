function SearchBar({ value = "", onChange }) {
  const handleChange = (e) => {
    const v = e.target.value;
    console.log("SearchBar input:", v);
    if (onChange) onChange(v);
  };

  return (
    <div className="SearchInputContainer">
      <input
        placeholder="Search.."
        className="SearchInput"
        name="text"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
