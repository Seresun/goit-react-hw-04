import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast'; // Ensure toast is imported
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      // Use toast for displaying an error message
      toast.error('Please enter a search term!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search images and photos"
          autoFocus
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
