import { useState } from 'react';
import '../styles/layout/SearchBar.scss';

const SearchBar = ({ onTermSubmit }) => {
  //states
  const [term, setTerm] = useState('');

  //handlers functions
  const onFormSubmit = (ev) => {
    ev.preventDefault();
  };

  const onSearchButton = () => {
    console.log('has hecho click en el botón de buscar');
    onTermSubmit(term);
    setTerm('');
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label> Clip search </label>
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button onClick={onSearchButton}>
            <i className="search icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
