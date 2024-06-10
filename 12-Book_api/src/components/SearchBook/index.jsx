import { useState } from "react";
import PropTypes from "prop-types";

const SearchBook = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    } else {
      Swal.fire('Error', 'Please enter a valid search term', 'warning');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for books"
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

SearchBook.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBook;
