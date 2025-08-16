import './search-box.styles.css'

const SearchBox = ( { onChangeHandler } ) => {
  return (
    <input type="search" className="search-box-container" onChange={onChangeHandler} />
  );
}

export default SearchBox;