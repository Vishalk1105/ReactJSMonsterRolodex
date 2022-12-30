import "./Search-Box.style.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
